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
            [ 
                'slider-id'  => [
                    'type' => 'string',
                ],
                'show-title' => [
                    'type' => 'boolean',
                    'default' => true,
                ],
                'show-description' => [
                    'type' => 'boolean',
                    'default' => false,
                ],
                'use-default-width' => [
                    'type' => 'boolean',
                    'default' => true,
                ],
                'width' => [
                    'type' => 'number',
                    'min'  => 1,
                    'max'  => 100,
                    'step' => 5,
                    'default' => 100,
                ],
            ],//attributes
        );
        ( new Register )->block( $settings );
    }
}