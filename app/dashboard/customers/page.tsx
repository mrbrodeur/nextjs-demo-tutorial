import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';
 
export default async function Page(props:{}) {
  const poo = 'poo'
  return (
    <main>
      <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <Suspense fallback={<TableRowSkeleton />}>
              <CustomersTable />
            </Suspense>
          </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
      </div>
    </main>
  );
}