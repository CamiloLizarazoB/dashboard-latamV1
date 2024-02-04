import { notFound } from 'next/navigation';
import { allProducts, fetchProducts, SaleById } from '@/app/lib/actions';
import { Sale } from '@/app/lib/definitions';
import { SaleDetailsReturn } from '@/app/ui/sales/buttons';
import { openSansExtraBold } from '@/app/ui/fonts';
import {
  fetchBranchOffice,
  fetchCustomers,
  fetchSellers,
} from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [sale, sellers, customers, offices, products] = await Promise.all([
    SaleById(id),
    fetchSellers(),
    fetchCustomers(),
    fetchBranchOffice(),
    allProducts(),
  ]);
  const saleData: Sale = sale[0];
  const saleDetails =
    sale && JSON.parse(`[${saleData.sale_details.replace('\t', '')}]`);

  if (!sale) {
    notFound();
  }
  return (
    <main>
      <div className="flex-1 p-8">
        <h2
          className={`${openSansExtraBold.className} mb-2 text-4xl font-bold text-black`}
        >
          Sale detail
        </h2>
        <hr className="horizontal-line" />

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">ID Venta</h3>
            <p className="text-gray-700">{saleData.sale_id}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Fecha</h3>
            <p className="text-gray-700">{String(saleData.sale_date)}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Vendedor</h3>
            <p className="text-gray-700">
              {
                sellers.find(
                  (seller) => seller.seller_id === saleData.seller_id,
                )?.seller_name
              }
            </p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Cliente</h3>
            <p className="text-gray-700">
              {
                customers.find(
                  (customer) => customer.customer_id === saleData.customer_id,
                )?.customer_name
              }
            </p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Sucursal</h3>
            <p className="text-gray-700">
              {
                offices.find(
                  (office) =>
                    office.branch_office_id === saleData.branch_office_id,
                )?.branch_office_name
              }
            </p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Total Venta</h3>
            <p className="text-gray-700">$ {saleData.total_sale_amount}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="subtitle mb-2 text-lg font-semibold text-gray-600">
            Products details
          </h3>
          <hr />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Producto</th>
              <th className="px-4 py-2 text-center">Cantidad</th>
              <th className="px-4 py-2 text-right">Precio Unitario</th>
              <th className="px-4 py-2 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {saleDetails.map((detail: any) => (
              <tr key={detail.productId}>
                <td className="px-4 py-2">
                  {
                    products.find(
                      (product) => product.product_id === detail.productId,
                    )?.product_name
                  }
                </td>
                <td className="px-4 py-2 text-center">{detail.quantity}</td>
                <td className="px-4 py-2 text-right">$ {detail.price}</td>
                <td className="px-4 py-2 text-right">$ {detail.subTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="float-right mt-4 bg-blue-500 px-6 py-2 text-white">
        <SaleDetailsReturn />
      </button>
    </main>
  );
}
