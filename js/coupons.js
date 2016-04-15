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
    $scope.d_adv_camp = [
        {
            'adv_camp_id':'1',
            'adv_camp_name':'Скидка 5%',
            'adv_camp_number':'001',
            'adv_camp_desc':'Купоны на полиграфии',
            'adv_camp_period':'45',
            'adv_camp_start': '15.04.2016',
            'adv_camp_maximum_uses':'9999',
            'adv_camp_active':'1',
            'adv_camp_creation_date':'13.04.2016'
        },
        {
            'adv_camp_id':'2',
            'adv_camp_name':'Скидка 15%',
            'adv_camp_number':'002',
            'adv_camp_desc':'На почту',
            'adv_camp_period':'45',
            'adv_camp_start': '15.04.2016',
            'adv_camp_maximum_uses':'9999',
            'adv_camp_active':'1',
            'adv_camp_creation_date':'13.04.2016'
        }
    ];

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

    $scope.campaignCreate = function(){
       $http.post('bonuscode.php', $scope.new_d_adv_camp).success(function () {
            alert('Успешно доставлено');
 //           $scope.items.push(item);
 //           $scope.currentView = "table";
        });

        console.log($scope.new_d_adv_camp.adv_camp_start);
    }
});

