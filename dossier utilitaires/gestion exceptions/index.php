<?php


		function diviser($a, $b)
		{

			if ( ( !is_numeric($a) ) ||   ( !is_numeric($b) ) )
				 throw new Exception ("Argument invalide ");

			if ($b == 0) 
				 throw new Exception ("Division par zero!");

			return $a / $b;
		}


		function multiply($a, $b)
		{

			if (  ( !is_numeric($a) ) ||   ( !is_numeric($b) )  ) throw new Exception ("ce n est pas un numeric ");
			return $a*$b;		
		}


