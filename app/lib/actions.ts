'use server';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { fetchProductsByIdOffice } from './data';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateSale = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

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

  revalidatePath('/dashboard');
  redirect('/dashboard');
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

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
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

export const fetchProducts = async (id: string) => {
  const products = await fetchProductsByIdOffice(id);
  return products;
};


export const signOutAction = async () => {
  'use server';
  await signOut();
}