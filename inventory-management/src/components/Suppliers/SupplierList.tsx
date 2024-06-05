import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addSupplier } from '../../redux/supplierSlice';
import SupplierItem from './SupplierItem';

const SupplierList: React.FC = () => {
  const suppliers = useSelector((state: RootState) => state.suppliers.suppliers);
  const dispatch = useDispatch();

  const [newSupplier, setNewSupplier] = useState({
    id: Math.max(...suppliers.map(supplier => supplier.id)) + 1,
    name: '',
    contactPerson: '',
    phone: '',
    email: ''
  });

  const handleAddSupplier = () => {
    dispatch(addSupplier(newSupplier));
    setNewSupplier({
      id: newSupplier.id + 1,
      name: '',
      contactPerson: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <table className="min-w-full bg-white shadow rounded mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Contact Person</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <SupplierItem key={supplier.id} supplier={supplier} />
          ))}
        </tbody>
      </table>
      <div className="bg-white shadow rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Add New Supplier</h2>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Name"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            className="border rounded px-2 py-1 mr-2"
          />
          <input
            type="text"
            placeholder="Contact Person"
            value={newSupplier.contactPerson}
            onChange={(e) => setNewSupplier({ ...newSupplier, contactPerson: e.target.value })}
            className="border rounded px-2 py-1 mr-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newSupplier.phone}
            onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
            className="border rounded px-2 py-1 mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newSupplier.email}
            onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
            className="border rounded px-2 py-1 mr-2"
          />
        </div>
        <button onClick={handleAddSupplier} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add Supplier
        </button>
      </div>
    </div>
  );
};

export default SupplierList;
