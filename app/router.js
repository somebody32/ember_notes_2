var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'hash'
});

Router.map(function() {
  this.resource('notes');
});

export default Router;
