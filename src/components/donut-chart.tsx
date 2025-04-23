export function DonutChart() {
  return (
    <div className="bg-[#2c3d59] rounded-lg p-4 relative">
      {/* Window Controls */}
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF6057]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>

      <div className="flex items-center m-4 justify-between">
        {/* Donut Chart */}
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2c3d59"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3DBEFF"
              strokeWidth="3"
              strokeDasharray="75, 100"
              strokeLinecap="round"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#65E4A3"
              strokeWidth="3"
              strokeDasharray="25, 100"
              strokeDashoffset="-75"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Lines */}
        <div className="space-y-3 mr-4 ">
          <div className="w-28 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-20 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
