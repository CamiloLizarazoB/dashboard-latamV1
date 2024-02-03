
import Form from '@/app/ui/sales/create-form';
import Breadcrumbs from '@/app/ui/sales/breadcrumbs';
import { fetchBranchOffice, fetchCustomers, fetchSellers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const branchOffice = await fetchBranchOffice();
  const sellers = await fetchSellers()

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
      <Form customers={customers} branchOffice={branchOffice} sellers={sellers}/>
    </main>
  );
}
