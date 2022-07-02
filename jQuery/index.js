// $(document).ready(function(){
//     $("h1").css("color", "red")
// });

// $("h1").css("color", "red");
$("h1").addClass("color-red");
$("h1").addClass("big-title margin-50");

$("h1").text("hhoowddy")
$("button").html("<em>Hey</em>")

$("button").css("background-color", "green")

console.log($("img").attr("src"));

$("a").attr("href", "http://www.yahoo.com");

console.log($("h1").attr("class"));
console.log($("h1").css("color"))

// $("h1").click(function() {
//     if ($("h1").css("color") == "rgb(255, 0, 0)") {
//         $("h1").css("color", "blue");
//     } else {
//         $("h1").css("color", "red");
//     }
    
// })

$("h1").click(function() {
    if ($("h1").hasClass("color-red")) {
        $("h1").removeClass("color-red");
        $("h1").addClass("color-blue");
    } else {
        $("h1").removeClass("color-blue");
        $("h1").addClass("color-red");
    }
    
})