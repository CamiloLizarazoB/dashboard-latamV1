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
import { openSansBold, openSansExtraBold, openSansSemiBold } from '../fonts';

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
    setValue(`office`, event.target.value, {
      shouldValidate: true,
    });
    const selectedOfficeId = event.target.value;
    setSelectedOffice(selectedOfficeId);
    const selectedBranchOffice = branchOffice.find(
      (office) => office.branch_office_id === selectedOfficeId,
    );
    setValue(
      'currency',
      selectedBranchOffice ? selectedBranchOffice.branch_office_currency : '',
      { shouldValidate: true },
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

  const handleChangeQuantity = (index: number, event: any) => {
    setValue(`products.${index}.quantity`, event.target.value, {
      shouldValidate: true,
    });
    const products = formData.products;
    const productSubTotal =
      Number(products?.[index].price) * Number(event.target.value);
    setValue(`products.${index}.subTotal`, String(productSubTotal));
    handleChangeSubtotal();
  };

  const handleChangePrice = (index: number, event: any) => {
    const products = formData.products;
    const productSubTotal =
      Number(event.target.value) * Number(products?.[index].quantity);
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
    event: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    setValue(`products.${index}.productId`, event.target.value, {
      shouldValidate: true,
    });
    const productId = event.target.value;
    const filterProduct = products.find(
      (product) => product.product_id === productId,
    );
    filterProduct &&
      setValue(`products.${index}.price`, String(filterProduct?.product_price));
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={`${openSansSemiBold.className}`}
    >
      <div className="flex">
        <div className="flex-1 p-8">
          <h2
            className={`${openSansExtraBold.className} mb-2 text-4xl font-bold text-black`}
          >
            New Sale
          </h2>
          <hr className="horizontal-line" />
          <div className="mb-8">
            <h3 className="subtitle mb-2 text-lg font-semibold text-gray-600">
              Document
            </h3>
            <hr />
            <div className="mt-4 flex space-x-4 text-lg">
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="email"
                >
                  Client
                </label>
                <div className="flex">
                  <select
                    className="mr-5 w-full border p-2"
                    {...register('customer', {
                      required: 'Customer is required',
                    })}
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
                  </select>
                  <button className="bg-blue-500 px-4 py-2 text-white">
                    <Link href="/dashboard/customers/create">
                      <i className="fas fa-plus"></i>
                    </Link>
                  </button>
                </div>
                {errors.customer && (
                  <p className="text-sm text-red-500">
                    {errors.customer.message}
                  </p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="office"
                >
                  Branch office
                </label>
                <select
                  {...register('office', {
                    required: 'Branch office is required',
                  })}
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
                {errors.office && (
                  <p className="text-sm text-red-500">
                    {errors.office.message}
                  </p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="currency"
                >
                  Currency
                </label>
                <input
                  type="text"
                  className="w-full border p-2"
                  {...register('currency', {
                    required: 'Currency is required',
                  })}
                  readOnly
                />
                {errors.currency && (
                  <p className="text-sm text-red-500">
                    {errors.currency.message}
                  </p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="seller"
                >
                  Seller
                </label>
                <select
                  {...register('seller', { required: 'Seller is required' })}
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
                {errors.seller && (
                  <p className="text-sm text-red-500">
                    {errors.seller.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="subtitle mb-2 text-lg font-semibold text-gray-600">
              Details
            </h3>
            <hr />
            {fields.map((field, index) => (
              <div key={index} className="mt-4 flex space-x-4">
                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="office"
                  >
                    Name
                  </label>
                  <select
                    {...register(`products.${index}.productId`, {
                      required: 'Name is required',
                    })}
                    className="w-full border p-2"
                    aria-describedby="office-error"
                    onChange={({ ...field }) =>
                      handleChangeProduct(field, index)
                    }
                  >
                    <option value="" disabled></option>
                    {products.map((product) => (
                      <option
                        key={product.product_id}
                        value={product.product_id}
                      >
                        {product.product_name}
                      </option>
                    ))}
                  </select>
                  {errors.products?.[index]?.productId && (
                    <p className="text-sm text-red-500">
                      {errors.products?.[index]?.productId?.message}
                    </p>
                  )}
                </div>
                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`products.${index}.quantity`, {
                      required: 'Quantity is required',
                    })}
                    onChange={({ ...field }) =>
                      handleChangeQuantity(index, field)
                    }
                  />
                  {errors?.products?.[0]?.quantity && (
                    <p className="text-sm text-red-500">
                      {errors?.products?.[0]?.quantity.message}
                    </p>
                  )}
                </div>
                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`products.${index}.price`)}
                    onChange={({ ...field }) => handleChangePrice(index, field)}
                    readOnly
                  />
                </div>
                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="subTotal"
                  >
                    Sub total
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full border p-2"
                      {...register(`products.${index}.subTotal`)}
                      readOnly
                    />
                    <button
                      onClick={() => handleRemoveInput(index)}
                      className="ml-5 bg-blue-500 px-4 py-2 text-white"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
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
            <div className="flex justify-end mb-5">
              <div className="block">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="total"
                >
                  Total
                </label>
                <input
                  type="number"
                  className="w-full border p-2"
                  {...register(`total`)}
                  readOnly
                />
              </div>
            </div>
            <hr />
            <button className="float-right mt-4 bg-blue-500 px-6 py-2 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
