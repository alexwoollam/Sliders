<?php

declare(strict_types=1);

namespace Sliders\Block;

class SlidersBlock implements BlockInterface
{

    public string $name;
    public string $category;
    public string $icon;
    public string $package;
    public array $attributes;

    public function __construct(object $settings)
    {
        $config = $settings->get();
        $this->name = $config['name'];
        $this->title = $config['title'];
        $this->category = $config['category'];
        $this->icon = $config['icon'];
        $this->package = $config['package'];
        $this->attributes = $config['attributes'];
    }

    public function name(): string
    {
        return $this->name;
    }

    public function namespace(): string
    {
        return $this->name;
    }

    public function args(): array
    {
        return [];
    }

    public function title(): string
    {
        return $this->title;
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
            'title' => $this->title(),
            'category' => $this->category(),
            'icon' => $this->icon(),
            'name' => $this->name(),
        ];
    }

    public function attributes(): array
    {
        return $this->attributes;
    }
}
