import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard'
import Statsticks from '../components/Statsticks'
import Product from '../components/Product'
import Setting from '../components/Setting'
import Review from '../components/Review'
import CustomerList from '../components/CustomerList'
import Overview from '../components/Overview'




const Home = () => {
  const [useTab, setUseTab] = useState()
  const renderContent = () => {
    switch (useTab) {
      case "Dashboard":
        return <p><Dashboard /></p>;
      case "Statsticks":
        return <p><Statsticks /></p>;
      case "Product":
        return <p><Product /></p>;
      case "Customer":
        return <p><CustomerList/></p>;
      case "Review":
        return <p><Review /></p>;
      case "Setting":
        return <p><Setting /></p>;
      default:
        return null;

    }
  };
  return (

    <div className=''>

      <NavBar/>
      <div className="min-h-screen flex flex-col  left-0 right-0 md:h-auto pt-7 rounded overflow-auto ">
        <div className=" flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-20 md:mt-24 px-4">

          {["Dashboard", "Statsticks", "Product", "Customer", "Review", "Setting"].map((tab) => (
            <button key={tab} onClick={() => setUseTab(tab)} className={` ${useTab === tab ? 'border-b-2 border-red-500 font-semibold' : 'text-gray-800'
              }`}>
              {tab}
            </button>
          ))
          }

          <div className="w-full md:w-full flex justify-end mt-2 md:mt-0">
            <div>
              <button className='border rounded-full md:w-24  bg-[#EDF2FA] outline-none'>
                <select className='bg-[#EDF2FA] outline-none '>
                  <option>Ghana</option>
                  <option>England</option>
                  <option>USA</option>
                </select>
              </button>
            </div>
          </div>
        </div>

        <div>{renderContent()}</div>

        
      </div>
     

    </div>

  )
}

export default Home