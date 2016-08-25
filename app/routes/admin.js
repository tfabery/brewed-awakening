import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      items: this.store.findAll('item')
    });
  },
  actions: {
    saveItemToFirebase(params, categoryId) {
      var category = this.store.findRecord('category', categoryId).then(function(response) {
        var itemParams = {
          category: response,
          name: params.name,
          imageUrl: params.imageUrl,
          description: params.description,
          price: params.price,
        }
        var newItem = this.store.createRecord('item', itemParams);
        response.get('items').addObject(newItem);
        newItem.save().then(function() {
          return category.save();
        });
      });
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
    },
    saveCategoryToFirebase(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    }
  }
});
