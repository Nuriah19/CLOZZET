function Week() {
  const weeklyData = [
    { day: "Mon", orders: 12, height: "40%" },
    { day: "Tue", orders: 19, height: "65%" },
    { day: "Wed", orders: 15, height: "50%" },
    { day: "Thu", orders: 28, height: "90%" },
    { day: "Fri", orders: 22, height: "75%" },
    { day: "Sat", orders: 30, height: "100%" },
    { day: "Sun", orders: 18, height: "60%" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-[40] w-[30]">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-base font-bold text-gray-800">Weekly Orders</h3>
            <p className="text-xs text-gray-500">Orders placed this week</p>
          </div>
          <p className="text-lg font-bold text-gray-900">144</p>
        </div>
      </div>

    
      <div className="flex items-end justify-between gap-2 h-40 pt-4">
        {weeklyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 flex-1 h-full justify-end"
          >
            <div
              className="w-full bg-[#45C9A1] opacity-80 hover:opacity-100 rounded-t-md transition-all cursor-pointer group relative"
              style={{ height: item.height }}
            >
      
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.orders} orders
              </span>
            </div>
            <span className="text-[11px] font-medium text-gray-500">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Week;
