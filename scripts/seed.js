const { db } = require('@vercel/postgres');
const {
  suppliers,
  users,
  customers,
  products,
  branchOffices,
  sales,
  sellers,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedSuppliers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS suppliers (
        supplier_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        supplier_rut VARCHAR(20) NOT NULL,
        supplier_name VARCHAR(255) NOT NULL,
        supplier_phone VARCHAR(15) NOT NULL,
        supplier_website VARCHAR(255),
        supplier_address VARCHAR(255) NOT NULL
      );
    `;

    // Insert data into the "invoices" table
    const insertedSuppliers = await Promise.all(
      suppliers.map(
        (suppliers) => client.sql`
        INSERT INTO suppliers (supplier_id, supplier_rut, supplier_name, supplier_phone, supplier_website, supplier_address)
        VALUES (
          ${suppliers.supplier_id}, 
          ${suppliers.supplier_rut}, 
          ${suppliers.supplier_name}, 
          ${suppliers.supplier_phone}, 
          ${suppliers.supplier_website}, 
          ${suppliers.supplier_address})
        ON CONFLICT (supplier_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      suppliers: insertedSuppliers,
    };
  } catch (error) {
    console.error('Error seeding suppliers:', error);
    throw error;
  }
}
async function seedCutomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        customer_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_rut VARCHAR(20) NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        customer_lastname VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(15) NOT NULL,
        customer_address VARCHAR(255) NOT NULL
      );
    `;

    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (customer_id, customer_rut, customer_name, customer_lastname, customer_phone, customer_address)
        VALUES (
          ${customer.customer_id}, 
          ${customer.customer_rut}, 
          ${customer.customer_name}, 
          ${customer.customer_lastname}, 
          ${customer.customer_phone},
          ${customer.customer_address})
        ON CONFLICT (customer_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}
async function seedSellers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sellers (
        seller_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        seller_rut VARCHAR(20) NOT NULL,
        seller_name VARCHAR(255) NOT NULL,
        seller_lastname VARCHAR(255) NOT NULL,
        seller_phone VARCHAR(15) NOT NULL,
        seller_birthdate DATE NOT NULL,
        seller_email VARCHAR(255) NOT NULL,
        seller_adress VARCHAR(255) NOT NULL
      );
    `;

    const insertedSuppliers = await Promise.all(
      sellers.map(
        (seller) => client.sql`
        INSERT INTO sellers (seller_id, seller_rut, seller_name, seller_lastname, seller_phone, seller_birthdate, seller_email, seller_adress)
        VALUES (
          ${seller.seller_id}, 
          ${seller.seller_rut}, 
          ${seller.seller_name}, 
          ${seller.seller_lastname}, 
          ${seller.seller_phone}, 
          ${seller.seller_birthdate},
          ${seller.seller_email},
          ${seller.seller_address})
        ON CONFLICT (seller_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      sellers: insertedSuppliers,
    };
  } catch (error) {
    console.error('Error seeding suppliers:', error);
    throw error;
  }
}
async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        product_price DECIMAL(10,2) NOT NULL,
        product_stock INT NOT NULL,
        branch_office_id UUID,
        FOREIGN KEY (branch_office_id) REFERENCES BranchOffices(branch_office_id)
      );
    `;

    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (product_id, product_name, product_price, product_stock, branch_office_id)
        VALUES (
          ${product.product_id}, 
          ${product.product_name}, 
          ${product.product_price}, 
          ${product.product_stock}, 
          ${product.branch_office_id})
        ON CONFLICT (product_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}
async function seedBranchOffices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS branchOffices (
        branch_office_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        branch_office_name VARCHAR(255) NOT NULL,
        branch_office_country VARCHAR(255) NOT NULL,
        branch_office_currecy VARCHAR(3) NOT NULL
      );
    `;

    const insertedBranchOffice = await Promise.all(
      branchOffices.map(
        (branchOffice) => client.sql`
        INSERT INTO branchOffices (branch_office_id, branch_office_name, branch_office_country, branch_office_currecy)
        VALUES (
          ${branchOffice.branch_office_id}, 
          ${branchOffice.branch_office_name}, 
          ${branchOffice.branch_office_country},
          ${branchOffice.branch_office_currecy})
        ON CONFLICT (branch_office_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      branchOffices: insertedBranchOffice,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}
async function seedSale(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sales (
        sale_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        sale_date DATE NOT NULL,
        seller_id UUID,
        customer_id UUID,
        branch_office_id UUID,
        total_sale_amount DECIMAL(10,2) NOT NULL,
        sale_details TEXT NOT NULL,
        FOREIGN KEY (seller_id) REFERENCES sellers(seller_id),
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
        FOREIGN KEY (branch_office_id) REFERENCES branchOffices(branch_office_id)
      );
    `;

    const insertedSales = await Promise.all(
      sales.map(
        (sale) => client.sql`
        INSERT INTO sales (sale_id, sale_date, seller_id, customer_id, branch_office_id, total_sale_amount, sale_details)
        VALUES (
          ${sale.sale_id}, 
          ${sale.sale_date}, 
          ${sale.seller_id},
          ${sale.customer_id},
          ${sale.branch_office_id},
          ${sale.total_sale_amount},
          ${sale.sale_details})
        ON CONFLICT (sale_id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      sales: insertedSales,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedSuppliers(client);
  // await seedSellers(client);
  // await seedCutomers(client);
  // await seedProducts(client);
  // await seedBranchOffices(client);
  // await seedSale(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
