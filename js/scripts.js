$(function() {
  $("h1").click(function() {
    var flavors = ["vanilla", "chocolate", "strawberry", "sherbert"];
    flavors.forEach(function(flavor) {
      $("#icecream-list").append("<li>"+ flavor +"</li>");
    });
  });
});
