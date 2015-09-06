// ListStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';
import Cosmic from 'cosmicjs-browser';
import config from './../config';

let ListStore = _.extend({}, EventEmitter.prototype, {

  // Initial data
  items: [],

  // Init items from Cosmic JS
  init: function(items){

    let _this = this;

    Cosmic.getObjects(config, function(err, response){

      let items = response.objects.type['list-items'];
      items = _.sortBy(items, 'created');
      _this.items = items;
      _this.emitChange();

    });
  },

  // Get all items
  getItems: function(){
    return this.items;
  },

  // Add item
  addItem: function(payload){
    
    let new_item = payload.new_item;
    let _this = this;
    let object = {
      type_slug: 'list-items',
      title: new_item.title
    };

    Cosmic.addObject(config, object, function(err, response){
      
      if(response.object){
        let new_cosmic_item = response.object;
        _this.items.push(new_cosmic_item);
        _this.emitChange();
      }

    });
  },

  // Remove item
  removeItem: function(payload){
    
    let _id = payload._id;
    let _this = this;
    let delete_object = {
      _id: _id
    };

    Cosmic.deleteObject(config, delete_object, function(err, object){
      
      let items = _this.items;
      
      _.remove(items,(item) => {
        return _id == item._id;
      });

      _this.items = items;
      _this.emitChange();

    });

  },

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

export default ListStore;
