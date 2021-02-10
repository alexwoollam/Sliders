<?php

namespace Sliders;

use Sliders\Controller\Register;


class Start{

    public function boot(){
        ( new Register )->block();
    }
}