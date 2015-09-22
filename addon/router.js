export default function(router) {
  router.route('image-service', function() {
    this.route('photos', function() {
    });
		this.route('photo', { path: '/photo/:photo_id' }, function() {
        this.route('properties');
        this.route('crops');
		});
    this.route('search');
    this.route('upload');
  });
}
