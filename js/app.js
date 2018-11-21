function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "seal|seals|seal meme|seals meme",
            maxResults: 10,
            order: "viewCount",
            publishedAfter: "2007-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyCXDTz6DnO8uj2OPd71Fd3DaWJgGI2IxdI");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
        console.log("API ready");
		console.log(status);
		document.getElementById("status").innerHTML = "YouTube API - ✅ | Seal overload - ✅ | Seal-o-matic ready to work - ✅";
    });
}

var sealb = document.getElementById("seals");
sealb.addEventListener("click", rollSeal);

    $(window).on("resize", resetVideoHeight);
    
function seal1(){
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "sax seal -run -flex -kiss -gachaverse -way -FF14",
            maxResults: 10,
            order: "relevance",
            publishedAfter: "20010-01-01T00:00:00Z"
       }); 
       request.execute(function(response) {
          var results = response.result;
		  var ents = results.items.length;
		  var randval = Math.floor(Math.random() * ents);
		  var resultf = [];
		  console.log(results.items);
		  resultf.push(results.items[randval]); 
          $("#resultf").html("");
          $.each(resultf, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#resultf").append(tplawesome(data, [{"title":"Here's your seal video!", "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    }
function seal2(){
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "seals animal -run -flex -kiss -killing -birth -draw -paint -mating -furry -fucking -gachaverse -way -FF14 -facts -kindergarten",
            maxResults: 10,
            order: "relevance",
            publishedAfter: "20010-01-01T00:00:00Z"
       }); 
       request.execute(function(response) {
          var results = response.result;
		  var ents = results.items.length;
		  var randval = Math.floor(Math.random() * ents);
		  var resultf = [];
		  console.log(results.items);
		  resultf.push(results.items[randval]); 
          $("#resultf").html("");
          $.each(resultf, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#resultf").append(tplawesome(data, [{"title":"Here's your seal video!", "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    }
function seal3(){
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "seal meme -run -flex -kiss -furry -birth -mating -annoying -gachaverse -way -FF14 -animeme",
            maxResults: 10,
            order: "relevance",
            publishedAfter: "20010-01-01T00:00:00Z"
       }); 
       request.execute(function(response) {
          var results = response.result;
		  var ents = results.items.length;
		  var randval = Math.floor(Math.random() * ents);
		  var resultf = [];
		  console.log(results.items);
		  resultf.push(results.items[randval]); 
          $("#resultf").html("");
          $.each(resultf, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#resultf").append(tplawesome(data, [{"title":"Here's your seal video!", "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    }
function rollSeal(){
	var d = Math.floor(Math.random() * 3);
	switch(d){
		case 0:
			seal1();
			break;
		case 1:
			seal2();
			break;
		case 2:
			seal3();
			break;
	}
}