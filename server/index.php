<?php
require 'vendor/autoload.php';

// Instantiate the app
$settings = require 'src/settings.php';
$app = new \Slim\App($settings);

// Set up dependencies
require 'src/dependencies.php';

// Register middleware
require 'src/middleware.php';

// Register routes
require 'routes/routes.php';

// Run app
$app->run();
