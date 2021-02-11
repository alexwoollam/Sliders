<?php

namespace Sliders;

use Sliders\Controller\Register;


class Start{

    public function boot(){
        $settings = new Config\Slider;
        $settings->set(
            'Sliders',
            'embed',
            'dashicons-table-row-before',
            'alex-sliders'
        );
        ( new Register )->block( $settings );
    }
}