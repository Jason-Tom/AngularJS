var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('TextController', function($scope) {
    $scope.someText = '测试显示内容';
});

//路由
function emailRouteConfig($routeProvider) {
    $routeProvider.
    when('/', {
        controller: ListController,
        templateUrl: 'list.html'
    }).
    when('/view/:id', { //在id前面加一个冒号，从而制订了一个参数化URL
        controller: DetailController,
        templateUrl: 'detail.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}

myApp.config(emailRouteConfig); //配置我们的路由

messages = [{
    id: 0,
    sender: "123456@qq.com",
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

function ListController($scope) {
    $scope.messages = messages;
}

function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}
