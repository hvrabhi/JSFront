app.controller('UserController',function($rootScope,$scope,$location,UserService,$cookieStore){
	
	//console.log("controller")
	$scope.register=function()
	{	
		console.log("registration")
		UserService.registerUser($scope.user).then(function(response){
			alert("Thank-You,Registered successfully")
			$location.path("/home")			
		},function(response){
			$scope.error=response.data
		})
	}
	$scope.login=function()
	{
		console.log("login")
		UserService.login($scope.user).then(function(response){
			alert("successfully logged in!")
			console.log("success")
			$rootScope.loggedInuser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path("/home")	
		},function(response){
			console.log("error")
			$location.path("/login")	
		})
	}
	if($rootScope.loggedInuser!=undefined){
		UserService.getUser().then(function(response){
			$scope.user=response.data
		},
		function(response){
			if(response.status==401)
				$location.path("/login")
		})
	}
	
	$scope.updateUserProfile=function(user){
		UserService.updateUserProfile(user).then(function(response){
			alert("updated user profile successfully......!")
			console.log("hello")
			$rootScope.loggedInuser=response.data
			console.log("how are you")
			$cookieStore.put('currentuser',response.data)
			$location.path("/home")	
		},function(response){
			if(response.status==401)
				$location.path("/login")
			else
				$scope.error=response.data
		})
	}
})