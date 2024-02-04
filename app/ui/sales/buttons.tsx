import { PencilIcon, PlusIcon, TrashIcon, EyeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateSale() {
  return (
    <Link
      href="/dashboard/sales/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Sale</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function SaleDetails({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/sales/${id}/details`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}

export function SaleDetailsReturn() {
  return (
    <Link
      href={`/dashboard/sales`}
    >
      <span className="hidden md:block">Volver</span>
    </Link>
  );
}