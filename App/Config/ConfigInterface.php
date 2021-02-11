<?php

namespace Sliders\Config;

interface ConfigInterface
{

    public function set(string $name, string $category, string $icon, string $package): void;

    public function get(): array;

}