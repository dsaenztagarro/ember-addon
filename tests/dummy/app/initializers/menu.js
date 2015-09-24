export function initialize(container, application) {
  application.inject('route', 'menuService', 'service:image-service.menu');
}

export default {
  name: 'menu',
  initialize: initialize
};
