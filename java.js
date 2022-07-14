
//step-1
    //create a xhr object

    var request = new XMLHttpRequest();

    //step-2
        //initialize a connection
    
    request.open('GET','https://restcountries.com/v3.1/all'
    , true);
    
    // first parameter:'GET'
    // second parameter: 'api URL',
    // optional third parameter: true (bolean)

    
//step-3
   // to send a connection through a virual path

request.send();

//step-4
   // once data is sucessfully loaded from server(200)
// data travelling from server will be a string
// need to convert the string into object

request.onload = function(){

    var data = JSON.parse(request.response);
   console.log(data);


     for ( var i=0; i<data.length; i++){
           console.log(data[i].flags);
   
                   }    
   
         for ( var i=0; i<data.length; i++){
          console.log(data[i].name+""+ data[i].region+""+data[i].subregion+""+data[i].population);
                }
    
    
} 