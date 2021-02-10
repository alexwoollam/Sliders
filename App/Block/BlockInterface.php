<?php

namespace Sliders\Block;

interface BlockInterface
{
    public function name(): string;

    public function args(): array;

    public function title(): string;

    public function category(): string;

    public function icon(): string;

    public function packaged(): array;
}