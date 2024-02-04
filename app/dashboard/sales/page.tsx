import Pagination from '@/app/ui/sales/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/sales/table';
import { CreateSale } from '@/app/ui/sales/buttons';
import { lusitana, openSansExtraBold } from '@/app/ui/fonts';
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
      <div className="flex-1 p-8">
        <h2
          className={`${openSansExtraBold.className} mb-2 text-4xl font-bold text-black`}
        >
          Sales
        </h2>
        <hr className="horizontal-line" />
      </div>
      <div className="mt-4 flex justify-end items-center gap-2 md:mt-8">
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
