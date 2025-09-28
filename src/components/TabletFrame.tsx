import React from 'react';

interface TabletFrameProps {
  children: React.ReactNode;
}

const TabletFrame: React.FC<TabletFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto bg-gradient-to-br from-gray-900 to-black rounded-lg p-2 shadow-2xl shadow-purple-500/20" style={{ width: 'min(922px, 100vw)', height: 'min(1024px, 100vh)' }}>
      <div className="bg-gray-50 rounded-lg h-full overflow-hidden relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm font-medium border-b border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <span className="text-purple-300">9:41</span>
            <span className="text-xs text-gray-400">📶 LTE</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">🔋 87%</span>
            <span className="text-yellow-400">📶</span>
          </div>
        </div>
        {/* Content */}
        <div className="h-full pb-11">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TabletFrame;