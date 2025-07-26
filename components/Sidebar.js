import React from 'react';

const Sidebar = () => {
  const navigationItems = [
    { name: 'Overview', active: false, icon: '📊' },
    { name: 'Data List', active: false, icon: '📋' },
    { name: 'Quick Commerce', active: true, icon: '🛒' },
    { name: 'Comments', active: false, icon: '💬' },
    { name: 'Settings', active: false, icon: '⚙️' }
  ];

  return (
    <div className="w-60 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 shadow-sm">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-gray-900 text-lg">Dcluttr</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-3">
        <ul className="space-y-1">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3 text-base">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
          <div className="text-sm font-medium text-gray-900 mb-1">Need help?</div>
          <div className="text-xs text-gray-600 mb-3">Check our documentation</div>
          <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
