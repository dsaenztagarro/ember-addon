import Ember from 'ember';

export default Ember.Controller.extend({
  photos: Ember.computed.reads('model.photos')
});
