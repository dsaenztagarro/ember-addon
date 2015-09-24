export function initialize(container, application) {
  application.inject('route', 'cacheService', 'service:cache');
  application.inject('controller', 'cacheService', 'service:cache');
}

export default {
  name: 'cache',
  initialize: initialize
};
