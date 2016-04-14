<?php

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