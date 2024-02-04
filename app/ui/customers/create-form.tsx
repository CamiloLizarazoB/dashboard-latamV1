'use client';
import { BranchOffice, Customer, Product, Seller } from '@/app/lib/definitions';
import { createClient, createSale, fetchProducts } from '@/app/lib/actions';
import { ChangeEvent, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { openSansExtraBold } from '../fonts';

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
      customer_rut: '',
      customer_name: '',
      customer_lastname: '',
      customer_phone: '',
      address: [{ street: '', number: '', commune: '', city: '' }],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'address',
  });

  const formSubmit = (data: any) => {
    createClient(initialState, data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="flex">
        <div className="flex-1 p-8">
          <h2
            className={`${openSansExtraBold.className} mb-2 text-4xl font-bold text-black`}
          >
            New Client
          </h2>
          <hr className="horizontal-line" />
          <div className="mb-8">
            <h3 className="subtitle text-lg font-semibold text-gray-600">
              Client
            </h3>
            <hr />
            <div className="mt-4 flex space-x-4">
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="customer_rut"
                >
                  Customer rut
                </label>
                <input
                  type="text"
                  className="w-full border p-2"
                  {...register('customer_rut', {
                    required: 'Customer rut is required',
                  })}
                />
                {errors.customer_rut && (
                  <p className="text-red-500">{errors.customer_rut.message}</p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="customer_name"
                >
                  Customer name
                </label>
                <input
                  type="text"
                  className="w-full border p-2"
                  {...register('customer_name', {
                    required: 'Customer name is required',
                  })}
                />
                {errors.customer_name && (
                  <p className="text-red-500">{errors.customer_name.message}</p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="customer_lastname"
                >
                  Customer lastname
                </label>
                <input
                  type="text"
                  className="w-full border p-2"
                  {...register('customer_lastname', {
                    required: 'Customer lastname is required',
                  })}
                />
                {errors.customer_lastname && (
                  <p className="text-red-500">
                    {errors.customer_lastname.message}
                  </p>
                )}
              </div>
              <div className="block w-full">
                <label
                  className="mb-3 mt-5 block font-medium text-gray-900"
                  style={{ color: '#99a4b7' }}
                  htmlFor="customer_phone"
                >
                  Customer phone
                </label>
                <input
                  type="text"
                  className="w-full border p-2"
                  {...register('customer_phone', {
                    required: 'Customer phone number is required',
                  })}
                />
                {errors.customer_phone && (
                  <p className="text-red-500">
                    {errors.customer_phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="subtitle text-lg font-semibold text-gray-600 mb-2">
              Address
            </h3>
            <hr />
            {fields.map((field, index) => (
              <div key={index} className="mt-4 flex space-x-4">
                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="street"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`address.${index}.street`, {
                      required: 'Street is required',
                    })}
                  />
                  {errors.address?.[0]?.street && (
                    <p className="text-red-500">
                      {errors.address[0].street.message}
                    </p>
                  )}
                </div>

                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="number"
                  >
                    Number
                  </label>

                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`address.${index}.number`, {
                      required: 'Number is required',
                    })}
                  />
                  {errors.address?.[0]?.number && (
                    <p className="text-red-500">
                      {errors.address[0].number.message}
                    </p>
                  )}
                </div>

                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="commune"
                  >
                    commune
                  </label>

                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`address.${index}.commune`, {
                      required: 'Comune is required',
                    })}
                  />
                  {errors.address?.[0]?.commune && (
                    <p className="text-red-500">
                      {errors.address[0].commune.message}
                    </p>
                  )}
                </div>

                <div className="block w-full">
                  <label
                    className="mb-3 mt-5 block font-medium text-gray-900"
                    style={{ color: '#99a4b7' }}
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2"
                    {...register(`address.${index}.city`, {
                      required: 'City is required',
                    })}
                  />
                  {errors.address?.[0]?.city && (
                    <p className="text-red-500">
                      {errors.address[0].city.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="float-right mt-4 bg-blue-500 px-6 py-2 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
