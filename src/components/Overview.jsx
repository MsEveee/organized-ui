
import { NotepadText, SquareChartGantt, SquareUserRound, Users, ArrowUp, Ellipsis, Download, Plus, ArrowDown } from 'lucide-react'

const Overview = () => {
    // setting a component using props for displaying one card
    const OverviewCard = ({ icon, title, result, value, last, icon2, bgColor }) => {
        const highPercentage = value >= 3.90;
        const lowPercentage = value <= 2.90;
        return (

            <div className="bg-white rounded shadow flex flex-wrap  items-center w-full  h-40 px-6 mb-5 sm:mb-0">
                <div className='flex gap-4'>
                    {/* setting bgColor prop so i can change the background color for each card */}
                    <div className={`${bgColor} border h-9 rounded-lg w-9 flex px-2 items-center bg-green-50`}>{icon}</div>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <div className='pl-12'>{icon2}</div>
                </div>

                <div className='flex gap-3'>
                    <div className='flex'>
                        <span className='text-3xl '>{result}</span>
                    </div>
                    <div className='flex gap-4 mt-3'>
                        <div>
                            <span className={`bg-green-200 flex px-1 rounded-md font-bold  text-sm ${highPercentage ? 'bg-green-200 text-green-800' : lowPercentage ? 'bg-red-200 text-red-500' : 'bg-slate-400 text-slate-400'}`}>
                                {value}%
                                {highPercentage ? <ArrowUp /> : lowPercentage ? <ArrowDown /> : null}
                            </span>
                        </div>
                        <p>{last}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='p-5 sm:p-10'>
            <div className='flex flex-wrap items-center justify-between mb-5 '>
                <h2 className='px-3 font-semibold text-3xl sm:text-3xl'>Customer</h2>
                <div className='flex gap-5 mr-9 sm:gap-5 mt-3 sm:mt-0'>
                    <button className='border rounded-lg w-9 h-9 px-2 hover:text-white hover:bg-red-500'>
                        <Download className='w-4' />
                    </button>

                    <button className='border rounded-lg h-9 outline-none  '>
                        <input type="date" name="" id="" className='outline-none' />
                    </button>

                    <button className='flex gap-2 border rounded-lg w-40 px-4 py-1 bg-red-500 text-white hover:text-red-500 hover:bg-white'>
                        Add Customer
                        <Plus className='w-4' />
                    </button>
                </div>
            </div>

            {/* implementing the card and using sm-grid-col-2 for responsiveness on smaller screen */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 '>

                <OverviewCard icon={<NotepadText className='text-green-500' />} title={"Total Customer"} icon2={<Ellipsis />} bgColor="bg-green-100" result={470} last={"from last week"} value={3.90} />

                <OverviewCard icon={<SquareChartGantt className='text-pink-600' />} bgColor="bg-pink-100" icon2={<Ellipsis />} title={"Team Plan"} result={17} last={"from last week"} value={3.90} />

                <OverviewCard icon={<SquareUserRound className='text-purple-600' />} title={"Basic Plan"} icon2={<Ellipsis />} bgColor="bg-purple-100" result={63} last={"from last week"} value={3.90} />

                <OverviewCard icon={<Users className='text-red-600' />} title={"Pelonggan berhenti"} icon2={<Ellipsis />} bgColor="bg-red-100" result={4} last={"from last week"} value={2.90} />
            </div>
        </div>
    );
};
export default Overview