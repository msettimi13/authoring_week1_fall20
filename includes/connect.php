<?php 
    $db_dsn = array( 
        'host' => 'localhost', //address of place you want to get into
        'dbname' => 'IDP_ProfData', //door you want to get into
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = 'root'; //windows user leave it blank, mac says root

    try{ //like a key trying to get into a door and if it fits you can get whatever you need
        $pdo = new PDO($dsn, $db_user, $db_pass); //pdo is the key fitting
        //var_dump($pdo); //see the connection and make sure it works 
        // echo (in this case) is almost like a console.log
        // echo "you're in! congrats!";
    } catch (PDOException $exception){ //catch gives you an error message if the key doesnt fit
        echo 'Connection Error:'. $exception->getMessage();
        exit();
    }