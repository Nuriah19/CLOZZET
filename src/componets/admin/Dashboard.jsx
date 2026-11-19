import Sidebar from "./Sidebar";
import Nav from "../Nav";
import Footer from "../Footer";
import Analytics from "./Analyticss";
import Sales from "./Sales";
import Week from "./Week";
function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F1F1F0]">
      <Nav />

      {/* Main Layout Container */}
      <div className="flex">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 sm:p-8">
          {/* Header Row: Title on Left, Admin Profile on Right */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                CLOZZET / ADMIN
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">
                Welcome to Clozzet 👋!
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Here's what's happening with your store today.
              </p>
            </div>

            {/* Admin Profile Widget */}
            <div className="flex items-center gap-3 bg-[#F1f1f0] px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-9 h-9 rounded-full bg-[#45C9A1] flex items-center justify-center font-bold text-white">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-tight">
                  Admin
                </p>
                <p className="text-xs text-gray-500 leading-tight">
                  Administrator
                </p>
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <Analytics />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <Sales />
            </div>
            <div className="lg:col-span-1">
              <Week />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
