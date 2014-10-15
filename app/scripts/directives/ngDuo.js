'use strict';

angular.module('ngDuoApp')
    .directive('ngDuo', function() {
        return {
            restrict: "EA",
            scope: {
                toTheRescue: "@"
            },
            template: '<div>' +
                          '<img ng-src="{{toTheRescue}}">' +
                          '<audio ng-show="false">' +
                              '<source src="/sounds/ThemeSong.mp3" type="audio/mpeg">' +
                          '</audio>' +
                      '</div>'
        }
    });