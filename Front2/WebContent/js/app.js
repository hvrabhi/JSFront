/**
 * Angular Js module
 */
var app=angular.module('app',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/logout',{
		templateUrl:'index.html',
		controller:'UserController'
	})
})