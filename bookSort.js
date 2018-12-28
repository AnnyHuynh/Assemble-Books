
$(document).ready(function() {

  function bookSearch(){
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    // console.log(search);
    var byTitle;
    var byAuthor;
    var bookImage;
  
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function(data){
       console.log(data);
      //Show only 10 books from the list. 
      for (i= 0; i < 10; i++){
        //assign Book datas
        byTitle = data.items[i].volumeInfo.title;
        //only show one author per book
        byAuthor = data.items[i].volumeInfo.authors[0];
        bookImage = data.items[i].volumeInfo.imageLinks.thumbnail;
        viewBook = data.items[i].volumeInfo.infoLink;

        // results.innerHTML += "<h2>" + byTitle + "<h2>"

        var displayBooks =  
        "<div class='card bookcard' style='width: 16rem; height: 25rem'>" + 
        "<img class='card-img-top' style = 'width: 100%; height: 100%;' src=" + bookImage + "' alt='"+ byTitle + "class = 'cardimage'>"+
        "<div class='card-body'>"+
        "<h5 class='card-title bookTitle'>" + byTitle + "</h5>"+
        "<p class='card-text bookAuthor'>" + "By: " + byAuthor + "</p>"+
        "<a target ='_blank' href="+ viewBook + "class='btn btn-primary'>View More...</a>"+
        "</div>"+
        "</div>";

        results.innerHTML += displayBooks;

      }
    },
    type: 'GET'
  });

  }
  $("#search-button").on("click", function(){
  
  bookSearch();
  $("#search").val("");

  $(".section2").css("display","none");  
   })



  $("#button1").click(function(){
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=tech", 
    function(result){
      var bookTitles1 = [];
      
      
      console.log(result);

      for (var i = 0; i < result.items.length; i++){
       //console.log(result.items[i].volumeInfo.title);
      var bookObject = {};
      var title1 = result.items[i].volumeInfo.title;
      var author1 = result.items[i].volumeInfo.authors.toString();
      var bookImage1 = result.items[i].volumeInfo.imageLinks.thumbnail;


      bookObject.title1 = title1;
      bookObject.author1 = author1;
      bookObject.bookImage1 = bookImage1;
      console.log(bookObject);
      
      bookTitles1.push(bookObject);
       

      };

      console.log(bookTitles1);

      bookTitles1.sort();
      // console.log(bookTitles1);
      var counter = 0;
      for (var j = 0; j < bookTitles1.length; j++){
        
        if (bookTitles1[j].title1.charAt(0) >= 'A' && bookTitles1[j].title1.charAt(0) <= 'M'){        
          //  console.log(bookTitles1[j]);
          counter = counter + 1;
          console.log(counter);
          if (counter <= 4){
            
           var display = "<div class='card bookcard' style='width: 16rem; height: 25rem'>" + 
           "<img class='card-img-top' style = 'width: 100%; height: 100%;' src=" + bookTitles1[j].bookImage1 + "' alt='"+ bookTitles1[j].title1 + "class = 'cardimage'>"+
           "<div class='card-body'>"+
           "<h5 class='card-title bookTitle'>" + bookTitles1[j].title1 + "</h5>"+
           "<p class='card-text bookAuthor'>" + "By: " + bookTitles1[j].author1 + "</p>"+
           "</div>"+
           "</div>";
         
          
         $("#row1").append(display);
        
          }else{
            var display = "<div class='card bookcard' style='width: 16rem; height: 25rem'>" + 
           "<img class='card-img-top' style = 'width: 100%; height: 100%;' src=" + bookTitles1[j].bookImage1 + "' alt='"+ bookTitles1[j].title1 + "class = 'cardimage'>"+
           "<div class='card-body'>"+
           "<h5 class='card-title bookTitle'>" + bookTitles1[j].title1 + "</h5>"+
           "<p class='card-text bookAuthor'>" + "By: " + bookTitles1[j].author1 + "</p>"+
           "</div>"+
           "</div>";
         
         $("#row2").append(display);
         $("#row2").hide();
          }
        }
        else {
          // console.log("Nothing!");
          $("#row1").append(" ");       
        }
      };
    });
  });

  $(".show1").on("click", function(){

    $("#row2").show();

  })

  $("#button2").click(function(){
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=tech", 
    function(result){
      var bookTitles2 = [];
      
      
      console.log(result);

      for (var i = 0; i < result.items.length; i++){
       //console.log(result.items[i].volumeInfo.title);
      var bookObject2 = {};
      var title2 = result.items[i].volumeInfo.title;
      var author2 = result.items[i].volumeInfo.authors.toString();
      var bookImage2 = result.items[i].volumeInfo.imageLinks.thumbnail;


      bookObject2.title2 = title2;
      bookObject2.author2 = author2;
      bookObject2.bookImage2 = bookImage2;
      console.log(bookObject2);
      
      bookTitles2.push(bookObject2);
       

      };

      console.log(bookTitles2);

      bookTitles2.sort();
      // console.log(bookTitles1);
      var counter = 0;
      for (var j = 0; j < bookTitles2.length; j++){
        
        if (bookTitles2[j].title2.charAt(0) >= 'N' && bookTitles2[j].title2.charAt(0) <= 'Z'){        
          //  console.log(bookTitles1[j]);
          counter = counter + 1;
          console.log(counter);
          if (counter <= 4){
            
           var display = "<div class='card bookcard' style='width: 16rem; height: 25rem'>" + 
           "<img class='card-img-top' style = 'width: 100%; height: 100%;' src=" + bookTitles2[j].bookImage2 + "' alt='"+ bookTitles2[j].title2 + "class = 'cardimage'>"+
           "<div class='card-body'>"+
           "<h5 class='card-title bookTitle'>" + bookTitles2[j].title2 + "</h5>"+
           "<p class='card-text bookAuthor'>" + "By: " + bookTitles2[j].author2 + "</p>"+
           "</div>"+
           "</div>";
         
          
         $("#row3").append(display);
        
          }else{
            var display = "<div class='card bookcard' style='width: 16rem; height: 25rem'>" + 
           "<img class='card-img-top' style = 'width: 100%; height: 100%;' src=" + bookTitles2[j].bookImage2 + "' alt='"+ bookTitles2[j].title2 + "class = 'cardimage'>"+
           "<div class='card-body'>"+
           "<h5 class='card-title bookTitle'>" + bookTitles2[j].title2 + "</h5>"+
           "<p class='card-text bookAuthor'>" + "By: " + bookTitles2[j].author2 + "</p>"+
           "</div>"+
           "</div>";
         
         $("#row4").append(display);
         $("#row4").hide();
          }
        }
        else {
          // console.log("Nothing!");
          $("#row3").append(" ");       
        }
      };
    });
  });

  $(".show2").on("click", function(){

    $("#row4").show();

  })
  
});



