import Ember from 'ember';

export default Ember.Component.extend({
  categoryId: null,
  actions: {
    selectCategory(category) {
      this.set('categoryId', category);
    },
    saveItem() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        imageUrl: this.get('imageUrl') ? this.get('imageUrl'): "",
        description: this.get('description') ? this.get('description'): "",
        price: this.get('price') ? this.get('price'): "",
      };
      var categoryId = this.get('categoryId');
      this.set('name', "");
      this.set('imageUrl', "");
      this.set('description', "");
      this.set('price', "");
      this.sendAction('saveItemToFirebase', params, categoryId);
    }
  }
});
