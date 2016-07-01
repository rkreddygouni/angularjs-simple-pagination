.directive('paginator', function() {
        return {
            
			scope:{
				source : '=',
				currentpage: '=',
				},
			restrict:'E',
			template: '<div class="pagination"><div class="col-sm-5"><span>Showing {{currentpage + 1}} of {{ source }}</span></div><div class="col-sm-7" style="text-align:right;"><button type="button" class="btn btn-white" ng-disabled="currentpage == 0" ng-click="currentpage=0">First</button> <button type="button" class="btn btn-white" ng-disabled="currentpage == 0" ng-click="currentpage=currentpage-1">Previous</button><button type="button" class="btn btn-white"  ng-disabled="currentpage >= source-1" ng-click="currentpage = currentpage+1">Next </button><button type="button" class="btn btn-white" ng-disabled="currentpage>= source-1" ng-click="currentpage = source-1">Last</button></div></div>'    };
 })
 
 
 
var pagination = colorAdminApp.service('pagination',['$http', function($http){
	'use strict';
	this.getPages = function(data,pageSize){
		var nofp;
		return  nofp = Math.ceil(data.length/pageSize);
	};
}]);
