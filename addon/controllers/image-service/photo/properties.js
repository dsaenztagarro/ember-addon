import Ember from 'ember';
import BaseController from './controllers/base';

export default BaseController.extend({
  photoController: Ember.inject.controller('photo'),
  photo: Ember.computed.reads('photoController.photo'),
});
