var app = angular.module("Coupons", []);

app.controller("CouponsCtrl", function ($scope) {
    $scope.new_d_adv_camp = {
        'adv_camp_id':'',
        'adv_camp_name':'',
        'adv_camp_number':'',
        'adv_camp_desc':'',
        'adv_camp_period':'',
        'adv_camp_start':'',
        'adv_camp_maximum_uses':'',
        'adv_camp_active':'',
        'adv_camp_creation_date':''
    };

    $scope.campaignCreate = function(){
        console.log($scope.new_d_adv_camp);
    }
});

