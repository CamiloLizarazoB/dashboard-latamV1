// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const suppliers = [
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "1234567890",
    "supplier_name": "ABC Corporation",
    "supplier_phone": "+1234567890",
    "supplier_website": "http://www.abccorp.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "9876543210",
    "supplier_name": "XYZ Ltd.",
    "supplier_phone": "+9876543210",
    "supplier_website": "http://www.xyzltd.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "4567890123",
    "supplier_name": "PQR Enterprises",
    "supplier_phone": "+4567890123",
    "supplier_website": "http://www.pqrenterprises.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "3210987654",
    "supplier_name": "LMN Industries",
    "supplier_phone": "+3210987654",
    "supplier_website": "http://www.lmnindustries.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}',
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "7890123456",
    "supplier_name": "EFG Co.",
    "supplier_phone": "+7890123456",
    "supplier_website": "http://www.efgco.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "2345678901",
    "supplier_name": "UVW Solutions",
    "supplier_phone": "+2345678901",
    "supplier_website": "http://www.uvwsolutions.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "8901234567",
    "supplier_name": "RST Innovations",
    "supplier_phone": "+8901234567",
    "supplier_website": "http://www.rstinnovations.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "5678901234",
    "supplier_name": "JKL Ventures",
    "supplier_phone": "+5678901234",
    "supplier_website": "http://www.jklventures.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "0123456789",
    "supplier_name": "MNO Enterprises",
    "supplier_phone": "+0123456789",
    "supplier_website": "http://www.mnoenterprises.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "supplier_id": uuidv4(),
    "supplier_rut": "4567890123",
    "supplier_name": "GHI Ltd.",
    "supplier_phone": "+4567890123",
    "supplier_website": "http://www.ghiltd.com",
    "supplier_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  }
];

const customers = [
  {
    "customer_id": uuidv4(),
    "customer_rut": "123456789-0",
    "customer_name": "John",
    "customer_lastname": "Doe",
    "customer_phone": "+1234567890",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "987654321-0",
    "customer_name": "Jane",
    "customer_lastname": "Smith",
    "customer_phone": "+9876543210",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "234567890-1",
    "customer_name": "Alice",
    "customer_lastname": "Johnson",
    "customer_phone": "+2345678901",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "345678901-2",
    "customer_name": "Bob",
    "customer_lastname": "Williams",
    "customer_phone": "+3456789012",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "456789012-3",
    "customer_name": "Eva",
    "customer_lastname": "Davis",
    "customer_phone": "+4567890123",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "567890123-4",
    "customer_name": "Michael",
    "customer_lastname": "Brown",
    "customer_phone": "+5678901234",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "678901234-5",
    "customer_name": "Sophia",
    "customer_lastname": "Miller",
    "customer_phone": "+6789012345",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "789012345-6",
    "customer_name": "Daniel",
    "customer_lastname": "Jones",
    "customer_phone": "+7890123456",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "890123456-7",
    "customer_name": "Olivia",
    "customer_lastname": "Taylor",
    "customer_phone": "+8901234567",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "901234567-8",
    "customer_name": "James",
    "customer_lastname": "Anderson",
    "customer_phone": "+9012345678",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "123456789-0",
    "customer_name": "Emma",
    "customer_lastname": "Johnson",
    "customer_phone": "+1234567890",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "987654321-0",
    "customer_name": "Noah",
    "customer_lastname": "Wilson",
    "customer_phone": "+9876543210",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "234567890-1",
    "customer_name": "Ava",
    "customer_lastname": "Brown",
    "customer_phone": "+2345678901",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "345678901-2",
    "customer_name": "Liam",
    "customer_lastname": "Smith",
    "customer_phone": "+3456789012",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "456789012-3",
    "customer_name": "Isabella",
    "customer_lastname": "Williams",
    "customer_phone": "+4567890123",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "567890123-4",
    "customer_name": "Mia",
    "customer_lastname": "Davis",
    "customer_phone": "+5678901234",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "678901234-5",
    "customer_name": "Logan",
    "customer_lastname": "Brown",
    "customer_phone": "+6789012345",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "789012345-6",
    "customer_name": "Sophie",
    "customer_lastname": "Jones",
    "customer_phone": "+7890123456",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "890123456-7",
    "customer_name": "Mason",
    "customer_lastname": "Taylor",
    "customer_phone": "+8901234567",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "customer_id": uuidv4(),
    "customer_rut": "901234567-8",
    "customer_name": "Aria",
    "customer_lastname": "Anderson",
    "customer_phone": "+9012345678",
    "customer_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  }
];

const sellers = [
  {
    "seller_id": uuidv4(),
    "seller_rut": "123456789",
    "seller_name": "John",
    "seller_lastname": "Doe",
    "seller_phone": "+1234567890",
    "seller_birthdate": "1990-01-01",
    "seller_email": "john.doe@example.com",
    "seller_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  },
  {
    "seller_id": uuidv4(),
    "seller_rut": "987654321",
    "seller_name": "Jane",
    "seller_lastname": "Smith",
    "seller_phone": "+9876543210",
    "seller_birthdate": "1995-05-15",
    "seller_email": "jane.smith@example.com",
    "seller_address": '{"street": "Main St","number": "123","commune": "Downtown","city": "City1"}'
  }
];

const products = [
  {
    "product_id": uuidv4(),
    "product_name": "Laptop",
    "product_price": 999.99,
    "product_stock": 50,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Smartphone",
    "product_price": 499.99,
    "product_stock": 100,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Headphones",
    "product_price": 79.99,
    "product_stock": 200,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Tablet",
    "product_price": 299.99,
    "product_stock": 30,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Camera",
    "product_price": 599.99,
    "product_stock": 15,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Smartwatch",
    "product_price": 129.99,
    "product_stock": 50,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Gaming Console",
    "product_price": 399.99,
    "product_stock": 20,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Wireless Router",
    "product_price": 49.99,
    "product_stock": 80,
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235"
  },
  {
    "product_id": uuidv4(),
    "product_name": "Fitness Tracker",
    "product_price": 89.99,
    "product_stock": 40,
    "branch_office_id": "3de1f420-d7a6-4997-94da-21a2bc42c898"
  },
  {
    "product_id": uuidv4(),
    "product_name": "External Hard Drive",
    "product_price": 129.99,
    "product_stock": 25,
    "branch_office_id": "1ab37fb6-15bc-4278-a848-11f4355bdacc"
  }
];

const branchOffices = [
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Main Branch",
    "branch_office_country": "United States",
    "branch_office_currency": "USD"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Downtown Office",
    "branch_office_country": "Canada",
    "branch_office_currency": "CAD"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Central Hub",
    "branch_office_country": "Australia",
    "branch_office_currency": "AUD"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Euro Central",
    "branch_office_country": "Germany",
    "branch_office_currency": "EUR"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "South America Center",
    "branch_office_country": "Brazil",
    "branch_office_currency": "BRL"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Asia-Pacific HQ",
    "branch_office_country": "Japan",
    "branch_office_currency": "JPY"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "North Region Office",
    "branch_office_country": "Colombia",
    "branch_office_currency": "COP"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Mediterranean Hub",
    "branch_office_country": "Spain",
    "branch_office_currency": "EUR"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "African Regional",
    "branch_office_country": "South Africa",
    "branch_office_currency": "ZAR"
  },
  {
    "branch_office_id": uuidv4(),
    "branch_office_name": "Scandinavian Center",
    "branch_office_country": "Sweden",
    "branch_office_currency": "SEK"
  }
];

const sales = [
  {
    "sale_id": uuidv4(),
    "sale_date": "2024-02-02",
    "seller_id": "7b8a7404-c78c-4a33-b947-4219bd81fb26",
    "customer_id": "1825d417-e1e1-4160-90c4-d79f71e0209b",
    "branch_office_id": "9d4c6729-aed9-4121-967e-cecf3fcde235",
    "total_sale_amount": 12500,
    "sale_details": '{"product_id": "1c43722c-491b-40e4-bed8-8207604f54a9","product_quantity": 2,"product_unit_price": 5000,"product_subtotal": 10000},{"product_id": 5,"product_quantity": "c17d6f15-31df-4a18-8042-fa70ebf5cda7	","product_unit_price": 2500,"product_subtotal": 2500}'
  },
  {
    "sale_id": uuidv4(),
    "sale_date": "2024-02-02",
    "seller_id": "6eddbb26-63ce-4ee0-8510-3a40802403f1",
    "customer_id": "907e7af0-b3ba-45f7-8133-8e4188e07a9c",
    "branch_office_id": "1ab37fb6-15bc-4278-a848-11f4355bdacc",
    "total_sale_amount": 8700,
    "sale_details": '{"product_id": "1c43722c-491b-40e4-bed8-8207604f54a9","product_quantity": 2,"product_unit_price": 2000,"product_subtotal": 4000},{"product_id": 5,"product_quantity": "a7005bb7-5e07-4e3f-8541-a0dbe23a8e5a","product_unit_price": 4700,"product_subtotal": 4700}'
  }
];


module.exports = {
  users,
  suppliers,
  customers,
  sellers,
  products,
  branchOffices,
  sales
};
