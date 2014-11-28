<?php

// Inscription compte

require_once ('includes/autoload.php');
$users = new Model_Post();
session_start();
$_SESSION["err_password"] = "";
$_SESSION["err_password2"] = "";
$message_err = "";


     if (  array_key_exists("username", $_POST)   && !empty($_POST["username"])   &&
          array_key_exists("password", $_POST)   && !empty($_POST["password"])   && 
          array_key_exists("password2", $_POST)  && !empty($_POST["password2"])  && 
          array_key_exists("email", $_POST)      && !empty($_POST["email"]) )
    {
        $username     = $_POST["username"];
        $email        = $_POST["email"];
        $password     = $_POST["password"];
        $password2     = $_POST["password2"];


        try
        {
          // vérification de l'email
          if ( !filter_var($email, FILTER_VALIDATE_EMAIL))
            throw new Exception ("Ce n est pas un email valise.");

          if ( strlen($password) < 8  )
          { 
               $_SESSION["err_password"] = "o";
               throw new Exception ("Le mot de passe a moins de 8 caractères. ");
          }
          
          if ( $password != $password2  )
          { 
               $_SESSION["err_password2"] = "o"; 
               throw new Exception ("Le mot de passe n'est identique ");    
        
          }

          $pass1 = password_hash($password,  PASSWORD_DEFAULT);

          $id = $users->insertUser($username, $pass1, $email);

          header("Location: login.php");
          exit;

        }

        catch (Exception $erreur)
        {
          $message_err = "Il y a une erreur : " . $erreur->getMessage() . '<br>';

        };

	}

    include 'register.phtml';