<?php
    // include the file we just wrote - connect 
    include("connect.php"); // like a JS import statement

    $query = "SELECT * FROM profData";

    $runQuery = $pdo->query($query); //havent done anything with it

    $result = array(); //put it in an array and send it back

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    } // this grabs the data and shows it

    // return $result;
    //var_dump($result);
    echo(json_encode($result));
