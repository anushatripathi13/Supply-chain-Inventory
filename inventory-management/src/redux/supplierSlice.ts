import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Supplier {
  id: number;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
}

interface SupplierState {
  suppliers: Supplier[];
}

const initialState: SupplierState = {
  suppliers: [
    { id: 1, name: 'Anusha', contactPerson: 'Nitesh', phone: '78834677290', email: 'anusha@gmail.com' },
    { id: 2, name: 'Anusha', contactPerson: 'Nitesh', phone: '78834677290', email: 'anusha@gmail.com' },
  ],
};

const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    removeSupplier: (state, action: PayloadAction<number>) => {
      state.suppliers = state.suppliers.filter(supplier => supplier.id !== action.payload);
    },
    updateSupplier: (state, action: PayloadAction<Supplier>) => {
      const index = state.suppliers.findIndex(supplier => supplier.id === action.payload.id);
      if (index !== -1) {
        state.suppliers[index] = action.payload;
      }
    },
    addSupplier: (state, action: PayloadAction<Supplier>) => {
      state.suppliers.push(action.payload);
    },
  },
});

export const { removeSupplier, updateSupplier, addSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
