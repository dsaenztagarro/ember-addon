export function initialize(container, application) {
  application.inject('route', 'localCacheService', 'service:cache');
  application.inject('controller', 'localCacheService', 'service:cache');
}

export default {
  name: 'cache',
  initialize: initialize
};
