var app = angular.module("Coupons", ['ui.bootstrap']);

app.controller("CouponsCtrl", function ($scope, $http) {
//Механизм смены окон *****************************
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
            if(key != view) {
                $scope.views[key] = false;
            }
        }
        $scope.views[view] = true;
    };
//Механизм смены окон*****************************

//Данные форм ************************************
    $scope.adv_camp_number_pattern = new RegExp("^[0-9]{3}$");
    $scope.adv_camp_period_pattern = new RegExp("^[0-9]{1,2}$");

    $scope.new_d_adv_camp = {
        'adv_camp_id':'',
        'adv_camp_name':'',
        'adv_camp_number':'',
        'adv_camp_desc':'',
        'adv_camp_period':'',
        'adv_camp_start': '',
        'adv_camp_maximum_uses':'',
        'adv_camp_active':'',
        'adv_camp_creation_date':''
    };


    $scope.d_adv_camp = []

//Данные форм ************************************

//picker start ***********************************
    $scope.today = function() {
        $scope.new_d_adv_camp.adv_camp_start = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.new_d_adv_camp.adv_camp_start = null;
    };

    $scope.inlineOptions = {
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open2 = function() {
        $scope.new_d_adv_camp.adv_camp_start = null;
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.new_d_adv_camp.adv_camp_start = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup2 = {
        opened: false
    };

    //picker end **********************************

    //Взаимодейтсвие с серверной частью ******************************************
    $scope.campaignCreate = function(){

            alert(campaign_create.$invalid);

        $scope.new_d_adv_camp.adv_camp_creation_date = new Date();
       $http.post('bonuscode.php', $scope.new_d_adv_camp).success(function () {
            alert('Успешно передано');
        });


    };
    $scope.getCampaigns = function(){
        $http.get("bonuscode.php").success(function (response) {
            // при успешной обработке запроса передаем данные в scope
            $scope.d_adv_camp = response;
        });
    };//Взаимодейтсвие с серверной частью ******************************************
});

