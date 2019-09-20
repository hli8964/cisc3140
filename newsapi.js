var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=8b793ff6a9a14a45b44a3f169c6dbf72';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


$.ajax({
    url:url,
    method: "GET",
    error: function() {
        console.log("something wrong");},
    success: function(data) {
        processData(data);}
});


function processData(data) {
    var articleItems = [5];

    for (var i = 0; i < data.articles.length; i++) 
    {
        var author = data.articles[i].author;
        var title = data.articles[i].title;
        var description = data.articles[i].description;
        var content = data.articles[i].content;
        var artUrl = data.articles[i].url;

        var $title = $("<a href=" + artUrl + '><div class="title">' + title + "</div ></a>");
    	var $description = $('<div class="description"> Description: ' + description + "</div >");
        var $content = $('<div class="content">Content: ' + content + "</div >");
        var $author = $('<div class="author">From: ' + author + "</div >");
        
        $(".wrapper").append($title, $description, $content, $author);
        console.log(artUrl);
    }
}
