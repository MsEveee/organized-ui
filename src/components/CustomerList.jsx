import { ArrowDownUp, Filter, Search, X } from 'lucide-react'
import customer from '../Array/customer'
import Overview from './Overview'


const CustomerList = () => {

  return (
    <div>

      <Overview />

      <div className='flex justify-between '>
        <div className='font-semibold text-2xl'>
          <h2>Customer List</h2>
        </div>

        <div className='flex gap-4 '>
          <button className='flex border rounded-lg h-7 px-2 w-28 gap-3'>
            All time
            <X  className='w-4'/>
          </button>

          <button className='flex border rounded-lg h-7 px-2 w-36 gap-3'>
            Team plan
            <X className='w-4' />
          </button>

          <button className='flex border rounded-lg h-7 px-2 w-28 gap-3'>
            Active
            <X className='w-4' />
          </button>

          <button className='flex border rounded-lg h-7 py-1 px-2 w-36 gap-3'>
            <Filter className='w-4' />
            More filters
          </button>

          <button className="relative flex items-center">
    <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 " />
        <input
type="search"className="pl-10 pr-4 py-1 w-full border border-gray-300 rounded focus:outline-none"placeholder="Search..."/>
    </div>
</button>

        </div>
      </div>


      <div className='overflow-auto max-h-[70vh] mt-7'>
        <table className="w-full ">

          <thead>
            <tr className='text-gray-600 bg-gray-100 w-full '>
              <th className='pr-10'>FULL NAME - MAIL</th>
              <th className='flex gap-2'>
                BILLING DATE
                <ArrowDownUp className='w-3' />
              </th>
              <th>PLAN</th>
              <th>AMOUNT</th>
              <th>TOTAL USERS</th>
              <th>DETAILS</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              customer.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className='pl-32'>{item.name} <br /><span>{item.email}</span></td>
                  <td>{item.billingdate}</td>
                  <td className='pl-14'>
                    <button className='border rounded-full border-purple-400 w-16 text-purple-400'>{item.plan}</button>
                  </td>
                  <td className='pl-16'>{item.amount} <br /><span>{item.category}</span></td>
                  <td className='pl-14'>{item.totalusers}</td>
                  <td className='pl-10 text-blue-500 underline'><a href="">{item.details}</a></td>
                  <td>{item.icon}</td>
                </tr>

              ))
            }

          </tbody>
        </table>
      </div>

    </div>

  )
}

export default CustomerList