import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(this.store.findRecord('item', params.id).category);
    return Ember.RSVP.hash({
      item: this.store.findRecord('item', params.id)
    });
  }

});
