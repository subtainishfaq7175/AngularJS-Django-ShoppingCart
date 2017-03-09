(function() {
    angular.module("yapp").directive('addEpisode', [contactPartial]);

    function contactPartial() {
        var directive = {
            scope: {
                objectList: "="
                /*onKeyDown:"=",
                onRemove:"="*/
            },
            templateUrl: "common/directives/addepisode/addepisode.html",
            controller: ["$scope","SeatEatsConstants", addEpisodeCtrl],
            controllerAs: "addEpisodeCtrl"
        };
        return directive;
    }


    function addEpisodeCtrl($scope,SeatEatsConstants) {
        var vm = this;
        vm.scope = $scope;
      vm.scope.selectOptionsLanguage = {
        filter: "contains",
        placeholder: "Select Language...",
        dataTextField: "content",
        dataValueField: "content",
        valuePrimitive: true,
        autoBind: false,
        animation: {
          close: {
            effects: "zoom:out",
            duration: 500
          }
        },
        dataSource: {
          type: "json",
          serverFiltering: true,
          transport: {
            read: {
              url: SeatEatsConstants.AppUrlApi+"masterdata?type=language"
            }
          }
        }
      };
      vm.scope.selectOptionsLinkType = {
        filter: "contains",
        placeholder: "Select LinkType...",
        dataTextField: "content",
        dataValueField: "content",
        valuePrimitive: true,
        autoBind: false,
        animation: {
          close: {
            effects: "zoom:out",
            duration: 500
          }
        },
        dataSource: {
          type: "json",
          serverFiltering: true,
          transport: {
            read: {
              url: SeatEatsConstants.AppUrlApi+"masterdata?type=linktype"
            }
          }
        }
      };vm.scope.selectType = {
        filter: "contains",
        placeholder: "Select  Host Type...",
        dataTextField: "title",
        dataValueField: "content",
        valuePrimitive: true,
        autoBind: false,
        animation: {
          close: {
            effects: "zoom:out",
            duration: 500
          }
        },
        dataSource: {
          type: "json",
          serverFiltering: true,
          transport: {
            read: {
              url: SeatEatsConstants.AppUrlApi+"masterdata?type=link"
            }
          }
        }
      };
       vm.objectList = vm.scope.objectList;


        vm.addNewObject = function () {
            if (true) {
                var obj =
                {title:null,
                  release_date: null,
                  streams:
                    [
                      {
                        title:null,
                        url:null,
                        link_type:null


                      }
                    ]
                };

                vm.objectList.push(obj);

            }
        };
        vm.addObject = function () {
        vm.addNewObject();

        };

        vm.addNewStream = function (item) {
            if (true) {
                var obj =
                {
                    title: null,
                    url: null,
                    link_type: null,
                };
                item.streams.push(obj);

            }
        };
        vm.addStream = function (var1) {
        vm.addNewStream(var1);

        };
        vm.deleteStream = function (var1,var2) {
         if(vm.objectList.length>0) {
             vm.scope.objectList[var1].streams.remove(var2);

         }
/*
         if(angular.isDefined(item._id))
//         vm.scope.onRemove(item._id);

*/
        };

        vm.deleteObject = function (item,index) {
         if(vm.objectList.length>0) {
             vm.scope.objectList.remove(index);

         }
/*
         if(angular.isDefined(item._id))
//         vm.scope.onRemove(item._id);

*/
        };

        Array.prototype.remove = function (from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };



    }

})();
