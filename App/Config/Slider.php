<?php

namespace Sliders\Config;

use Pimple\Container;

class Slider implements ConfigInterface
{

    public Container $settings;

    public function __construct()
    {

        $this->settings = new Container();
    }

    public function set(string $name, string $category, string $icon, string $package): void
    {   
        $this->settings['block'] = [
            'name'     => $name,
            'category' => $category,
            'icon'     => $icon,
            'package'  => $package,
        ];        
    }

    public function get():array
    {   
       return $this->settings['block'];
    }

}