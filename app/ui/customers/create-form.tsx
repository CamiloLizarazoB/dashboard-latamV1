'use client';
import { BranchOffice, Customer, Product, Seller } from '@/app/lib/definitions';
import { createClient, createSale, fetchProducts } from '@/app/lib/actions';
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
    createClient(initialState, data)
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="flex">
        <div className="flex-1 p-8">
          <h2 className="mb-2 text-4xl font-bold text-blue-800">New Client</h2>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-600">Client</h3>
            <div className="mt-4 flex space-x-4">
              <input
                type="text"
                className="w-full border p-2"
                {...register('customer_rut', { required: true })}
              />
              <input
                type="text"
                className="w-full border p-2"
                {...register('customer_name', { required: true })}
              />
              <input
                type="text"
                className="w-full border p-2"
                {...register('customer_lastname', { required: true })}
              />
              <input
                type="text"
                className="w-full border p-2"
                {...register('customer_phone', { required: true })}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-600">Address</h3>
            {fields.map((field, index) => (
              <div key={index} className="mt-4 flex space-x-4">
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`address.${index}.street`)}
                />
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`address.${index}.number`)}
                />
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`address.${index}.commune`)}
                />
                <input
                  type="text"
                  className="w-1/4 border p-2"
                  {...register(`address.${index}.city`)}
                />
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
