import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      items: this.store.findAll('item')
    });
  },
  actions: {
    saveItemToFirebase(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },
    update(item, params) {
       Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           item.set(key,params[key]);
         }
       });
       item.save();
       this.transitionTo('admin');
    },
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
