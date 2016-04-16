    var app = angular.module("myApp", []);
    // 声明模块
    app.directive("runoobDirective", function() {
        // 写模块方法
        return {
            template: "我在指令构造器中创建!"
        };
    });
    app.directive("runoobDirective1", function() {
        // 写模块方法
        return {
            template: "我在指令构造器中创建1!"
        };
    });
