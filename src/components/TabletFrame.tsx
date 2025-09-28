import React from 'react';

interface TabletFrameProps {
  children: React.ReactNode;
}

const TabletFrame: React.FC<TabletFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto bg-gradient-to-br from-gray-900 to-black rounded-lg p-2 shadow-2xl shadow-purple-500/20" style={{ width: 'min(922px, 100vw)', height: '100vh' }}>
      <div className="bg-gray-50 rounded-lg h-full flex flex-col relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm font-medium border-b border-purple-500/20 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center space-x-3">
            <span className="text-purple-300 font-semibold">9:41</span>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-gray-300">📶</span>
              <span className="text-xs text-gray-400">Grameenphone</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-400">📶</span>
            <span className="text-green-400 text-xs">🔋 87%</span>
            <span className="text-xs text-gray-400">📍</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TabletFrame;