var app = angular.module("Coupons", ['ngMaterial', 'ngMessages']);


app.controller("CouponsCtrl", function ($scope) {

    $scope.views = {
        'campaign_view':false,
        'campaign_create':false,
        'coupons_view':false,
        'add_single_coupon':false,
        'add_serial_coupons':false,
        'check_coupon':false
    };
    $scope.set_view = function (view){
        for(var key in $scope.views){
            console.log($scope.views[key]);
            if(key != view) {
                $scope.views[key] = false;
            }
        }
        $scope.views[view] = true;
    };
    $scope.new_d_adv_camp = {
        'adv_camp_id':'',
        'adv_camp_name':'',
        'adv_camp_number':'',
        'adv_camp_desc':'',
        'adv_camp_period':'',
        'adv_camp_start':new Date(),
        'adv_camp_maximum_uses':'',
        'adv_camp_active':'',
        'adv_camp_creation_date':''
    };


    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 1,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 12,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }


    $scope.campaignCreate = function(){
        console.log($scope.new_d_adv_camp);
    }

});

