export default function CenteredPngIcon() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex items-center justify-center">
        <div className="relative drop-shadow-xl">
          {/* PNG File Icon */}
          <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl relative overflow-hidden">
            {/* Folded corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-300 to-gray-400 rounded-bl-3xl"></div>
            
            {/* Image preview area */}
            <div className="absolute top-12 left-8 right-8 h-40 bg-gradient-to-b from-blue-300 to-blue-700 rounded-2xl overflow-hidden shadow-inner">
              {/* Ocean scene with more realistic coloring */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-400 to-blue-800"></div>
              
              {/* Waves and foam */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-white opacity-40 rounded-full transform scale-x-125"></div>
              <div className="absolute bottom-2 left-0 right-0 h-6 bg-white opacity-30 rounded-full transform scale-x-110"></div>
              
              {/* Rocky formations */}
              <div className="absolute bottom-4 left-6 w-4 h-4 bg-gray-700 rounded-full"></div>
              <div className="absolute bottom-2 right-8 w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="absolute bottom-5 right-16 w-5 h-5 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-6 left-16 w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
            
            {/* Magnifying glass with more realistic styling */}
            <div className="absolute top-36 right-10 w-20 h-16">
              {/* Glass lens */}
              <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full border-3 border-gray-800 shadow-lg relative">
                <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full opacity-80"></div>
              </div>
              {/* Handle */}
              <div className="absolute bottom-0 right-1 w-4 h-8 bg-gray-800 rounded-full transform rotate-45 shadow-md"></div>
            </div>
            
            {/* PNG Text */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <span className="text-7xl font-bold text-gray-600 tracking-wider">PNG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}