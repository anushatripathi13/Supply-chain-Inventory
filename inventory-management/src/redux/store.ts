import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shipmentReducer from './shipmentSlice';
import inventoryReducer from './inventorySlice';
import supplierReducer from './supplierSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedShipmentReducer = persistReducer(persistConfig, shipmentReducer);

const store = configureStore({
  reducer: {
    shipments: persistedShipmentReducer,
    inventory: inventoryReducer,
    suppliers: supplierReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
