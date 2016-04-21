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
        subjects: [{
            rate: "9.0",
            cover_x: 1500,
            is_beetle_subject: false,
            title: "纸牌屋 第四季",
            url: "https://movie.douban.com/subject/26336281/",
            playable: false,
            cover: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2318329344.jpg",
            id: "26336281",
            cover_y: 2224,
            is_new: false
        }, {
            rate: "9.6",
            cover_x: 1920,
            is_beetle_subject: false,
            title: "风骚律师 第二季",
            url: "https://movie.douban.com/subject/25976733/",
            playable: false,
            cover: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2305158254.jpg",
            id: "25976733",
            cover_y: 2560,
            is_new: false
        }, {
            rate: "8.1",
            cover_x: 1382,
            is_beetle_subject: false,
            title: "阿尔法屋 第一季",
            url: "https://movie.douban.com/subject/24295478/",
            playable: false,
            cover: "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2158892909.jpg",
            id: "24295478",
            cover_y: 2048,
            is_new: false
        }]
    }
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.data = JSONObject.subjects;
    });
    // document.getElementById("jname").innerHTML = JSONObject.data.result[0].title
