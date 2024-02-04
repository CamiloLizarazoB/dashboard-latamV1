import { SaleDetails } from '@/app/ui/sales/buttons';
import { fetchSales } from '@/app/lib/data';

export default async function SalesTable() {
  const fetchSalesTable = await fetchSales();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Sale id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sale birtday
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Seller id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Customer id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Branch office id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {fetchSalesTable?.map((sale) => (
                <tr
                  key={sale.sale_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.sale_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.sale_date.toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.seller_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.customer_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.branch_office_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sale.total_sale_amount}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <SaleDetails id={sale.sale_id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
