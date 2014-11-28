<?php

require_once ('includes/autoload.php');
$users = new Model_Post();

session_start();
$_SESSION["err_email"]      = "";
$_SESSION["err_password"]   = "";
$message_err                = "";

    // Vérification email et password

	$err_email = true;

    if (  array_key_exists("email", $_POST)    && !empty($_POST["email"]) &&
     	  array_key_exists("pass", $_POST)     && !empty($_POST["pass"])  )
    {
        $email      = $_POST["email"];
        $password   = $_POST["pass"];

    	$user_pass  = $users->searchPasswordByemail($email);

        try
        {
            if (!$user_pass)
            { 
                $_SESSION["err_email"] = "o";
                throw new Exception ("L email est invalise");
            }

            if (!password_verify($password, $user_pass['password']))
            {
                $_SESSION["err_password"] = "o";
                throw new Exception ("Le password est invalide"); 
            }

            header("Location: index.php");
            exit;
        }

        catch (Exception $erreur)
        {
           $message_err = "Il y a une erreur : " . $erreur->getMessage() . '<br>';
        };

    }

include 'login.phtml';






