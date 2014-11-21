function ajaxFunction(){
	var ajaxRequest; 
	ajaxRequest = new XMLHttpRequest();
	
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
        	var xmlDocument = ajaxRequest.responseXML;
        	var xmlDoc = ajaxRequest.responseText;
        	alert(xmlDocument);
			//var parser=new DOMParser();
  			//var xmlDoc2=parser.parseFromString(xmlDoc,"text/xml");
        	//alert(xmlDoc2);
			//var next = "";
			//var text = xmlDoc2.getElementsByTagName("li");
			//alert(text.length);
			//for (var i=0; i<text.length; i++){
				//next += text[i].value;
			//}
			//document.getElementById("result").innerHTML=next;
			//alert(next);
		}
	}
	var check = document.getElementById("all").checked;
	alert(check)
	var lookup = document.getElementById('term').value;
	
	if(lookup === "" && check === false){
		alert("Invalid input");
	}
	else if(check === true && lookup === ""){
		ajaxRequest.open("GET", "world.php?all=", true);
		ajaxRequest.send(null);
	}
	else if(check === false && lookup !== ""){
		ajaxRequest.open("GET", "world.php?lookup="+lookup, true);
		ajaxRequest.send(null);
	}
}
