import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="bg-zinc-800 p-4 shadow-lg">
      <ul className="flex flex-wrap justify-center space-x-6">
        <li>
          <NavLink to="/" className="text-white" activeClassName="text-green-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white" activeClassName="text-green-500">
            About
          </NavLink>
        </li>
        <li className="relative">
          {/* Dashboard Button */}
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className="text-white"
          >
            Dashboard ▼
          </button>

          {/* Dropdown Menu */}
          {isDashboardOpen && (
            <ul className={`absolute left-0 mt-2 w-40 bg-gray-700 text-white shadow-lg rounded-lg transition-all duration-300 transform ${isDashboardOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <li className="p-2 hover:bg-gray-600">
                <NavLink to="/dashboard/product" activeClassName="text-green-500">
                  Product
                </NavLink>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <NavLink to="/dashboard/user" activeClassName="text-green-500">
                  User
                </NavLink>
              </li>
              <li className="p-2 hover:bg-gray-600">
                <NavLink to="/dashboard/order" activeClassName="text-green-500">
                  Order
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
