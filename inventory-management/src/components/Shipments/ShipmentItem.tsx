import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShipmentStatus } from '../../redux/shipmentSlice';

interface ShipmentItemProps {
  shipment: {
    id: number;
    origin: string;
    destination: string;
    status: 'In Transit' | 'Delivered' | 'Delayed';
    estimatedDelivery: string;
  };
}

const ShipmentItem: React.FC<ShipmentItemProps> = ({ shipment }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateShipmentStatus({ id: shipment.id, status: event.target.value as 'In Transit' | 'Delivered' | 'Delayed' }));
  };

  return (
    <tr>
      <td className="py-2 px-4 border-b">{shipment.origin}</td>
      <td className="py-2 px-4 border-b">{shipment.destination}</td>
      <td className="py-2 px-4 border-b">{shipment.estimatedDelivery}</td>
      <td className="py-2 px-4 border-b">
        <select 
          value={shipment.status} 
          onChange={handleStatusChange} 
          className="bg-gray-100 border border-gray-300 rounded px-4 py-2"
        >
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Delayed">Delayed</option>
        </select>
      </td>
    </tr>
  );
};

export default ShipmentItem;
