'use strict';

angular.module('ngDuoApp')
  .controller('MainCtrl', function ($scope) {
        // hardcoded paths of the images of our 'angular' super heroes
        var SUPER_HEROES = ['/images/ng-duo.gif', '/images/superhero4.gif', '/images/superhero.ico'];

        $scope.superHeroes = SUPER_HEROES;
        $scope.heroesOfTheHour = $scope.superHeroes[0];

        /**
         * Sets a new random image path
         */
        $scope.setHeroesOfTheHour = function() {
            var index = generateRandomNumber($scope.superHeroes.length);
            $scope.heroesOfTheHour = $scope.superHeroes[index];
        };

        /**
         * Returns a random number within the given range
         * @param {number} range
         * @returns {number}
         */
        var generateRandomNumber = function(range) {
            return Math.floor(Math.random() * range);
        };
  });
