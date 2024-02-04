import Form from '@/app/ui/sales/create-form';
import {
  fetchBranchOffice,
  fetchCustomers,
  fetchSellers,
} from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const branchOffice = await fetchBranchOffice();
  const sellers = await fetchSellers();

  return (
    <main>
      <Form
        customers={customers}
        branchOffice={branchOffice}
        sellers={sellers}
      />
    </main>
  );
}
