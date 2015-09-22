import Ember from 'ember';

export default Ember.Controller.extend({
  cropsService: Ember.inject.service('crops'),
  photosController: Ember.inject.controller('photos'),
  photo: Ember.computed.reads('photosController.photo'),
  croptypes: Ember.computed.reads('model.croptypes'),
  actions: {
    addCrops() {
      var cropsService = this.get('cropsService');
      cropsService.addCrops();
    }
  }
});
