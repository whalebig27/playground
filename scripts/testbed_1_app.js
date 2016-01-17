        // Include the dependency upon ngMaterial - important !!
        angular.module('starterApp', ['ngMaterial'])
        .controller('AppCtrl', function($scope, $mdToast, $document) {

		  // Toast - BEGIN        		
        		
		  var last = {
			  bottom: false,
			  top: true,
			  left: false,
			  right: true
			};
		  $scope.toastPosition = angular.extend({},last);
		  $scope.getToastPosition = function() {
			sanitizePosition();
			return Object.keys($scope.toastPosition)
			  .filter(function(pos) { return $scope.toastPosition[pos]; })
			  .join(' ');
		  };
		  
		  function sanitizePosition() {
			var current = $scope.toastPosition;
			if ( current.bottom && last.top ) current.top = false;
			if ( current.top && last.bottom ) current.bottom = false;
			if ( current.right && last.left ) current.left = false;
			if ( current.left && last.right ) current.right = false;
			last = angular.extend({},current);
		  };       		
        		
          $scope.showSimpleToast = function() {
          $mdToast.show(
			  $mdToast.simple()
				.textContent('Simple Toast!')
				.position($scope.getToastPosition())
				.hideDelay(3000)
			);
		  };
		  
		  
		  // Toast - END
        })