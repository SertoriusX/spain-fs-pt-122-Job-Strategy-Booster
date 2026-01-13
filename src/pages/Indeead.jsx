import React from 'react'

export default function Indeead() {
  return (
    <>
    <h1>Indead</h1>

 <div className="max-w-md p-3 bg-white rounded-lg shadow-lg space-y-4 font-sans border border-gray-400 h-[360px]">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="bg-green-200 text-green-700 rounded-full px-3 py-1 font-semibold">Open</span>
          <span>Development</span>
        </div>
        <button className="text-gray-400 hover:text-gray-700" aria-label="More options">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="3" cy="10" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="17" cy="10" r="2" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-full">
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
              alt="ReactJS logo"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">ReactJS Developer</h2>
            <div className="flex items-center text-xs text-gray-500 gap-3 mt-0.5">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8 2 4 5.1 4 9c0 5 8 13 8 13s8-8 8-13c0-3.9-4-7-8-7z" />
                </svg>
                Surat
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 7V3m8 4V3M3 11h18M4 19h16M4 15h16" />
                </svg>
                Feb 24, 2025
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-right">
          <svg className="w-16 h-16" viewBox="0 0 36 36">
            <circle
              className="text-gray-300"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              cx="18"
              cy="18"
              r="15"
            />
            <circle
              className="text-purple-600"
              strokeWidth="3"
              strokeDasharray="90, 100"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              cx="18"
              cy="18"
              r="15"
            />
            <text
              x="18"
              y="22"
              fontSize="10"
              fill="#6b21a8"
              textAnchor="middle"
              fontWeight="bold"
            >
              90%
            </text>
          </svg>
          <span className="text-xs text-gray-600">Strong Match Candidates</span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-700 bg-gray-300 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3z" />
            </svg>
            <span>Salary</span>
          </div>
          <span className="font-semibold">$25K–30K annually</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>Candidates Applied</span>
          </div>
          <span>15</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 20v-8" />
            </svg>
            <span>Completed Interview</span>
          </div>
          <span>08</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-3">
        <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full px-3 py-1">
          On Site
        </span>
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold rounded-full px-3 py-1">
          Full Time
        </span>
        <span className="bg-green-200 text-green-700 text-xs font-semibold rounded-full px-3 py-1">
          3 Years exp.
        </span>
        <span className="bg-purple-300 text-purple-800 text-xs font-semibold rounded-full px-3 py-1">
          2 Positions
        </span>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
        <span>
          Created by <strong>Brooklyn</strong>
        </span>
        <a href="#" className="text-purple-600 hover:underline flex items-center gap-1">
          View details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
