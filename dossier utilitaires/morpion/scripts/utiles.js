
/* ---------------------------------------- */
/*        UTILES  JS	                    */
/* ---------------------------------------- */




function loremIpsum(repeat)
{
	for (var i = 0; i <repeat; i++)
	{
		document.write("texte ");
	}

}


function add(a, b)
{
	var result = a + b;
	return result;

}

function hypotenuse(a, b)
{
	var somme = a*a + b*b;
	return parseInt(Math.sqrt(somme));

}

function motpluslong(tab)
{	
	var texte = "";
	for( var i = 0; i < tab.length; i++ )
	{
		if (tab[i].length  > texte.length)
		{
			texte = tab[i];
		};
	} 
	return texte;

}

function getRandomInteger(min,max)
{	

	var x =  Math.random();
	var result = x * (max - min + 1) + min;
	return Math.floor(result);

}

function requestInteger(message,min,max)
{	

	var x = prompt(message);
	while ( isNaN(parseInt(x))   || x < min ||  x > max )  
	{
			 x = prompt("Ce n'est pas numérique ou compris entre " + min + " et " + max);
	};
	return parseInt(x);

}

function showImage(source, large, haut)
{	
	var src 	= '<img src=';
	var xlarge 	= ' width= '  + large;
	var xhaut 	= ' height= ' + haut;	
	var xfin 	= "/>"
	document.write( src + source + xlarge + xhaut + xfin);
}


function installEventHandlers(selector, event, eventHandler)
{	
	var elems = document.querySelectorAll(selector);
	    
	for (var i = 0; i < elems.length; i++)
	    {
	        elems[i].addEventListener(event, eventHandler);
	    }
}