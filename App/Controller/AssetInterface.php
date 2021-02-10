<?php

namespace Sliders\Controller;

interface AssetInterface
{
    
    public function handle(): string;

    public function url(): string;

    public function filePath(): string;

    public function registerStyle(): mixed;
    
    public function registerScript(): mixed;
    

}