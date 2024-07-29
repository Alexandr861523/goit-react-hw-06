import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'; 
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";



const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};



const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


const persistor = persistStore(store);

export { store, persistor };