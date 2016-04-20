var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope, $http) {
    	// $scope.names = 'xxxx';3
        $http.get("http://tv.kenefe.com/api/v2/series/today")
        // .then(function(res){
        // 	// 读取json数据，通过方法get，放到结果集，在通过结果集读取，数据写好接口
        // 	console.info(res);
        // 	var result = res.data;
        // 	if(result.code == 200)
        // 		alert(result.data.title);
        // 	else alert(result.message);
        // })
        
        .success(function(res){
        	$scope.names = res.code;
            alert(names);
        });
        
    });