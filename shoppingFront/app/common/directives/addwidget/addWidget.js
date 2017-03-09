(function() {
    angular.module("yapp").directive('addObject', [contactPartial]);

    function contactPartial() {
        var directive = {
            scope: {
                objectList: "=",
                onKeyDown:"=",
                onRemove:"="
            },
            templateUrl: "common/directives/addwidget/addWidget.html",
            controller: ["$scope", addWidgetCtrl],
            controllerAs: "addWidgetCtrl"
        };
        return directive;
    }


    function addWidgetCtrl($scope) {
        var vm = this;
        vm.scope = $scope;
       vm.objectList = vm.scope.objectList;


        vm.addNewObject = function () {
            if (true) {
                var obj =
                {
                    content: null
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
         if(angular.isDefined(item._id))
         vm.scope.onRemove(item._id);
        };

        Array.prototype.remove = function (from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };



    }

})();
