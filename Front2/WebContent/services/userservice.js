/**
 * UserService
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	console.log(user)	
	return	$http.post("http://localhost:9999/Middleware/registeruser",user)
	}
	userService.login=function(user){
		console.log('userservice-> login')
		console.log(user)
		return $http.post("http://localhost:9999/Middleware/login",user)
	}
	userService.logout=function(user){
		return $http.put("http://localhost:9999/Middleware/logout",user)
	}
	return userService;
})
