// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("aside").togg(".hide");

//     });
// })
$(document).ready(function(){
    $("#btn").click(function(){
        $("aside").toggleClass("hide");
        $("header").toggleClass("header1");
        $(".main").toggleClass("main1");
        $(".cls-b").toggleClass("close-btn");
    });
})