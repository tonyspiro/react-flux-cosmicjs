// NewItemForm.jsx
import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewItemForm extends React.Component {

  createItem(e){
    
    // so we don't reload the page
    e.preventDefault();
    
    // this gets the value from the input
    let item_title = React.findDOMNode(this.refs.item_title).value.trim();

    if(!item_title) return false;
    
    // this removes the value from the input
    React.findDOMNode(this.refs.item_title).value = '';
    
    // This is where the magic happens, 
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        title: item_title
      }
    });

  }

  render(){

    return <form onSubmit={ this.createItem.bind(this) }>
        <input type="text" ref="item_title"/>
        <button>Add new item</button>
      </form>
  }
}

export default NewItemForm;
