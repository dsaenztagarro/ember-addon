import Ember from 'ember';

export default Ember.Service.extend({
  addCrops() {
    console.log('TODO: POST http://imageservice.local/image');
  },
  getCroptypes() {
    console.log('TODO: GET http://imageservice.local/croptypes');
    return [{
      idcroptype: 1,
      name: 'gallery:5x3',
      width: 5,
      height: 3,
      idpublication: 1,
      idselectionunit: 1,
      numorder: 1
    } , {
      idcroptype: 2,
      name: 'gallery:3x5',
      width: 3,
      height: 5,
      idpublication: 1,
      idselectionunit: 1,
      numorder: 1
    }];
  },
  getPhotoCrops() {
    console.log('TODO: GET http://publicationservice.local/photo/XXX/crops');
  },
  /*,
  getPhotosSelected() {
		return [{
      id: 1,
			name: 'gallery:5x3',
			width: 5,
			height: 3
		}, {
      id: 2,
			name: 'gallery:3x5',
			width: 3,
			height: 5
		}];
  }
  */
});
