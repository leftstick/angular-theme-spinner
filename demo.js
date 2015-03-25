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
                source: '<th-spinner theme="\'tailing\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'audio-wave',
                source: '<th-spinner theme="\'audio-wave\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'windcatcher',
                source: '<th-spinner theme="\'windcatcher\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }];

            $scope.themes2 = [{
                name: 'spinner-section',
                source: '<th-spinner theme="\'spinner-section\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'spinner-section-far',
                source: '<th-spinner theme="\'spinner-section-far\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }, {
                name: 'circular',
                source: '<th-spinner theme="\'circular\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }];

            $scope.themes3 = [{
                name: 'initspin',
                source: '<th-spinner theme="\'initspin\'" display="\'true\'" size="\'size-md\'"></th-spinner>',
                size: 'size-md',
                running: true
            }];



            $scope.toggleSize = function(theme, size, $event) {
                theme.size = size;
                theme.source = '<th-spinner theme="\'' + theme.name + '\'" display="\'' + theme.running + '\'" size="\'' + size + '\'"></th-spinner>';
                $event.preventDefault();
                $event.stopPropagation();
            };

            $scope.toggleDisplay = function(theme, $event) {
                theme.running = !theme.running;
                theme.source = '<th-spinner theme="\'' + theme.name + '\'" display="\'' + theme.running + '\'" size="\'' + theme.size + '\'"></th-spinner>';
                $event.preventDefault();
                $event.stopPropagation();
            };

        }
    ]);

}(angular));
