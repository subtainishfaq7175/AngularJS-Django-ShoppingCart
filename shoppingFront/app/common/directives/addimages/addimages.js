(function() {
    angular.module("yapp").directive('addImages', [contactPartial]);

    function contactPartial() {
        var directive = {
            scope: {
                objectList: "=",
              mainUploadOptionsScreen: "="

            },
            templateUrl: "common/directives/addimages/addimages.html",
            controller: ["$scope", addImagesCtrl],
            controllerAs: "addImagesCtrl"
        };
        return directive;
    }



    function addImagesCtrl($scope) {
      var vm = this;
        vm.scope = $scope;
        vm.objectList = vm.scope.objectList;


        vm.addNewObject = function () {
            if (true) {
                var obj =
                {
                    title:null,
                    images:[]
                };
                vm.objectList.push(obj);

            }
        };
        vm.addObject = function () {
        vm.addNewObject();

        };
        vm.deleteObject = function (item,index) {
         if(vm.objectList.length>0) {
             vm.scope.objectList.remove(index);

         }
        
        };
        Array.prototype.remove = function (from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };



    }

})();
