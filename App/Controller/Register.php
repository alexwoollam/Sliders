<?php

namespace Sliders\Controller;

use Sliders\Block\SlidersBlock;

class Register
{
    public function block(){

        $block = new SlidersBlock;
        register_block_type($block->name(), $block->args());
        
        $style = new AssetProvider($block->name(),'css');
        wp_enqueue_style($style->handle(), $style->url());

        $js = new AssetProvider($block->name(),'js');
        wp_enqueue_script($js->handle(), $js->url());
    
    }
}