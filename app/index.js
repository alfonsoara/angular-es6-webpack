// Import angular
import 'angular';
// Icons
import 'font-awesome/css/font-awesome.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
// Animation
import angularAnimate from 'angular-animate';
// Router
import angularUIRouter from 'angular-ui-router';
// Bootstrap
import bootstrapUI from 'angular-ui-bootstrap';
// Our modules
import LayoutConfig from './config/route';
import layout from './modules/layout/layout.module';
import home from './modules/home/home.module';

// Project stylus
import './assets/styl/body.styl';
import './assets/images/logo.png';

// Create our demo module
export const demoModule = angular.module('demo', [
    angularAnimate,
    angularUIRouter,
    layout,
    home
]);

demoModule.config(LayoutConfig);
