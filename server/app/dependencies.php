<?php
// DIC configuration

$container = $app->getContainer();

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};
$container['info'] = function ($c) {
    $settings = $c->get('settings')['info'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushHandler(new Monolog\Handler\RotatingFileHandler($settings['path'], $settings['level']));
    return $logger;
};

// doctrine
$container['em'] = function ($c) {
    $settings = $c->get('settings');
    $config = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration(
        $settings['doctrine']['meta']['entity_path'],
        $settings['doctrine']['meta']['auto_generate_proxies'],
        $settings['doctrine']['meta']['proxy_dir'],
        $settings['doctrine']['meta']['cache'],
        false
    );
    return \Doctrine\ORM\EntityManager::create($settings['doctrine']['connection'], $config);
};

$container['App\Action\LoginAction'] = function($c) {
    $loginResource = new \App\Resource\LoginResource($c->get('em'));
    return new App\Action\LoginAction($loginResource);
};

$container['App\Action\UserAction'] = function($c) {
    $userResource = new \App\Resource\UserResource($c->get('em'));
    return new App\Action\UserAction($userResource);
};