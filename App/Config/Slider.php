<?php

declare(strict_types=1);

namespace Sliders\Config;

use Pimple\Container;

class Slider implements ConfigInterface
{

    public $settings;

    public function __construct()
    {

        $this->settings = new Container();
    }

    public function set(string $name, string $title, string $category, string $icon, string $package, array $attributes): void
    {
        $this->settings['block'] = [
            'name' => $name,
            'title' => $title,
            'category' => $category,
            'icon' => $icon,
            'package' => $package,
            'attributes' => $attributes,
        ];
    }

    public function get(): array
    {
        return $this->settings['block'];
    }
}
