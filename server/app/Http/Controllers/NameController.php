<?php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class NameController extends Controller {

        const MODEL = "App\Name";

        use RESTActions;

        /**
         * Echo the name.
         *
         * @param  Request  $request
         * @param  Response $response
         * @param  string  $name
         * @return Response
         */
        public function echo(Request $request, Response $response, $name)
        {
//            return("Hello, $name");
//            print_r($response);
            return response()->json(['name' => $name]);
        }
    }
