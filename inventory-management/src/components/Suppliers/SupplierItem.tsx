import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSupplier, updateSupplier } from '../../redux/supplierSlice';

interface SupplierItemProps {
  supplier: {
    id: number;
    name: string;
    contactPerson: string;
    phone: string;
    email: string;
  };
}

const SupplierItem: React.FC<SupplierItemProps> = ({ supplier }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedSupplier, setUpdatedSupplier] = useState(supplier);

  const handleRemove = () => {
    dispatch(removeSupplier(supplier.id));
  };

  const handleSave = () => {
    dispatch(updateSupplier(updatedSupplier));
    setIsEditing(false);
  };

  return (
    <tr>
      <td className="py-2 px-4 border-b">
        {isEditing ? (
          <input
            type="text"
            value={updatedSupplier.name}
            onChange={(e) => setUpdatedSupplier({ ...updatedSupplier, name: e.target.value })}
            className="border rounded px-2 py-1"
          />
        ) : (
          supplier.name
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {isEditing ? (
          <input
            type="text"
            value={updatedSupplier.contactPerson}
            onChange={(e) => setUpdatedSupplier({ ...updatedSupplier, contactPerson: e.target.value })}
            className="border rounded px-2 py-1"
          />
        ) : (
          supplier.contactPerson
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {isEditing ? (
          <input
            type="text"
            value={updatedSupplier.phone}
            onChange={(e) => setUpdatedSupplier({ ...updatedSupplier, phone: e.target.value })}
            className="border rounded px-2 py-1"
          />
        ) : (
          supplier.phone
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {isEditing ? (
          <input
            type="email"
            value={updatedSupplier.email}
            onChange={(e) => setUpdatedSupplier({ ...updatedSupplier, email: e.target.value })}
            className="border rounded px-2 py-1"
          />
        ) : (
          supplier.email
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {isEditing ? (
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Edit
          </button>
        )}
        <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default SupplierItem;
