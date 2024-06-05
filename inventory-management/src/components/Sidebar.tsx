import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 text-2xl font-bold"></div>
      <nav className="mt-4">
        <NavLink 
          to="/inventory" 
          className={({ isActive }) => 
            `block px-4 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          Inventory
        </NavLink>
        <NavLink 
          to="/shipments" 
          className={({ isActive }) => 
            `block px-4 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          Shipments
        </NavLink>
        <NavLink 
          to="/suppliers" 
          className={({ isActive }) => 
            `block px-4 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          Suppliers
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
