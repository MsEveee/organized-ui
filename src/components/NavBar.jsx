import { Bell, Circle, Search } from 'lucide-react'
import CEO from "../assets/images/CEO.png"


const NavBar = () => {

    return (
        <div>
            <div className='flex flex-col md:flex-row  h-auto bg-black w-full py-4 sm:h-24 left-0 right-0 top-0 items-center md:space-y-0 '>
                <div className='flex gap-2 px-6'>
                    <div className='rounded-full h-12 w-12 md:h-16 md:w-16  bg-red-600 flex items-center justify-center'>
                        <Circle className='text-white' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-white font-semibold text-lg'>ORGANIZED</h3>
                        <p className='text-white'>Monogallerything</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 w-full md:w-auto md:ml-8'>
                    <Search className='text-white cursor-pointer' />
                    <input type="search" placeholder='Search.....' className='h-12 outline-none w-48 sm:w-64 bg-black text-white' />
                </div>

                <div className='flex items-center gap-4 ml-auto mr-10'>
                    <Bell className='text-white' />
                    <img src={CEO} alt="image" className=' h-12 w-12 md:h-16 md:w-16' />
                </div>
            </div>
        </div>
    )
}

export default NavBar







