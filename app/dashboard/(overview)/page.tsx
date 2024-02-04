import { openSansBold } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import Form from '@/app/ui/sales/create-form';
import { fetchBranchOffice, fetchCustomers, fetchSellers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const branchOffice = await fetchBranchOffice();
  const sellers = await fetchSellers();

  return (
    <main>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Sales', href: '/dashboard/sales' },
          {
            label: 'Create Invoice',
            href: '/dashboard/sales/create',
            active: true,
          },
        ]}
      /> */}
      <Form
        customers={customers}
        branchOffice={branchOffice}
        sellers={sellers}
      />
    </main>
  );
}
