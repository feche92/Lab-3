<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT as JWT;

require './vendor/autoload.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->post('/validar/', function (Request $request, Response $response) {    
    $array=$request->getParsedBody();
    $token=$array['token'];
    if(empty($token) || $token=='') {
        throw new Exception("El token esta vacio");
    }

    try
    {
        $decodificado=JWT::decode(
            $token,
            'miClave',
            ['HS256']
        );
        $obj=new stdClass();
        if($decodificado->data->perfil=='administrador') {
            $obj->mensaje='token valido y es admin';
        }
        else if($decodificado->data->perfil=='superAdmin') {
            $obj->mensaje='token valido y es superAdmin';
        }
        else {
            $obj->mensaje='token valido';
        }
        echo json_encode($obj);
    }
    catch(Exception $e) {
        $obj=new stdClass();
        $obj->mensaje='token no valido';
        echo json_encode($obj);
    }
    return $response;
});

$app->post('/crearToken/', function (Request $request, Response $response) {    
    $array=$request->getParsedBody();
    if($array['perfil']=='superAdmin') {
        $ahora=time();
        $payload=array(
        'data' => $array,
        'iat' => $ahora,
        'exp' => $ahora + 60,
        'app' => 'API REST 2018'
    );
    $token=JWT::encode($payload,'miClave');
    }
    else {
        $ahora=time();
    $payload=array(
        'data' => $array,
        'iat' => $ahora,
        'exp' => $ahora + 15,
        'app' => 'API REST 2018'
    );
    $token=JWT::encode($payload,'miClave');
    }
    
    //return $response->withJson($token,200);
    return $token;
});

$app->post('/agregar/', function (Request $request, Response $response) {    
    echo "funciona";
});

$app->post('/modificar/', function (Request $request, Response $response) {    
    echo "funciona";
});

$app->post('/eliminar/', function (Request $request, Response $response) {    
    echo "funciona";
});

$app->run();

?>