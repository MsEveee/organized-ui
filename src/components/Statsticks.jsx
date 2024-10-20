import React from 'react'

const Statsticks = () => {
  return (
    <div>Statsticks</div>
  )
}

export default Statsticks




































// import { ArrowDownUp, Filter, MoveLeft, Search, X } from 'lucide-react'
// import customer from '../Array/customer'
// import Overview from './Overview'
// import { useState } from 'react'

// const CustomerList = () => {
//   // Creating pagination using buttons and then setting state to store and track the current page
//   const [isCurrentPage, setIsCurrentPage] = useState(1) // Start from page 1
//   const itemsPerPage = 3
//   const totalPages = Math.ceil(customer.length / itemsPerPage) // Calculate total number of pages
//   const startIndex = (isCurrentPage - 1) * itemsPerPage
//   const isCurrentCustomers = customer.slice(startIndex, startIndex + itemsPerPage) // Slice the data

//   return (
//     <div>
//       <Overview />

//       <div className='flex justify-between '>
//         <div className='font-semibold text-2xl'>
//           <h2>Customer List</h2>
//         </div>

//         <div className='flex gap-4 '>
//           <button className='flex border rounded-lg h-7 px-2 w-28 gap-3 hover:text-white hover:bg-red-500'>
//             All time
//             <X className='w-4' />
//           </button>

//           <button className='flex border rounded-lg h-7 px-2 w-36 gap-3 hover:text-white hover:bg-red-500'>
//             Team plan
//             <X className='w-4' />
//           </button>

//           <button className='flex border rounded-lg h-7 px-2 w-28 gap-3 hover:text-white hover:bg-red-500'>
//             Active
//             <X className='w-4' />
//           </button>

//           <button className='flex border rounded-lg h-7 py-1 px-2 w-36 gap-3 hover:text-white hover:bg-red-500'>
//             <Filter className='w-4' />
//             More filters
//           </button>

//           <button className="relative flex items-center">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 " />
//               <input
//                 type="search" className="pl-10 pr-4 py-1 w-full border border-gray-300 rounded focus:outline-none" placeholder="Search..." />
//             </div>
//           </button>
//         </div>
//       </div>

//       <div className='overflow-auto max-h-[70vh] mt-7'>
//         <table className="w-full ">
//           <thead>
//             <tr className='text-gray-600 bg-gray-100 w-full '>
//               <th className='pr-10'>FULL NAME - MAIL</th>
//               <th className='flex gap-2'>
//                 BILLING DATE
//                 <ArrowDownUp className='w-3' />
//               </th>
//               <th>PLAN</th>
//               <th>AMOUNT</th>
//               <th>TOTAL USERS</th>
//               <th>DETAILS</th>
//               <th></th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//               isCurrentCustomers.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className='pl-32'>{item.name} <br /><span>{item.email}</span></td>
//                   <td>{item.billingdate}</td>
//                   <td className='pl-14'>
//                     <button className='border rounded-full border-purple-400 w-16 text-purple-400'>{item.plan}</button>
//                   </td>
//                   <td className='pl-16'>{item.amount} <br /><span>{item.category}</span></td>
//                   <td className='pl-14'>{item.totalusers}</td>
//                   <td className='pl-10 text-blue-500 underline'><a href="">{item.details}</a></td>
//                   <td>{item.icon}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>

//       <div className='flex justify-between'>
//         <div className='flex gap-3 '>
//           <p className='mt-3'>Result per page:</p>

//           <button className='border rounded-lg mt-3 h-8 w-14'>
//             <select className='outline-none'>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//               <option>6</option>
//               <option>7</option>
//               <option>8</option>
//               <option>9</option>
//               <option>10</option>
//             </select>
//           </button>
//         </div>

//         <div className='flex gap-2 mt-4'>
//           <button className='flex gap-2' onClick={() => setIsCurrentPage(isCurrentPage - 1)} disabled={isCurrentPage === 1}>
//             <MoveLeft className='w-3' />
//             Previous
//           </button>
//           {
//             Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setIsCurrentPage(page)}
//                 className={`border rounded-lg h-6 w-14 ${isCurrentPage === page ? 'bg-red-500 text-white' : ''}`}
//               >
//                 {page}
//               </button>
//             ))
//           }
//           <button className='border rounded-lg h-6 w-14' onClick={() => setIsCurrentPage(isCurrentPage + 1)} disabled={isCurrentPage === totalPages}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CustomerList;