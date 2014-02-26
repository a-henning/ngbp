/**
 * Created by ahenning on 2/26/14.
 */
angular.module( 'ngBoilerplate.task', [
    'ui.state'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'task', {
        url: '/task',
        views: {
            "main": {
                controller: 'TaskCtrl',
                templateUrl: 'task/task.tpl.html'
            }
        },
        data:{ pageTitle: 'Task for today' }
    });
})

/**
 * Tasks controller.
 */
.controller( 'TaskCtrl', ['$scope', 'GoogleSearch', function ($scope, GoogleSearch) {
    // tasks array to be printed in view
    $scope.tasks = [
        "First task",
        "Second task",
        "Third task",
        "Fourth task",
        "Fifth task"
    ];

    GoogleSearch.query(function(response) {
        console.log(response);
        $scope.tasks = response.responseData.results;
    });
}]);

/**
 * Google search REST resrvice.
 */
angular.module('ngBoilerplate.services', ['ngResource'])
.factory('GoogleSearch', function($resource){
    return $resource("http://ajax.googleapis.com/ajax/services/search/web",
        {"v": "1.0", "q": "dog"},
        {'query':  {method:'GET', isArray:false}}
    );
});
