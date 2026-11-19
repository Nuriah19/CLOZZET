

function Sales() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-base font-bold text-gray-800">Sales Performance</h3>
          <p className="text-xs text-gray-500">Overview of target vs achieved sales</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-[#45C9A1] rounded-full">
          +14% this month
        </span>
      </div>

    
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-medium mb-1 text-gray-600">
            <span>Monthly Target (KSh 500,000)</span>
            <span className="font-bold text-gray-800">KSh 340,000 (68%)</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#45C9A1] rounded-full transition-all duration-500" 
              style={{ width: '68%' }}
            ></div>
          </div>
        </div>

    
        <div className="pt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Women's Fashion</span>
              <span>KSh 180,000</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div className="h-full bg-[#45C9A1] rounded-full" style={{ width: '52%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Men's Fashion</span>
              <span>KSh 110,000</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div className="h-full bg-teal-400 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;