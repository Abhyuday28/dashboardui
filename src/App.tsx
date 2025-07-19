import { useState } from 'react';
import {
  Search,
  ListFilter ,
  SlidersHorizontal,
  User,
  Plus,
  Home,
  CheckSquare,
  Activity,
  Users,
  Settings,
  ArrowRight,
  Zap,
  TrendingUp, 
  Blend,
  Megaphone,
} from 'lucide-react';
import NewCustomersChart from './components/new-customers-chart';
import { ArcProgressBar } from './components/arc-progress-bar';
import { UserCard } from './components/user-card';
import { LoggedInUserCard } from './components/logged-in-user-card';
import ContactedCardsList from './components/contacted-cards';
import NegotiationCardsList from './components/negotiation-cards';
import OffersentCardsList from './components/offersent-cards';
import DealclosedCardsList from './components/dealclosed-cards';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const metrics = {
    newCustomers: [
      { day: 'Mon', value: 3 },
      { day: 'Tue', value: 8 },
      { day: 'Wed', value: 6 },
      { day: 'Thu', value: 4 },
      { day: 'Fri', value: 10 },
    ],
    successRate: 68,
    tasksInProgress: 53,
    prepayments: 15.890,
  };

  
  return (
    <div className=" grid grid-cols-10 gap-4 min-h-screen bg-gray-50">

  {/* Sidebar */}
          <div className='col-span-2 p-2 px-2 h-screen overflow-y-auto hide-scrollbar sticky top-0'>
            <div className="flex items-center py-6 px-4 ">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">BizLink</h1>
          </div>
          
          <div className=" col-span-1 w-auto px-6">
          <nav className="space-y-1.5 mb-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left ${
                activeTab === 'dashboard'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
              <CheckSquare className="w-4 h-4" />
              <span>Tasks</span>
              <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                2
              </span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
              <Activity className="w-4 h-4" />
              <span>Activity</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
              <Users className="w-4 h-4" />
              <span>Customers</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </nav>

          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Projects</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
                <Zap className='w-4 h-4'/>
                <span>BizConnect</span>
                <span className="ml-auto text-gray-800 text-xs bg-gray-200 
                px-2 py-1 rounded-full">
                  7
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
                <TrendingUp className='w-4 h-4'/>
                <span>Growth Hub</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
                <Blend className='w-4 h-4'/>
                <span>Conversion Path</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100">
                <Megaphone className='w-4 h-4'/>
                <span>Marketing</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-8">
      <UserCard/>
    </div>

    <div>
       <LoggedInUserCard name="Iona Rollins" avatarSrc="/placeholder.svg" />
    </div>
        </div>
          </div>


          <div className='col-span-8'>
            
          <div className='bg-[#f9f9ed] backdrop-blur-3xl pr-2 pb-2'>
            
            {/* navbar */}
              <div className="flex justify-between space-x-10 p-6">
                {/* searchbar */}
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9ed] px-4 py-2">
               <Search className="h-5 w-5 text-gray-500" />
               <input
                 type="text"
                 placeholder="Search customer..."
                 className="flex-1 bg-transparent text-gray-700 placeholder:text-gray-500          focus:outline-none focus:ring-0 border-none p-0"
                 aria-label="Search customer"
               />
            </div>
            <div className='flex gap-12'>
              <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-900">
              <ListFilter  className="w-5 h-5" />
              <span className='text-lg'>Sort by</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-900">
              <SlidersHorizontal  className="w-5 h-5" />
              <span className='text-lg'>Filters</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-900">
              <User className="w-5 h-5" />
              <span className='text-lg'>Me</span>
            </button>
            <button className="bg-gray-900 text-white px-4 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-800">
              <Plus className="w-4 h-4" />
              <span>Add customer</span>
            </button>
            </div>
          </div>
          
        {/* Metrics Section */}
          <div className="grid grid-cols-4 gap-4 py-4 px-6 bg-[#f9f9ed] pt-8">
            {/* New Customers Chart */}
            <div className="flex flex-col justify-between">

              <div>
                <h4 className="text-sm font-medium text-black mx-5 mb-2 ">New customers</h4>
                <NewCustomersChart />
              </div>

            </div>

            {/* Success Rate */}
            <div className="flex flex-col items-center justify-center pl-30">
              <ArcProgressBar progress={68} label="Successful deals" />
            </div>
          

            {/* Tasks in Progress */}
            <div className="flex flex-col justify-between pb-7 pl-30 pr-4">
          
                  <h3 className="text-4xl font-semibold text-black pt-2">
                    {metrics.tasksInProgress}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="text-base text-gray-600 leading-tight">
                      <p>Tasks</p>
                      <p>in progress</p>
                    </div>
                    <ArrowRight className="w-7 h-5 text-gray-800" />
                  </div>
                {/* </div> */}
              </div>

            {/* Prepayments */}
                <div className="flex flex-col justify-between pb-7 pr-8 pl-16">
    <h3 className="text-3xl font-medium text-black">
      ${metrics.prepayments.toLocaleString("en-US", { minimumFractionDigits: 3 })}
    </h3>
    <div className="flex items-center justify-between pt-2">
      <div className="text-base text-gray-600 leading-tight">
        <p>Prepayments</p>
        <p>from customers</p>
      </div>
      <ArrowRight className="w-7 h-5 text-gray-800" />
    </div>
  </div>
          </div>
</div>
          
        {/* Main Content */}
        <main className="mt-8 mr-10">
          {/* Deal Pipeline */}
          <div className='flex gap-4 '>
            <ContactedCardsList />
          <NegotiationCardsList />
          <OffersentCardsList />
          <DealclosedCardsList />
          </div>
        </main>
            
          </div>
      {/* </div> */}
    </div>
  );
}

export default App;
