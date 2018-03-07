<?php
require 'vendor/autoload.php';

// Instantiate the app
$settings   = require 'app/settings.php';
$app = new \Slim\App($settings);

// Set up dependencies
require 'app/dependencies.php';

// Register middleware
require 'app/middleware.php';

// Register routes
require 'app/routes.php';

require 'app/src/abstractResource.php';

$entities = glob('app/src/Entity/*.php');
foreach($entities as $entity)
    require($entity);

$resources = glob('app/src/Resource/*.php');
foreach($resources as $resource)
    require($resource);

$controllers = glob('app/src/Action/*.php');
foreach($controllers as $controller)
    require($controller);

// Run app
$app->run();
