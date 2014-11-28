<?php

		 include 'index.php';
//		 echo diviser(5,0);

//		 echo multiply ( 5, 2 );


/*
	try{
		echo multiply ( 5, 2 ) . '<br>';
		 echo multiply ( 5, 'toto' );
		 echo multiply ( 4, 2 );
	}

	catch (Exception $erreur)
	{
		echo "Il y a une erreur : " . $erreur->getMessage() . '<br>';
		echo "Il y a une erreur : " . $erreur->getCode();
	}
*/

	try{
		echo diviser ( 5, 2 ) . '<br>';
		echo diviser ( 5, 0 );
	}

	catch (Exception $erreur)
	{
		echo "Il y a une erreur : " . $erreur->getMessage() . '<br>';

	}