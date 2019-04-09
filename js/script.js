// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var input= $("input").val ()
    var request_url ="https://api.giphy.com/v1/gifs/search?q="+ input + "&rating=pg&api_key=dc6zaTOxFJmzC";
         console.log(request_url);
         
         function getRandomNumb(min,max) {
             var request = Math.floor(Math.random() * (max-min)) + min; //The maximum is exclusive and the minimum is inclusive
             
             
             console.log(request);
             return request;
         }
    
    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
           var pic_url = response.data[0].images.original.url;
           $('body').append('<img src=' + pic_url + '>');
      },
    }); 
    
});