class HomeConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.home', {
            url: "/home",
            views: {
                'container@': {
                    templateUrl: require("./views/home.html"),
                    controller: "HomeController as home"
                }
            }
        });
        $urlRouterProvider.otherwise("/public/home");
    }
}

export default HomeConfig.initRoute;
