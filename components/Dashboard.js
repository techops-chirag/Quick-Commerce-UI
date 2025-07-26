import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Data for Sales (MRP) - Left Chart
  const salesMRPData = [
    { time: '10', thisMonth: 45, lastMonth: 35 },
    { time: '11', thisMonth: 52, lastMonth: 45 },
    { time: '12', thisMonth: 48, lastMonth: 42 },
    { time: '13', thisMonth: 61, lastMonth: 55 },
    { time: '14', thisMonth: 55, lastMonth: 48 },
    { time: '15', thisMonth: 67, lastMonth: 58 },
    { time: '16', thisMonth: 72, lastMonth: 65 },
    { time: '17', thisMonth: 68, lastMonth: 61 },
    { time: '18', thisMonth: 75, lastMonth: 70 },
  ];

  // Data for Total Quantity Sold - Middle Chart
  const quantityData = [
    { time: '10', thisMonth: 38, lastMonth: 28 },
    { time: '11', thisMonth: 45, lastMonth: 38 },
    { time: '12', thisMonth: 41, lastMonth: 35 },
    { time: '13', thisMonth: 54, lastMonth: 48 },
    { time: '14', thisMonth: 48, lastMonth: 41 },
    { time: '15', thisMonth: 60, lastMonth: 51 },
    { time: '16', thisMonth: 65, lastMonth: 58 },
    { time: '17', thisMonth: 61, lastMonth: 54 },
    { time: '18', thisMonth: 68, lastMonth: 63 },
  ];

  // Data for Top Cities - Right Chart (Semicircular)
  const topCitiesData = [
    { name: 'Delhi', value: 35.2, color: '#3B82F6' },
    { name: 'Mumbai', value: 28.7, color: '#10B981' },
    { name: 'West Bengal', value: 22.3, color: '#F59E0B' },
    { name: 'Others', value: 13.8, color: '#6B7280' }
  ];

  // SKU and City data (keeping from previous implementation)
  const skuData = [
    { 
      skuName: 'Protein Bar 150g', 
      availability: '85%', 
      visibility: '95%',
      sales: '₹4,83,132.14', 
      outOfStock: '1.08%', 
      totalInventory: '9,113',
      averageRank: '3.2', 
      estTraffic: '12,363',
      estImpressions: '2,56,85'
    },
    { 
      skuName: 'Choco Bar 150g', 
      availability: '92%', 
      visibility: '88%',
      sales: '₹89,526.32', 
      outOfStock: '6.78%', 
      totalInventory: '679',
      averageRank: '7', 
      estTraffic: '3,096',
      estImpressions: '42,31'
    },
    { 
      skuName: 'Energy Drink 500ml', 
      availability: '78%', 
      visibility: '92%',
      sales: '₹77,013.72', 
      outOfStock: '3.26%', 
      totalInventory: '326',
      averageRank: '4', 
      estTraffic: '2,506',
      estImpressions: '36,27'
    }
  ];

  const cityData = [
    { 
      skuName: 'Delhi Region', 
      availability: '90%', 
      visibility: '93%',
      sales: '₹2,15,430.67', 
      outOfStock: '2.1%', 
      totalInventory: '4,567',
      averageRank: '2.8', 
      estTraffic: '8,945',
      estImpressions: '1,23,45'
    },
    { 
      skuName: 'Mumbai Region', 
      availability: '87%', 
      visibility: '89%',
      sales: '₹1,89,675.23', 
      outOfStock: '3.4%', 
      totalInventory: '3,892',
      averageRank: '3.5', 
      estTraffic: '7,234',
      estImpressions: '98,76'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-xl rounded-xl border border-gray-100 backdrop-blur-sm">
          <p className="text-sm font-medium text-gray-900 mb-2">{`${label}:00`}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center text-sm mb-1">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span style={{ color: entry.color }}>{`${entry.dataKey}: ${entry.value}%`}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="ml-60 min-h-screen bg-gray-50 p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Quick Commerce</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>Aug 01, 2024 - Aug 08, 2024</span>
              <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>Last 7 days</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors">
              <span className="mr-2">📊</span>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section - Three charts in one row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Left Chart - Sales (MRP) */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Sales(MRP)</h3>
              <p className="text-2xl font-bold text-gray-900">125.49</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-green-600 font-medium">↗ +11.9% from last month</p>
            </div>
          </div>
          
          <div className="h-40 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesMRPData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#f1f5f9" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="thisMonth" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#3B82F6', strokeWidth: 2, fill: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="lastMonth" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">This Month</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Last Month</span>
            </div>
          </div>
        </div>

        {/* Middle Chart - Total Quantity Sold */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Total Quantity Sold</h3>
              <p className="text-2xl font-bold text-gray-900">125.49</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-green-600 font-medium">↗ +11.9% from last month</p>
            </div>
          </div>
          
          <div className="h-40 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quantityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#f1f5f9" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="thisMonth" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#8B5CF6', strokeWidth: 2, fill: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="lastMonth" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  dot={{ fill: '#F59E0B', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, stroke: '#F59E0B', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">This Month</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-600">Last Month</span>
            </div>
          </div>
        </div>

        {/* Right Chart - Top Cities (Semicircular) */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-900">Top Cities</h3>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="text-lg">⋯</span>
            </button>
          </div>
          
          <div className="h-32 flex items-center justify-center mb-4">
            <ResponsiveContainer width={140} height={140}>
              <PieChart>
                <Pie
                  data={topCitiesData}
                  cx="50%"
                  cy="70%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {topCitiesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Sales']}
                  labelStyle={{ display: 'none' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {topCitiesData.map((city, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: city.color }}></div>
                  <span className="text-gray-700 font-medium">{city.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{city.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SKU Level Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
        <div className="px-5 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900">SKU level data</h2>
              <p className="text-sm text-gray-600 mt-1">Analytics for all your SKUs</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition-colors">
              Filter By
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="mr-2 rounded border-gray-300" />
                  SKU Name
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Availability</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Visibility</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Out of Stock</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Inventory</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Average Rank</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Traffic</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Impressions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {skuData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded border-gray-300" />
                      <span className="text-sm font-medium text-gray-900">{row.skuName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.availability}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.visibility}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">{row.sales}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.outOfStock}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.totalInventory}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.averageRank}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.estTraffic}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.estImpressions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* City Level Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-5 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900">City level data</h2>
              <p className="text-sm text-gray-600 mt-1">Analyze for all your Cities</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition-colors">
              Filter By  
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="mr-2 rounded border-gray-300" />
                  SKU Name
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Availability</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Visibility</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Out of Stock</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Inventory</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Average Rank</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Traffic</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Impressions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {cityData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded border-gray-300" />
                      <span className="text-sm font-medium text-gray-900">{row.skuName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.availability}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.visibility}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">{row.sales}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.outOfStock}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.totalInventory}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.averageRank}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.estTraffic}</td>
                  <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900">{row.estImpressions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
