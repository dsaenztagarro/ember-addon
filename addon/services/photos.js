import Ember from 'ember';

export default Ember.Service.extend({
	fetchAll: function() {
		return [{
      id: 1,
			url: '/tmp/image1.jpg',
      caption: 'caption1',
      agency: 'agency1'
		}, {
      id: 2,
			url: '/tmp/image2.jpg',
      caption: 'caption2',
      agency: 'agency2'
		}];
	}
});
