/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
	console.log(job)	
	return	$http.post("http://localhost:9999/middle/addjob",job)
	}
	return jobService;
})
