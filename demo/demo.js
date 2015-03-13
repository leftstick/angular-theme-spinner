(function(angular) {
    'use strict';

    var demo = angular.module('demo', ['ngAnimate', 'mgcrea.ngStrap', 'hljs', 'angular-theme-spinner']);

    demo.config(['hljsServiceProvider',
        function(hljsServiceProvider) {
            hljsServiceProvider.setOptions({
                tabReplace: '    '
            });
        }
    ]);

    demo.directive('backToTop', ['$document', function($document) {
        return {
            restrict: 'A',
            link: function(scope, element) {

                element.on('click', function(e) {
                    $document.find('body').animate({
                        scrollTop: 0
                    });
                    e.preventDefault();
                    e.stopPropagation();
                });

                scope.$on('$destroy', function() {
                    element.off('click');
                });
            }
        };
    }]);

    demo.controller('ThemeController', ['$scope',
        function($scope) {

            $scope.themes1 = [{
                name: 'tailing',
                source: '<th-spinner theme="\'tailing\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'audio-wave',
                source: '<th-spinner theme="\'audio-wave\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'windcatcher',
                source: '<th-spinner theme="\'windcatcher\'"></th-spinner>',
                size: 'size-md',
                running: true
            }];

            $scope.themes2 = [{
                name: 'spinner-section',
                source: '<th-spinner theme="\'spinner-section\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'spinner-section-far',
                source: '<th-spinner theme="\'spinner-section-far\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'circular',
                source: '<th-spinner theme="\'circular\'"></th-spinner>',
                size: 'size-md',
                running: true
            }];



            $scope.toggleSize = function(theme, size, $event) {
                theme.size = size;
                $event.preventDefault();
                $event.stopPropagation();
            };

        }
    ]);

}(angular));
