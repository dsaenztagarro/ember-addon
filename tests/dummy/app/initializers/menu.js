export function initialize(container, application) {
  application.inject('route', 'localMenuService', 'service:image-service.menu');
}

export default {
  name: 'menu',
  initialize: initialize
};
