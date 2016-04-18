<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $post = json_decode(file_get_contents("php://input"));
   // foreach($post as $key=>$item ) {
        file_put_contents("debug.txt", var_export($post->adv_camp_start, true) . "\n", FILE_APPEND);
   // }
    //echo $data;
}

$camp1 = new d_adv_camp();
$camp1->adv_camp_id = '1';
$camp1->adv_camp_name = 'Скидка 5%';
$camp1->adv_camp_number = '001';
$camp1->adv_camp_desc = 'Купоны на полиграфии';
$camp1->adv_camp_period = '45';
$camp1->adv_camp_start = '15.04.2016';
$camp1->adv_camp_maximum_uses = '9999';
$camp1->adv_camp_active = '1';
$camp1->adv_camp_creation_date = '13.04.2016';

$camp2 = new d_adv_camp();
$camp2->adv_camp_id = '1';
$camp2->adv_camp_name = 'Скидка 15%';
$camp2->adv_camp_number = '002';
$camp2->adv_camp_desc = 'На почту';
$camp2->adv_camp_period = '5';
$camp2->adv_camp_start = '15.04.2016';
$camp2->adv_camp_maximum_uses = '9999';
$camp2->adv_camp_active = '1';
$camp2->adv_camp_creation_date = '16.04.2016';

$d_adv_campains = array(
    $camp1, $camp2
);



if($_SERVER['REQUEST_METHOD'] == 'GET') {

    file_put_contents("debug.txt", var_export($_GET, true) . "\n", FILE_APPEND);

    $send = json_encode($d_adv_campains);
    file_put_contents("debug.txt", var_export($send , true) . "\n", FILE_APPEND);
    echo $send;

}

exit(0);




class d_adv_camp {
    public $adv_camp_id;
    public $adv_camp_name;
    public $adv_camp_number;
    public $adv_camp_desc;
    public $adv_camp_period;
    public $adv_camp_start;
    public $adv_camp_maximum_uses;
    public $adv_camp_active;
    public $adv_camp_creation_date;
}
$code = new BonusCode();
echo $code->generate('GA', '301', '002', '00001');






/**
 * Created by PhpStorm.
 * User: m.karas
 * Date: 12.04.2016
 * Time: 11:50
 */
class BonusCode {
    public $bonusCode=NULL;

    public function generate ($prefix, $validTill, $companyId, $couponId) {
        $salt   = bin2hex(openssl_random_pseudo_bytes(2));
        $result = $prefix.'-'.$validTill.'-'.$companyId.'-'.abs(crc32($prefix.$validTill.$companyId.$couponId.$salt));
        return $result;
    }

    public function create ($code){

    }

    public function check ($code) {

    }

    public function used ($code) {

    }

    public function deactivate($code) {

    }
}

?>