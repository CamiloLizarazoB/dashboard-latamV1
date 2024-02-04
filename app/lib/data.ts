import { sql } from '@/node_modules/@vercel/postgres/dist/index.cjs';
import {
  Customer,
  User,
  BranchOffice,
  Product,
  Seller,
  Sale,
} from './definitions';

export async function fetchSales() {
  try {
    const data = await sql<Sale>`
      SELECT *
      FROM sales
      ORDER BY sale_date ASC
    `;
    const sales = data.rows;
    return sales;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all sales.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<Customer>`
      SELECT *
      FROM customers
      ORDER BY customer_name ASC
    `;
    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
export async function fetchSellers() {
  try {
    const data = await sql<Seller>`
      SELECT *
      FROM sellers
      ORDER BY seller_name ASC
    `;
    const sellers = data.rows;
    return sellers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all sellers.');
  }
}

export async function fetchBranchOffice() {
  try {
    const data = await sql<BranchOffice>`
      SELECT *
      FROM branchoffices
      ORDER BY branch_office_name ASC
    `;
    const branchoffices = data.rows;

    return branchoffices;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all branchoffices.');
  }
}
export async function fetchSaleById(id: string) {
  try {
    const data = await sql<Sale>`
      SELECT *
      FROM sales
      WHERE sale_id = ${id}
    `;
    const branchoffices = data.rows;

    return branchoffices;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all branchoffices.');
  }
}
export async function fetchProductsByIdOffice(office_id: string) {
  try {
    if (office_id) {
      const data = await sql<Product>`
      SELECT *
      FROM products
      WHERE Branch_office_id = ${office_id}
      ORDER BY Product_name ASC
    `;
      const products = data.rows;
      return products;
    } else {
      return null;
    }
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products.');
  }
}
export async function fetchAllProducts() {
  try {
      const data = await sql<Product>`
      SELECT *
      FROM products
      ORDER BY Product_name ASC
    `;
      const products = data.rows;
      return products;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
