export function BoldoLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
    return (
      <div className={`flex items-center ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8H20C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32H8V8Z" fill="#65E4A3" />
        </svg>
        <span className={`ml-2 text-2xl font-bold ${dark ? "text-[#0A1930]" : "text-white"}`}>Boldo</span>
      </div>
    )
  }
  