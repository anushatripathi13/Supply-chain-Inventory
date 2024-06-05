import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ShipmentItem from './ShipmentItem';

const ShipmentList: React.FC = () => {
  const shipments = useSelector((state: RootState) => state.shipments.shipments);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shipments</h1>
      <ul className="space-y-2">
        {shipments.map(shipment => (
          <ShipmentItem key={shipment.id} shipment={shipment} />
        ))}
      </ul>
    </div>
  );
};

export default ShipmentList;
