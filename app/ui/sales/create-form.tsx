'use client';
import { BranchOffice, Customer, Product, Seller } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createSale, fetchProducts } from '@/app/lib/actions';
import { ChangeEvent, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export default function Form({
  customers,
  branchOffice,
  sellers,
}: {
  customers: Customer[];
  branchOffice: BranchOffice[];
  sellers: Seller[];
}) {
  const initialState = { message: null, errors: {} };

  const [selectedOffice, setSelectedOffice] = useState('');
  const [currency, setCurrency] = useState('');
  const [inputList, setInputList] = useState(['']); // Estado que almacena la lista de inputs
  const [total, setTotal] = useState('10000');
  const [subTotal, setSubTotal] = useState(['']);

  const [products, setProducts] = useState<Product[]>([]);

  const {
    control,
    register,
    watch,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer: '',
      office: '',
      currency: '',
      seller: '',
      total: '',
      products: [
        {
          productId: '',
          quantity: '',
          price: '',
          subTotal: '',
        },
      ],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'products', // unique name for your Field Array
    },
  );

  const formData = watch();
  const formSubmit = (data: any) => {
    createSale(initialState, data);
  };

  const handleOfficeChange = (event: any) => {
    const selectedOfficeId = event.target.value;
    setSelectedOffice(selectedOfficeId);
    const selectedBranchOffice = branchOffice.find(
      (office) => office.branch_office_id === selectedOfficeId,
    );
    setValue(
      'currency',
      selectedBranchOffice ? selectedBranchOffice.branch_office_currency : '',
    );
    handleSetProducts(selectedOfficeId);
  };

  const handleSetProducts = async (selectedOfficeId: string) => {
    const products = await fetchProducts(selectedOfficeId);
    products && setProducts(products);
  };

  const handleAddInput = () => {
    append({
      productId: '',
      quantity: '',
      price: '',
      subTotal: '',
    });
  };

  const handleRemoveInput = (index: number) => {
    remove(index);
  };

  const handleChangeQuantity = (index: number, field: any) => {
    const products = formData.products;
    const productSubTotal =
      Number(products?.[index].price) * Number(field.target.value);
    setValue(`products.${index}.subTotal`, String(productSubTotal));
    handleChangeSubtotal();
  };

  const handleChangePrice = (index: number, field: any) => {
    const products = formData.products;
    const productSubTotal =
      Number(field.target.value) * Number(products?.[index].quantity);
    setValue(`products.${index}.subTotal`, String(productSubTotal));
    handleChangeSubtotal();
  };

  const handleChangeSubtotal = () => {
    const products = formData.products;
    let total = 0;
    products?.map((product) => {
      total += Number(product?.subTotal);
    });
    setValue(`total`, String(total));
  };

  const handleChangeProduct = (
    value: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const productId = value.target.value;
    const filterProduct = products.find(
      (product) => product.product_id === productId,
    );
    filterProduct &&
      setValue(`products.${index}.price`, String(filterProduct?.product_price));
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="flex">
        <div className="flex-1 p-8">
          <h2 className="mb-2 text-4xl font-bold text-blue-800">New Sale</h2>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-600">Document</h3>
            <div className="mt-4 flex space-x-4">
              <select
                className="w-full border p-2"
                {...register('customer', { required: true })}
              >
                <option value="" disabled></option>
                {customers.map((customer) => (
                  <option
                    key={customer.customer_id}
                    value={customer.customer_id}
                  >
                    {customer.customer_name}
                  </option>
                ))}
              </select>{' '}
              <button className="bg-blue-500 px-4 py-2 text-white">
                <i className="fas fa-plus"></i>
              </button>
              <select
                {...register('office', { required: true })}
                className="w-full border p-2"
                aria-describedby="office-error"
                onChange={handleOfficeChange}
              >
                <option value="" disabled></option>
                {branchOffice.map((office) => (
                  <option
                    key={office.branch_office_id}
                    value={office.branch_office_id}
                  >
                    {office.branch_office_name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="w-full border p-2"
                {...register('currency', { required: true })}
                readOnly
              />
              <select
                {...register('seller', { required: true })}
                className="w-full border p-2"
                aria-describedby="seller-error"
              >
                <option value="" disabled></option>
                {sellers.map((seller) => (
                  <option key={seller.seller_id} value={seller.seller_id}>
                    {seller.seller_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-600">Details</h3>
            {fields.map((field, index) => (
              <div key={index} className="mt-4 flex space-x-4">
                <select
                  {...register(`products.${index}.productId`, {
                    required: true,
                  })}
                  className="w-1/2 border p-2"
                  aria-describedby="office-error"
                  onChange={({ ...field }) => handleChangeProduct(field, index)}
                >
                  <option value="" disabled></option>
                  {products.map((product) => (
                    <option key={product.product_id} value={product.product_id}>
                      {product.product_name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`products.${index}.quantity`)}
                  onChange={({ ...field }) =>
                    handleChangeQuantity(index, field)
                  }
                />
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`products.${index}.price`)}
                  onChange={({ ...field }) => handleChangePrice(index, field)}
                />
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`products.${index}.subTotal`)}
                />
                <button
                  onClick={() => handleRemoveInput(index)}
                  className="bg-blue-500 px-4 py-2 text-white"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
            <button
              onClick={handleAddInput}
              className="mt-4 bg-blue-500 px-6 py-2 text-white"
            >
              Add
            </button>
          </div>

          <div className="mt-8">
            <div className="flex justify-end">
              <input
                type="number"
                className="w-1/4 border p-2"
                {...register(`total`)}
                readOnly
              />
            </div>
            <button className="float-right mt-4 bg-blue-500 px-6 py-2 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
