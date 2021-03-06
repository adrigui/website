﻿angular.module("arcsApp").component("pastEvents", {
    templateUrl: GetUrlWithVersion("../../Views/past-events.html"),
    controller: PastEventsController
});

function PastEventsController($scope, $stateParams) {
    $scope.filters = [
        "All",
        "Film",
        "Education",
        "Heritage",
        "Stage"
    ];

    $scope.years = [
        "All",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014"
    ];

    $scope.events = pastEvents;

    $scope.setSelectedFilter = function (filter) {
        $scope.selectedFilter = filter;
    }

    $scope.setSelectedYear = function (year) {
        $scope.selectedYear = year;
    }
};

angular.module("arcsApp").filter("pastEventsFilter", function () {
    return function (events, selectedFilter, selectedYear) {
        let typeFiltered = [];
        if (!selectedFilter || selectedFilter === "All") {
            typeFiltered = events;
        }
        else {
            typeFiltered = events.filter((e) => {
                return e.tags.indexOf(selectedFilter.toLowerCase()) !== -1;
            });
        }

        if (!selectedYear || selectedYear === "All") {
            return typeFiltered;
        }
        else {
            return typeFiltered.filter((e) => {
                return e.tags.indexOf(selectedYear) !== -1;
            });
        }
    }
});