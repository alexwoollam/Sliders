<?php

namespace Sliders\Controller;

use Sliders\Block\SlidersBlock;

class Register
{
    public function block( object $settings ){

        $block = new SlidersBlock( $settings );

        $wp = ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data', 'wp-components'];

        $dataPass = [
            'name'       => $block->name(),
            'title'      => $block->title(),
            'category'   => $block->category(),
            'icon'       => $block->icon(),
            'package'    => $block->packaged(),
            'attributes' => $block->attributes()
        ];
        
        register_block_type($block->name(), $block->args());
        
        $style = new AssetProvider($block->name(),'css');
        wp_enqueue_style($style->handle(), $style->url());

        $js = new AssetProvider($block->name(),'js');
        wp_enqueue_script($js->handle(), $js->url(), $wp, '0');

        wp_localize_script( $js->handle(), ucfirst($block->name()), $dataPass );
    
    }
}
