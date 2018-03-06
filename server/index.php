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

require 'app/src/Entity/Agencies.php';
require 'app/src/abstractResource.php';
require 'app/src/Resource/AgencyResource.php';
require 'app/src/Action/AgencyAction.php';

// Run app
$app->run();
