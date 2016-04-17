var myApp = angular.module('myApp', ['ngRoute']);
// 声明模块
myApp.controller('TextController', function($scope) {
    // 定义控制器，要写明控制域，最好不要使用全局变量
    $scope.someText = '测试显示内容';
});

myApp.config(function($routeProvider) {
    // 配置路由，要放置$routeProvider来调用配置方法
    $routeProvider.
    when('/aa', {
        controller: 'ListController',
        // 控制器名要和视图对应上才能调用
        templateUrl: 'list.html'
        // 模板不用写完整，包含<html>
    })
    .when('/bb',{
        controller:'test',
        templateUrl:'mytest.html'
    })
    .
    otherwise({
        redirectTo: '/'
    });
});

myApp.controller('ListController', function($scope) {
    $scope.messages = messages;
});



messages = [{
    // javascript里面的全局变量定义方法
    id: 0,
    sender: "wwewww",
    subject: "你好，这是一封邮件",
    date: "2015年4月13日",
    recipients: ['wifei@163.com'],
    message: "你好，我是xxx，这是发送给您的邮件。"
}, {
    id: 1,
    sender: "123456@qq.com",
    subject: "你好，这是一封邮件",
    date: "2015年4月13日",
    recipients: ['wifei@163.com'],
    message: "你好，我是xxx，这是发送给您的邮件。"
}, {
    id: 2,
    sender: "123456@qq.com",
    subject: "你好，这是一封邮件",
    date: "2015年4月13日",
    recipients: ['wifei@163.com'],
    message: "你好，我是xxx，这是发送给您的邮件。"
}];
