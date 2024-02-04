'use server';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { fetchAllProducts, fetchProductsByIdOffice, fetchSaleById } from './data';

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createSale(prevState: State, formData: any) {
  const dateSale = new Date().toLocaleDateString();
  const jsonString = JSON.stringify(formData.products);
  const sale_details = jsonString.substring(1, jsonString.length - 1);

  try {
    await sql`
      INSERT INTO sales (sale_date, seller_id, customer_id, branch_office_id, total_sale_amount, sale_details)
      VALUES (${dateSale}, ${formData.seller}, ${formData.customer}, ${formData.office}, ${formData.total}, ${sale_details})
    `;
  } catch (error) {
    console.log('🚀 ~ createSale ~ error:', error);
    return { message: 'Database Error: Failed to Update Slaes.' };
  }

  revalidatePath('/dashboard/sales');
  redirect('/dashboard/sales');
}

export async function createClient(prevState: State, formData: any) {
  const jsonString = JSON.stringify(formData.address);
  const customer_address = jsonString.substring(1, jsonString.length - 1);

  try {
    await sql`
      INSERT INTO customers (customer_rut, customer_name, customer_lastname, customer_phone, customer_address)
      VALUES (
        ${formData.customer_rut}, 
        ${formData.customer_name}, 
        ${formData.customer_lastname}, 
        ${formData.customer_phone},
        ${customer_address})
    `;
  } catch (error) {
    console.log('🚀 ~ createSale ~ error:', error);
    return { message: 'Database Error: Failed to Update Slaes.' };
  }

  revalidatePath('/dashboard/sales/create');
  redirect('/dashboard/sales/create');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export const SaleById = async (id: string) => {
  const products = await fetchSaleById(id);
  return products;
};

export const fetchProducts = async (id: string) => {
  const products = await fetchProductsByIdOffice(id);
  return products;
};

export const allProducts = async () => {
  const products = await fetchAllProducts();
  return products;
};

export const signOutAction = async () => {
  'use server';
  await signOut();
}