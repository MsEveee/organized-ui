
import { ArrowDownUp, Filter, MoveLeft, Search, X } from 'lucide-react'
import customer from '../Array/customer'
import Overview from './Overview'
import { useState } from 'react'


const CustomerList = () => {

  //creating pagination using buttons and then setting state(to store and track the current page the user is on)
  const [isCurrentPage, setIsCurrentPage] = useState()

  // setting a state to filter and search customer by the name
  const [searchName, setSearchName] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  //function to filter customer based on the search input
  const filteredCustomers = customer.filter((data) => {
    const searchMatche = data.name.toLowerCase().includes(searchName.toLowerCase());
    const statusMatche = filterStatus === 'All' || data.status === statusFilter;

    return searchMatche && statusMatche;
  });

  const totalPages = Math.ceil(filteredCustomers.length / 6);
  const displayedCustomers = filteredCustomers.slice((isCurrentPage - 1) * 6, isCurrentPage * 6);


  return (
    <div>
      <Overview />
      <div className='border shadow-sm mr-8 ml-8 rounded py-7'>

        <div className='flex justify-between mr-8 px-7 '>
          <div className='font-semibold text-2xl'>
            <h2>Customer List</h2>
          </div>

          <div className='flex gap-4 flex-wrap  '>
            <button className='flex border rounded-lg h-7 px-2 w-28 md:w-28 gap-3 hover:text-white hover:bg-red-500'>
              All time
              <X className='w-4' />
            </button>

            <button className='flex border rounded-lg h-7 px-2 md:w-36 w-36 gap-3 hover:text-white hover:bg-red-500' >
              Team plan
              <X className='w-4' />
            </button>

            <button className='flex border rounded-lg h-7 px-2 md:w-28 w-28 gap-3 hover:text-white hover:bg-red-500'>
              Active
              <X className='w-4' />
            </button>

            <button className='flex border rounded-lg h-7 py-1 px-2 md:w-36 w-36 gap-3 hover:text-white hover:bg-red-500'>
              <Filter className='w-4' />
              More filters
            </button>

            <button className="relative flex items-center w-full md:w-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 " />
                <input
                  type="search" className="pl-10  pr-4 py-1 w-full border border-gray-300 rounded focus:outline-none" placeholder="Search..." onChange={(event) => setSearchName(event.target.value)}
                />
              </div>
            </button>
          </div>
        </div>


        <div className='overflow-auto max-h-[70vh] mt-7 '>
          <table className="w-full min-w-[600px] ">

            <thead>
              <tr className='text-gray-600 bg-gray-100 w-full '>
                <th className='pr-10 text-left px-6'>FULL NAME - MAIL</th>
                <th className='flex gap-2 text-left'>
                  BILLING DATE
                  <ArrowDownUp className='w-3' />
                </th>
                <th className='text-left'>PLAN</th>
                <th className='text-left'>AMOUNT</th>
                <th className='text-left'>TOTAL USERS</th>
                <th className='text-left'>DETAILS</th>
                <th className='text-left'></th>
              </tr>
            </thead>

            <tbody>
              {
                displayedCustomers.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className='md:pr-32 px-6'>{item.name} <br /><span className='text-sm text-gray-500'>{item.email}</span></td>
                    <td>{item.billingdate}</td>
                    <td className=' md:pr-14'>
                      <button className='border rounded-full border-purple-400 w-16 text-purple-400'>{item.plan}</button>
                    </td>
                    <td className=' md:pr-16'>{item.amount} <br /><span className='text-sm text-gray-500'>{item.category}</span></td>
                    <td className=' md:pr-14'>{item.totalusers}</td>
                    <td className='md:pr-10 text-blue-500 underline'><a href="">{item.details}</a></td>
                    <td>{item.icon}</td>
                  </tr>
                ))}

            </tbody>
          </table>
        </div>

        <div className='flex justify-between mr-7 px-6'>

          <div className='flex gap-3 '>
            <p className='mt-3'>Result per page:</p>
            <button className='border rounded-lg mt-3 h-8 w-14'>
              <select className='outline-none' onChange={(event) => setResultsPerPage(parseInt(event.target.value))}>
                <option>6</option>
                <option>12</option>
                <option>18</option>
              </select>
            </button>
          </div>

          <div className='flex gap-2 mt-4' >
            <button className='flex gap-2' onClick={() => setIsCurrentPage(isCurrentPage - 1)} disabled={isCurrentPage === 1}>
              <MoveLeft className='w-3' />
              Previous
            </button>
            {
              [1, 2, 3, 9].map((page) => {
                return <button key={page} onClick={() => setIsCurrentPage(page)} className={` border rounded-lg h-6 w-14  ${isCurrentPage === page ? 'bg-red-500 text-white' : null}`}>{page}</button>
              })
            }

            <button className='border rounded-lg h-6 w-14' onClick={() => setIsCurrentPage(isCurrentPage + 1)} disabled={isCurrentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CustomerList