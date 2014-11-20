function ajaxFunction(){
	var ajaxRequest; 
	ajaxRequest = new XMLHttpRequest();
	
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
        	var xmlDocument = ajaxRequest.responseXML;
        	var xmlDoc = ajaxRequest.responseText;
			var parser=new DOMParser();
  			var xmlDoc2=parser.parseFromString(xmlDoc,"text/xml");
        	//alert(xmlDoc2);
			var next = "";
			var text = xmlDoc2.getElementsByTagName("li");
			for (var i=0; i<text.length; i++){
				//alert(text[i]);
				next += text[i].firstChild.nodeValue;
			}
			document.getElementById("result").innerHTML=next;
			alert(next);
		}
	}
	var lookup = document.getElementById('term').value;
	if(lookup === ""){
		alert("Invalid input");
	}
	else{
		ajaxRequest.open("GET", "world.php?lookup="+lookup, true);
		ajaxRequest.setRequestHeader('Content-Type', 'text/xml');
		ajaxRequest.send(null);
	}
}
