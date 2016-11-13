class LayoutConfig {

  static routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('public', {
      url: "/public",
      abstract: true,
      views: {
        'header': {
          templateUrl: require("../modules/layout/views/header.html")
        },
        'footer': {
          templateUrl: require("../modules/layout/views/footer.html")
        },
        'contenedor': {
          templateUrl: require("../modules/layout/views/container.html")
        }
      }
    });
    //$urlRouterProvider.otherwise("/public/home");
  }
}

export default LayoutConfig.routeConfig;
