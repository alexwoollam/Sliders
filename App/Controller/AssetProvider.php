<?php

declare(strict_types=1);

namespace Sliders\Controller;

class AssetProvider implements AssetInterface
{
    public $handle;
    public $url;
    public $type;

    public function __construct(string $name, string $type)
    {
        $this->handle = 'asset-' . $name;
        $this->type = $type;
        $this->url = plugins_url('dist/' . $this->handle . '.' . $this->type . '', __FILE__);
        $this->url = str_replace('/Controller', '', $this->url);
    }

    public function handle(): string
    {
        return $this->handle;
    }

    public function url(): string
    {
        return $this->url;
    }

    public function filePath(): string
    {
        return $this->file;
    }
}
