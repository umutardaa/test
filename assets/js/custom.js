var app = angular.module("myApp", []);
app.controller("CalcCtrl", function($scope) {
    $scope.lessons = [];
    $scope.addRow = function(){   
        var snc = "";
        var letterNote = "";
        var vizenote = ($scope.note * 30 ) / 100;
        var finalnote = ($scope.note2 * 70 ) / 100;
        $scope.total = vizenote + finalnote;

        if($scope.total < 50) {
            snc="KALDI"
        }else{
            snc="GEÇTİ"
        }

        if($scope.total < 49) {
            letterNote="FF"
        }else if($scope.total < 59) {
            letterNote="DC"
        }else if($scope.total < 69) {
            letterNote="CC"
        }else if($scope.total < 74) {
            letterNote="CB"
        }else if($scope.total < 84) {
            letterNote="BB"
        }else if($scope.total < 89) {
            letterNote="BA"
        }else {
            letterNote="AA"
        }

        $scope.lessons.push({ 
            'name':$scope.name, 
            'note': $scope.note, 
            'note2':$scope.note2, 
            'total':$scope.total, 
            'snc':snc, 
            'letterNote':letterNote 
        });

        $scope.name='';
        $scope.note='';
        $scope.note2='';
        $scope.total='';

    };
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});