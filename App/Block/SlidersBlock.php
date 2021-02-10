<?php

namespace Sliders\Block;

class SlidersBlock implements BlockInterface
{

    public const NAME     = 'Sliders';
    public const CATEGORY = 'embed';
    public const ICON     = 'dashicons-table-row-before';
    public const PACKAGE  = 'alex-sliders';
 
    public function name(): string
    {
        return self::NAME;
    }

    public function args(): array
    {
        return [];
    }

    public function title(): string
    {
        return __(self::NAME, self::PACKAGE);
    }

    public function category(): string
    {
        return self::CATEGORY;
    }

    public function icon(): string
    {
        return self::ICON;
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