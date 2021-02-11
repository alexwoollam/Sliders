<?php

declare(strict_types=1);

try {
    require_once(__DIR__ . '/vendor/autoload.php');
} catch (Exception $error) {
    echo 'Composer didnt load.';
}

try {
    if( class_exists('\Whoops\Run')){
        $whoops = new \Whoops\Run();
        $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler());
        $whoops->register();
    }
} catch (Exception $error) {
    echo 'Whoops didnt load.';
}

try {
    $start = new \Sliders\Start();
    $start->boot();
} catch (Exeption $error) {
    echo 'Sliders didnt load';
}
