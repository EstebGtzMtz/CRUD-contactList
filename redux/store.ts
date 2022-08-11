import { configureStore } from '@reduxjs/toolkit';
import { service } from '../services/ContactsServices';
import reducers from './reducers';

// export const generateStore = () => {
  export const store = configureStore({
    reducer:reducers,
    middleware:getDefaultMiddleware => 
      getDefaultMiddleware({
        thunk: {
          extraArgument: service
        }
      })
  })
  // getAllContacts()(store.dispatch, store.getState)
  // return store;
// }
