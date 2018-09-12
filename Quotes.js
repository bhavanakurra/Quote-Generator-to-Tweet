// Random Quote Generator
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data){
  $(".quote").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +'#quotes';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author").text('Author: ' + data.quoteAuthor);
  $(".twitter").attr("href", quot);
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

  $("#quoteone").click(function() {
  
  $.getJSON(url, getQuote, 'jsonp');
    url.reload();

});

});


// $("#quoteone").click(function() {
//    reload(url);
//   $.getJSON(url, getQuote, 'jsonp');

// });


