export function ProgressBars() {
    return (
      <div className="bg-[#2c3d59] rounded-lg p-6 relative overflow-hidden">
        {/* Window Controls */}
        <div className="flex space-x-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#FF6057]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
  
        {/* Progress Bars */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
            <div className="ml-2 flex-1 h-2 bg-[#95ABCF] rounded-full"></div>
            <span className="ml-2 text-white text-xs">80%</span>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
            <div className="ml-2 w-1/3 h-2 bg-[#3DBEFF] rounded-full"></div>
            <span className="ml-2 text-white text-xs">30%</span>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
            <div className="ml-2 flex-1 h-2 bg-white rounded-full"></div>
            <span className="ml-2 text-white text-xs">100%</span>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
            <div className="ml-2 w-3/4 h-2 bg-[#65E4A3] rounded-full"></div>
            <span className="ml-2 text-white text-xs">75%</span>
          </div>
        </div>
      </div>
    )
  }
  