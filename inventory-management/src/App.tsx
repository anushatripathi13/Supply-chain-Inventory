import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import InventoryList from './components/Inventory/InventoryList';
import InventoryForm from './components/Inventory/InventoryForm';
import ShipmentList from './components/Shipments/ShipmentList';
import SupplierList from './components/Suppliers/SupplierList';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4 w-full">
        <Routes>
          <Route path="/inventory" element={
            <div className="space-y-4">
              <InventoryForm />
              <InventoryList />
            </div>
          } />
          <Route path="/shipments" element={<ShipmentList />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/" element={<Navigate to="/inventory" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
