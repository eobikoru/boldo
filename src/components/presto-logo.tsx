export function PrestoLogo({ className = "" }: { className?: string }) {
    return (
      <div className={`flex items-center ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="2" fill="none" />
          <path d="M20 8V20L28 28" stroke="white" strokeWidth="2" />
        </svg>
        <span className="ml-2 text-white text-2xl font-bold">Presto</span>
      </div>
    )
  }
  