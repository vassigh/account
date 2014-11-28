
/*  JS Morpion */


var positions = new Array();     


/* Le premier jour joue avec la croix */
var etat_xo  = "X";
var resultat = "";
var nom_joueur_1 = "";
var nom_joueur_2 = "";
var coords;

var convas = document.getElementById("myCanvas");
var context = convas.getContext("2d");
context.fillStyle = "#333";
context.fillRect(10,10,620,620);
context.lineWidth = 6;
context.lineJoin = "round";
context.lineCap = "round";
context.strokeStyle = "#FFF";

cadre(200,10,200,600);
cadre(400,10,400,600);
cadre(10,200,600,200);
cadre(10,400,600,400);



	    document.addEventListener("DOMContentLoaded",function()
		{
		/*	installEventHandlers(".submit","click",savename);  */

			installEventHandlers("canvas","click", positionner);
		});


		function savename(){
			nom_joueur_1 	=   getFormFieldValue("#formulaire", "nom_joueur_1");
			nom_joueur_2	=	getFormFieldValue("#formulaire", "nom_joueur_2");
		}


		function getFormFieldValue(selector, fieldName){

		   	var form = document.querySelector(selector);
		   	var field = form.elements.namedItem(fieldName);
		   	return field.value;
		}


	    function positionner(){

	 	   this.removeEventListener("click", positionner);

		   	//var elem = $(this);

		    if (etat_xo == "X")
		    {
		     /* 	elem.append(etat_xo);  */
		     	cercle( coords.x, coords.y, 50);
		    	etat_xo = "O"
		    }
		    else 
		    {
		      /* elem.append("O"); */
		      cercle( coords.x, coords.y, 50); 
		      etat_xo = "X"; 	
		    }

		//    getTable();

		    resultat=verifEtat();

		    if ( resultat != "" ) {

		    	if (resultat = "X")
		    	{
		    		alert(nom_joueur_1 + "  a gagné ");
		    	}
		    	else
		    	{
		    		alert(nom_joueur_2 + "  a gagné ");
		    	}
		    }


		 }



	    function verifEtat(){

    			var etat="";
	    		
	    		etat=verifGain(0,1,2);
	    		if (etat=="") 
	    			etat=verifGain(3,4,5);
	    		if (etat=="") 
	    			etat=verifGain(6,7,8);
	    		if (etat=="") 
	    			etat=verifGain(0,3,6);
	    		if (etat=="") 
	    			etat=verifGain(1,4,7);
	    		if (etat=="") 
	    			etat=verifGain(2,5,8);
	    		if (etat=="") 
	    			etat=verifGain(0,4,8);
	    		if (etat=="") 
	    			etat=verifGain(2,4,6);
	    		return etat;


	    }

	    function verifGain(x,y,z){
	    	if( positions[x] == positions[y] && positions[y] == positions[z] && positions[x] != "")
	    		{
	    			return positions[0];
	    		}
	    	return "";
	    }


	    function cadre(xmove,ymove,xline,yline){

            context.beginPath();
            context.moveTo(xmove,ymove);
            context.lineTo(xline,yline);
            context.stroke();
            context.closePath();
	    }


	    function cercle(x,y,r){
            context.beginPath();
            context.arc(x,y,r,0,2*Math.PI,true);
            context.stroke();
	    }


	    function croix(xcentre, ycentre, pas){
            context.beginPath();
            context.moveTo(xcentre-pas,ycentre-pas);
            context.lineTo(xcentre+pas,ycentre+pas);
            context.moveTo(xcentre+pas,ycentre-pas);
            context.lineTo(xcentre-pas,ycentre+pas); 
            context.stroke();
            context.closePath();
	    }

		function getCoords(el,event) {
		  var ox = -el.offsetLeft,
		  oy = -el.offsetTop;
		  while(el=el.offsetParent){
		    ox += el.scrollLeft - el.offsetLeft;
		    oy += el.scrollTop - el.offsetTop;
		  }
		  return {x:event.clientX + ox , y:event.clientY + oy};
		}

		// Exemple d'utilisation :
 
		convas.onclick = function(e) {
		  coords = getCoords(this,e);
		  
		};