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
            
          <div className='bg-[#f4f4dc] backdrop-blur-3xl pr-2 pb-2'>
            
            {/* navbar */}
              <div className="flex justify-between space-x-10 p-6">
                {/* searchbar */}
            <div className="flex items-center gap-2 rounded-lg bg-[#f6f6d7] px-4 py-2">
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
          <div className="grid grid-cols-4 gap-4 py-4 px-6 bg-[#f4f4dc]">
            {/* New Customers Chart */}
            <div className="flex flex-col justify-between">

              <div>
                <h4 className="text-sm font-medium text-black mx-5 mb-2">New customers</h4>
                <NewCustomersChart />
              </div>

            </div>

            {/* Success Rate */}
            <div className="flex flex-col items-center justify-center">
              <ArcProgressBar progress={68} label="Successful deals" />
            </div>
          
            {/* Tasks in Progress */}
           
            <div className="flex flex-col justify-between pb-7 mx-16">
                {/* <div className="flex flex-col space-y-2"> */}
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
                <div className="flex flex-col justify-between pb-7 mx-16">
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
          {/* <div className="grid grid-cols-4 gap-6">
            {dealStages.map((stage, stageIndex) => (
              <div key={stageIndex} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stage.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{stage.count}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {stage.deals.map((deal, dealIndex) => (
                    <div
                      key={dealIndex}
                      className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${
                        deal.featured
                          ? 'border-l-green-500 bg-gray-900 text-white'
                          : 'border-l-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4
                          className={`font-semibold ${
                            deal.featured ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {deal.company}
                        </h4>
                        <button
                          className={`${
                            deal.featured ? 'text-white' : 'text-gray-400'
                          } hover:text-gray-600`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                      <p
                        className={`text-sm mb-4 ${
                          deal.featured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {deal.description}
                      </p>

                      {deal.featured && (
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{deal.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <Mail className="w-4 h-4" />
                            <span>{deal.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs">
                              A
                            </div>
                            <span className="text-gray-300">
                              {deal.contact}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar
                            className={`w-4 h-4 ${
                              deal.featured ? 'text-white' : 'text-gray-400'
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              deal.featured ? 'text-white' : 'text-gray-500'
                            }`}
                          >
                            {deal.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <MessageCircle
                              className={`w-4 h-4 ${
                                deal.featured ? 'text-white' : 'text-gray-400'
                              }`}
                            />
                            <span
                              className={`text-sm ${
                                deal.featured ? 'text-white' : 'text-gray-500'
                              }`}
                            >
                              {deal.comments}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span
                              className={`text-sm ${
                                deal.featured ? 'text-white' : 'text-gray-500'
                              }`}
                            >
                              ♡ {deal.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </main>
            
          </div>
      {/* </div> */}
    </div>
  );
}

export default App;
