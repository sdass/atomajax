function aname() {
  console.log("This is method 1");
    var xmlhttpRequest = new XMLHttpRequest();
    xmlhttpRequest.onreadystatechange = function(){
      console.log('readyState=' + xmlhttpRequest.readyState)
      if(xmlhttpRequest.readyState == 4 && xmlhttpRequest.status == 200){
      //  console.log( xmlhttpRequest.response);
        console.log( JSON.parse(xmlhttpRequest.response));
      }
    }

    xmlhttpRequest.open("GET", "data/tweets.json", true);
    xmlhttpRequest.send();

}

// window.onload =aname;   //works above

//this is jquery method2
$.get("data/tweets.json", function(data){
  console.log('Inside jquery method method 2');
  console.log(data);
  console.log(JSON.stringify(data));
} );
