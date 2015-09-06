// AppDispatcher.js
import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import ListStore from '../stores/ListStore';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action;

  switch(action) {

    case 'init-app':
      
      ListStore.init();

      break;

    // Respond to add-item action
    case 'add-item':
      
      ListStore.addItem(payload);
      
      break;
    
    // Respond to remove-item action
    case 'remove-item':
  
      ListStore.removeItem(payload);
      
      break;

    default:
      
      return true;
  
  }

  return true;

});

export default AppDispatcher;
