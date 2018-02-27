var app=angular.module('myapp',['ngRoute','ngCookies'])
app.config(function($routeProvider)
{
	$routeProvider
	.when('/Register', {
        templateUrl : 'views/registration.html',
        controller  : 'UserController'
    })
    .when('/Login', {
    	templateUrl : 'views/login.html',
        controller  : 'UserController'
    })
    .when('/EditUserProfile', {
    	templateUrl : 'views/edituserprofile.html',
        controller  : 'UserController'
    })
    .when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
    .otherwise({
    	templateUrl : 'views/home.html'
    })
})
app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInuser==undefined)
		$rootScope.loggedInuser=$cookieStore.get('currentuser')
		
		$rootScope.logout=function(){
		  UserService.logout().then(function(response){
			  delete $rootScope.loggedInuser;
			  $cookieStore.remove('currentuser')
			  $rootScope.message="successfully loggedout!....."
				  $location.path('/login');
		  },function(response){
			  $rootScope.error=response.data
			  if(response.status==401)
				  $location.path('/login')
		  })
	}
})