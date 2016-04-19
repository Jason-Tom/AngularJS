    // var JSONObject = [{
    //     source: "zimuzu",
    //     title: "十二猴子 (12 Monkeys) S2E1",
    //     source_id: "33231",
    //     cnname: "十二猴子",
    //     enname: "12 Monkeys",
    //     season: "2",
    //     episode: "1"
    // }, {
    //     source: "zimuzu",
    //     title: "疯狂前女友 (Crazy Ex-Girlfriend) S1E18",
    //     source_id: "33806",
    //     cnname: "疯狂前女友",
    //     enname: "Crazy Ex-Girlfriend",
    //     season: "1",
    //     episode: "18"
    // }]

    var JSONObject = {
        code: "sdfs",
        shuzu:[{
            source: "zimuzu",
            title: "十二猴子 (12 Monkeys) S2E1",
            source_id: "33231",
            cnname: "十二猴子",
            enname: "12 Monkeys",
            season: "2",
            episode: "1"
        }, {
            source: "zimuzu",
            title: "疯狂前女友 (Crazy Ex-Girlfriend) S1E18",
            source_id: "33806",
            cnname: "疯狂前女友",
            enname: "Crazy Ex-Girlfriend",
            season: "1",
            episode: "18"
        }]
    }
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.data = JSONObject.shuzu;
    });
    // document.getElementById("jname").innerHTML = JSONObject.data.result[0].title
