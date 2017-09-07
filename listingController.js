angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        $scope.listings.push({ 'code':$scope.code, 'name':$scope.name, coordinates:{'lat':$scope.lat, 'lon':$scope.lon}, 'address:':$scope.address });
        $scope.code='';
        $scope.name='';
        $scope.lat='';
        $scope.lon='';
        $scope.address='';
    };

    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
        $scope.address1 = index.address;
        $scope.lat1 = index.coordinates.latitude;
        $scope.lon1 = index.coordinates.longitude;
    };

  }
]);
