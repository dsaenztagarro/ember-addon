import Ember from 'ember';

var PhotoTabMixin = Ember.Mixin({
  photosController: Ember.inject.controller('image-service.photos'),
  photo: Ember.computed.reads('photoController.photo'),
  croptypes: Ember.computed.reads('photoController.croptypes'),
});

export default Ember.ObjectController.extend(PhotoTabMixin, {
  cropsService: Ember.inject.service('image-service.crops'),
  actions: {
    addCrops() {
      var cropsService = this.get('cropsService');
      cropsService.addCrops();
    }
  }
});
