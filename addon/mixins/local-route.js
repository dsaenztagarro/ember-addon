import LocalRouteMixin from 'ember-core/mixins/local-route';

export default LocalRouteMixin.create({
  clientNamespace() {
    return 'image-service';
  }
});
