var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
  $scope.salesdata="";
  $scope.totalwin="";
  $scope.negotiation="";
  $scope.needs="";
  $scope.contact="";
  $http.get("https://0oqqwguet1.execute-api.us-east-1.amazonaws.com/test")
  .then(function(response) {
    $scope.salesdata=response.data.Items;
    var c=0,a=0,n=0,b=0;

    //// count the total win /////////

    for(var i=0;i<($scope.salesdata).length;i++){
        if(($scope.salesdata)[i].status_code==="4"){
            c++;
        }

        /// count negotiation /////
        if(($scope.salesdata)[i].status_code==="3"){
            a++;
        }

        ///count needs defined /
        if(($scope.salesdata)[i].status_code==="1"){
            n++;
        }
        //////count contact made /////////
        if(($scope.salesdata)[i].status_code==="2"){
            b++;
        }
    }
    console.log(c);
    $scope.totalwin=c;
    $scope.negotiation=a;
    $scope.needs=n;
    $scope.contact=b;
    console.log($scope.salesdata);

  });
});