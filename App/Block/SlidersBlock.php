<?php

namespace Sliders\Block;

class SlidersBlock implements BlockInterface
{


    public string $name     = 'Sliders';
    public string $category = 'embed';
    public string $icon     = 'dashicons-table-row-before';
    public string $package  = 'alex-sliders';
 

    public function __construct( object $settings )
    {
        $config = $settings->get();
        $this->name = $config['name'];
        $this->category = $config['category'];
        $this->icon = $config['icon'];
        $this->package = $config['package'];        
    }

    public function name(): string
    {
        return $this->name;
    }

    public function args(): array
    {
        return [];
    }

    public function title(): string
    {
        return __($this->name, $this->package);
    }

    public function category(): string
    {
        return $this->category;
    }

    public function icon(): string
    {
        return $this->icon;
    }

    public function packaged(): array
    {
        return[
            'title'    => $this->title(),
            'category' => $this->category(),
            'icon'     => $this->icon(),
            'name'     => $this->name(),
        ];
    }
}