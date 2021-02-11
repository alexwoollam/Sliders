<?php

namespace Sliders\Config;

interface ConfigInterface
{

    public function set(string $name, string $title, string $category, string $icon, string $package, string $attributes): void;

    public function get(): array;

}