export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Supplier = {
  supplier_id: string;
  supplier_rut: string;
  supplier_name: string;
  supplier_phone: string;
  supplier_website?: string;
  supplier_address: string;
};

export type Seller = {
  seller_id: string;
  seller_rut: string;
  seller_name: string;
  seller_lastname: string;
  seller_phone: string;
  seller_birthdate: Date;
  seller_email: string;
  seller_address: string;
};

export type Customer = {
  customer_id: string;
  customer_rut: string;
  customer_name: string;
  customer_lastname: string;
  customer_phone: string;
  ustomer_address: string;
};

export type Product = {
  product_id: string;
  product_name: string;
  product_price: number;
  product_stock: number;
  branch_office_id: string
};

export type BranchOffice = {
  branch_office_id: string;
  branch_office_name: string;
  branch_office_country: string;
  branch_office_currency: string;
};

export type Sale = {
  sale_id: string;
  sale_date: Date;
  seller_id: string;
  customer_id: string;
  branch_office_id: string;
  total_sale_amount: number;
  sale_details: string;
};

