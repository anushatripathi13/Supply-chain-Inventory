import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/inventorySlice';

const InventoryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addItem({ id: Date.now(), name, sku, quantity, warehouse }));
    setName('');
    setSku('');
    setQuantity(0);
    setWarehouse('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Item Name" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        value={sku} 
        onChange={(e) => setSku(e.target.value)} 
        placeholder="SKU" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        placeholder="Quantity" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        value={warehouse} 
        onChange={(e) => setWarehouse(e.target.value)} 
        placeholder="Warehouse" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default InventoryForm;
