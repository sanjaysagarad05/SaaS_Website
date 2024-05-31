import React from 'react';
import Card from './Card';

const Dashboard = () => {
  const integrationAnalyticImage = "https://framerusercontent.com/images/X9sfUQgd9LFj1y450O2lzNBlK0.png";

  return (
    <div className="py-10 bg-gray-900 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Seamless integration for enhanced efficiency</h1>
        <p className="text-lg mt-4">Seamlessly integrate different components and systems to improve efficiency, streamline processes, and maximize productivity.</p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold">Learn More</button>
      </div>

      <div className="container mx-auto px-4 md:px-0 md:max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Projects Stats">
            <p className="text-sm text-gray-400 mb-4">Updated 37 minutes ago</p>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Nexus Industries</span>
                <span>$32,400</span>
                <span className="text-green-400">99.9%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Aurora Innovations</span>
                <span>$256,910</span>
                <span className="text-yellow-400">72.7%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Innovio Labs</span>
                <span>$8,220</span>
                <span className="text-green-400">99.9%</span>
              </li>
              <li className="flex justify-between">
                <span>Infinity Systems</span>
                <span>$74,000</span>
                <span className="text-blue-400">215%</span>
              </li>
            </ul>
          </Card>

          <Card title="Integration Analytic" image={integrationAnalyticImage}>
            <div className="mb-4">
              <span className="text-lg font-semibold">99.2%</span>
              <p className="text-sm text-gray-400">Data-driven insights for optimized system integration</p>
            </div>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Twitter</span>
                <span className="text-green-400">99.9%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Instagram</span>
                <span className="text-green-400">90.0%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Amazon</span>
                <span className="text-green-400">94.2%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Soundcloud</span>
                <span className="text-yellow-400">89.2%</span>
              </li>
              <li className="flex justify-between">
                <span>WhatsApp</span>
                <span className="text-green-400">99.2%</span>
              </li>
            </ul>
          </Card>

          <Card title="Performance Analytic">
            <div className="mb-4">
              <span className="text-sm text-gray-400">Daily</span>
              <div className="mt-2 bg-gray-700 h-24"></div> {/* Placeholder for performance chart */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
