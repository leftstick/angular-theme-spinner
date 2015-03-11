/**
 * angular-theme-spinner give a handy loading indicator
 *
 * @author Howard.Zuo
 * @date   Mar 11th, 2015
 *
 **/
(function(angular, global) {
    'use strict';

    var definition = function(d3) {


        var dir = function($timeout) {
            return {
                restrict: 'A',
                scope: {
                    option: '=',
                    data: '='
                },
                link: function($scope, element) {

                }
            };
        };

        var mod = angular.module('angular-theme-spinner', []);
        mod.directive('thSpinner', ['$timeout', dir]);

    };

    if (typeof exports === 'object') {
        module.exports = definition();
    } else if (typeof define === 'function' && define.amd) {
        define([], definition);
    } else {
        definition();
    }

}(angular, window));
