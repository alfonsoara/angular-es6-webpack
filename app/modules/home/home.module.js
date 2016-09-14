import HomeConfig from './home.config';
import HomeController from './controllers/home.controller';
require('./css/home.styl');

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name
