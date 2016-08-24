import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        imageUrl: this.get('imageUrl'),
        description: this.get('description'),
        price: this.get('price'),
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    delete(item) {
      if (confirm('Are you sure you want to delete this quesiton?')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
