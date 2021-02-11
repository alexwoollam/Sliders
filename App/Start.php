<?php

namespace Sliders;

use Sliders\Controller\Register;


class Start{

    public function boot(){
        $settings = new Config\Slider;
        $settings->set(
            'sliders',//name
            'Sliders',//title
            'embed',//Category
            'table-row-before',//icon
            'alex-sliders',//package
            'nothing',//attributes
        );
        ( new Register )->block( $settings );
    }
}