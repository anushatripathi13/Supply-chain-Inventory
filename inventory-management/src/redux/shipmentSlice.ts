import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Shipment {
  id: number;
  origin: string;
  destination: string;
  status: 'In Transit' | 'Delivered' | 'Delayed';
  estimatedDelivery: string;
}

interface ShipmentState {
  shipments: Shipment[];
}

const initialState: ShipmentState = {
  shipments: [
    { id: 1, origin: 'Madhapur', destination: 'Hitech City', status: 'In Transit', estimatedDelivery: '2024-05-25' },
    { id: 2, origin: 'Hitech City', destination: 'Madhapur', status: 'In Transit', estimatedDelivery: '2024-05-20' },
  ],
};

const shipmentSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    updateShipmentStatus: (state, action: PayloadAction<{ id: number; status: 'In Transit' | 'Delivered' | 'Delayed' }>) => {
      const shipment = state.shipments.find(s => s.id === action.payload.id);
      if (shipment) {
        shipment.status = action.payload.status;
      }
    },
  },
});

export const { updateShipmentStatus } = shipmentSlice.actions;
export default shipmentSlice.reducer;
