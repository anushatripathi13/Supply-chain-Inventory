import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/inventorySlice';

interface InventoryItemProps {
  item: {
    id: number;
    name: string;
    sku: string;
    quantity: number;
    warehouse: string;
  };
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <tr>
      <td className="py-2 px-4 border-b">{item.name}</td>
      <td className="py-2 px-4 border-b">{item.sku}</td>
      <td className="py-2 px-4 border-b">{item.quantity}</td>
      <td className="py-2 px-4 border-b">{item.warehouse}</td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default InventoryItem;
