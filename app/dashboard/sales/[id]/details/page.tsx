import { notFound } from 'next/navigation';
import { SaleById } from '@/app/lib/actions';
import { Sale } from '@/app/lib/definitions';
import { SaleDetailsReturn } from '@/app/ui/sales/buttons';
import { openSansExtraBold } from '@/app/ui/fonts';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [sale] = await Promise.all([SaleById(id)]);
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-20">
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
            <p className="text-gray-700">{saleData.sale_id}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Cliente</h3>
            <p className="text-gray-700">{saleData.customer_id}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Sucursal</h3>
            <p className="text-gray-700">{saleData.branch_office_id}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Total Venta</h3>
            <p className="text-gray-700">$ {saleData.total_sale_amount}</p>
          </div>
        </div>

        <h2 className="mb-2 mt-8 text-xl font-bold">Detalles de Productos</h2>
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
                <td className="px-4 py-2">{detail.productId}</td>
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
