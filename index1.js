
$(document).ready(function() {
  $("#button1").click(function(){
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=tech", 
    function(result){
      var bookTitles1 = [];
      //var authorsArr = [];
      for (var i = 0; i < result.items.length; i++){
      // console.log(result.items[i].volumeInfo.title);
        //document.write(result.items[i].volumeInfo.title);
        bookTitles1.push(result.items[i].volumeInfo.title);
        //authorsArr.push(result.items[i].volumeInfo.authors[i]);
      };
      bookTitles1.sort();
      // console.log(bookTitles1);

      for (var j = 0; j < bookTitles1.length; j++){
        if (bookTitles1[j].charAt(0) >= 'A' && bookTitles1[j].charAt(0) <= 'M'){
          // console.log(bookTitles1[j]);
          // console.log($("#row1"));
          $("#row1").append(bookTitles1[j] + ", ");
          //$("#row2").append(authorsArr[j] + ", ");
        }
        else {
          // console.log("Nothing!");
          $("#row1").append(" ");
          

        }
      // console.log(result.items[0].volumeInfo.authors[0]);
      };
    });
  });

  $("#button2").click(function(){
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=tech", 
    function(result){
      var bookTitles2 = [];
      for (var i = 0; i < result.items.length; i++){
        // console.log(result.items[i].volumeInfo.title);
        bookTitles2.push(result.items[i].volumeInfo.title);
      };
      bookTitles2.sort();
      // console.log(bookTitles2);
      // $(".row2").append(bookTitles2 + " ");
      for (var j = 0; j < bookTitles2.length; j++){

        if (bookTitles2[j].charAt(0) >= 'N' && bookTitles2[j].charAt(0) <= 'Z')
        {
          // console.log(bookTitles2[j]);
          $("#row3").append(bookTitles2[j] + ", ");
        
        } else {

          $("#row3").append(" ");
          // console.log("Nothing!");
          // document.write("Nothing!");
         // $("#row1").append(bookTitles1[j] + " ");
        }
        // console.log(result.items[0].volumeInfo.authors[0]);
      };      
    });
  });
});



