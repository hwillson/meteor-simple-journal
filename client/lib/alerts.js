Meteor.startup(function () {
  sAlert.config({
    effect: 'jelly',
    position: 'top-right',
    timeout: 3000,
    html: false,
    onRouteClose: true,
    stack: true,
    offset: 0
  });
});
