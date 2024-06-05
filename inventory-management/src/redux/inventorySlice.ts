import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  warehouse: string;
}

interface InventoryState {
  items: InventoryItem[];
}

const initialState: InventoryState = {
  items: [
    { id: 1, name: 'Item 1', sku: 'SKU001', quantity: 100, warehouse: 'Warehouse A' },
    { id: 2, name: 'Item 2', sku: 'SKU002', quantity: 200, warehouse: 'Warehouse B' }
  ],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<InventoryItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, removeItem } = inventorySlice.actions;
export default inventorySlice.reducer;
