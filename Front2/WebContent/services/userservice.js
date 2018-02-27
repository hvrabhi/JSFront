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
	userService.logout=logout;
	function logout(){
		return $http.put("http://localhost:9999/Middleware/logout")
	}	
	userService.getUser=getUser;
	function getUser(){
		return $http.get("http://localhost:9999/Middleware/getuser")
	}
	userService.updateUserProfile=updateUserProfile;
	function updateUserProfile(user){
		console.log("edit->profile")
		console.log("edited")
		return $http.put("http://localhost:9999/Middleware/updateuser",user)
	}
	return userService;
})
