export function BarChart() {
    return (
      <div className="bg-[#2c3d59] rounded-lg p-4 relative">
        {/* Window Controls */}
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#FF6057]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
  
        {/* Bar Chart */}
        <div className="flex items-end justify-between h-32 px-2">
          <div className="w-2 h-10 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-16 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-6 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-24 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-28 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-12 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-20 bg-[#3DBEFF] rounded-full"></div>
          <div className="w-2 h-8 bg-[#3DBEFF] rounded-full"></div>
        </div>
      </div>
    )
  }
  