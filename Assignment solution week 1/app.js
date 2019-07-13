(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController',LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

 function LunchCheckerController($scope) {
  $scope.dishes = "";
  $scope.messager = "";
  $scope.message ="";

  $scope.displayMessage = function () {
    var dish=$scope.dishes.split(",");
    $scope.messager = "";
    $scope.message ="";

    var no_of_dishes=calculateNoOfDishes(dish);
    var message="";
    if(no_of_dishes==0){
      message="Please enter data first";
      $scope.message = message;
    }
    else if (no_of_dishes<4) {
      message="Enjoy!";
      $scope.messager = message;
      //message=message.fontcolor("green");
    }
    else {
      message="Too Much!";
      $scope.messager = message;
      //message=message.fontcolor("green");
    }
  };

  function calculateNoOfDishes(dish){
    var no=0;
    for (var i=0;i<dish.length;i++){
      dish[i]=dish[i].trim();
      if (dish[i].length==0)
        no=no+0;
      else if (dish[i]===" ")
        no=no+0
      else
        no=no+1
    }
    return no;
  }
}

})();
