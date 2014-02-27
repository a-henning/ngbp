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
        $scope.tasks = response.items;
    });
}]);

/**
 * Google search REST resrvice.
 */
angular.module('ngBoilerplate.services', ['ngResource'])
.factory('GoogleSearch', function($resource){
    return $resource("https://www.googleapis.com/customsearch/v1",
        {"key": "AIzaSyDZfXhsVOvKoLL3MzZuEi1jKCyrMM5GTjY", "cx" : "016018725942321900689:lnwj9euvx40", "q": "dog"},
        {'query':  {method:'GET', isArray:false}}
    );
});
