import Pagination from '@/app/ui/sales/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/sales/table';
import { CreateSale } from '@/app/ui/sales/buttons';
import { lusitana } from '@/app/ui/fonts';
import { SalesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-2 text-4xl font-bold text-blue-800">Sales</h2>{' '}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateSale />
      </div>
      <Suspense key={query + currentPage} fallback={<SalesTableSkeleton />}>
        <Table />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
