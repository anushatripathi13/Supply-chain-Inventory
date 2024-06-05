import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSupplier } from '../../redux/supplierSlice';

const SupplierForm: React.FC = () => {
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addSupplier({ id: Date.now(), name, contactPerson, phone, email }));
    setName('');
    setContactPerson('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Supplier Name" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        value={contactPerson} 
        onChange={(e) => setContactPerson(e.target.value)} 
        placeholder="Contact Person" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Phone" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Supplier
      </button>
    </form>
  );
};

export default SupplierForm;
