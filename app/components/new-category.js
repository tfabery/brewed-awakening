import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params = {
        name: this.get('categoryName') ? this.get('categoryName'): ""
      };
      this.set('categoryName', "");
      this.sendAction('saveCategoryToFirebase', params);
    }
  }
});
