// AppRoot.jsx
import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Sub components
import NewItemForm from './NewItemForm';

// Method to retrieve state from Stores
let getListState = () => {
  return {
    items: ListStore.getItems()
  };
}

class AppRoot extends React.Component {
  
  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getListState());
  }

  constructor() {
    
    super();
    
    // API data
    AppDispatcher.dispatch({
      action: 'init-app'
    });

  }

  // Add change listeners to stores
  componentDidMount() {
    ListStore.addChangeListener(this._onChange.bind(this));
  }

  // Remove change listeners from stores
  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange.bind(this));
  }

  removeItem(e){

    let _id = e.target.dataset._id;
    
    AppDispatcher.dispatch({
      action: 'remove-item',
      _id: _id
    });
  }

  render(){
      
    let _this = this;

    let items = ListStore.getItems();
    let itemHtml = items.map(( listItem ) => {
      return <li key={ listItem._id }>
        { listItem.title } <button onClick={ _this.removeItem } data-_id={ listItem._id }>×</button>
      </li>;
    });

    return (
      <div>
        <ul>
          { itemHtml }
        </ul>
        <NewItemForm />
      </div>
    );
  }
}

export default AppRoot;
