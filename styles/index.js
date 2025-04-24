var tog=$(".slide");
var arr=[];
function calc(arr) {
    if (arr.length==0) {
        $(".content").html("<h6>Please Enter Your Calculations</h6>");
    }
}
calc(arr);
// Background Mode
tog.on("click",function (e) { 
console.log(e.target.alt);
if (e.target.alt==='dark') {
    $("body").css("background-color","hsl(222, 26%, 31%)");
    $(".mode").css("background-color","hsl(222, 26%, 31%");
    $(".mode").css("color","hsl(0, 0%, 100%)");
    $("button").css("background-color","hsl(45, 7%, 89%)");
    $("button").css("box-shadow","0px 1px hsl(35, 11%, 61%)");
    $("button").css("color","hsl(60, 10%, 19%)");
    $(".scrn").css("color","hsl(45, 7%, 89%)");
    $("button[value='DEL']").css("color","hsl(0, 0%, 93%)");
    $("button[value='reset']").css("color","hsl(0, 0%, 93%)");
    $("button[value='=']").css("color","hsl(0, 0%, 93%)");
    $("button[value='DEL']").css("background-color","hsl(225, 21%, 49%)");
    $("button[value='reset']").css("background-color","hsl(225, 21%, 49%)");
    $("button[value='=']").css("background-color","hsl(6, 63%, 50%)");
    $(".slider").css("background-color","hsl(223, 31%, 20%)");
    $(".scrn").css("background-color","hsl(223, 31%, 20%)");
    $(".btns").css("background-color","hsl(223, 31%, 20%)");
    $(".content").css("scrollbar-color","hsl(223, 31%, 20%) hsl(223, 31%, 20%)");
    $(".attribution").css("color","hsl(0, 0%, 100%)");
} else if(e.target.alt==='light') {
    
    // $("input:checked")[0].alt=="light".css("background-color","hsl(25, 98%, 40%)");
    $("body").css("background-color","hsl(0, 0%, 90%)");
    $(".mode").css("background-color","hsl(0, 0%, 90%)");
    $(".mode").css("color","hsl(60, 10%, 19%)");
    $("button").css("background-color","hsl(45, 7%, 89%)");
    $("button").css("box-shadow","0px 1px hsl(35, 11%, 61%)");
    $("button").css("color","hsl(60, 10%, 19%)");
    $(".scrn").css("color","hsl(60, 10%, 19%)");
    $("button[value='DEL']").css("background-color","hsl(185, 42%, 37%)");
    $("button[value='reset']").css("background-color","hsl(185, 42%, 37%)");
    $("button[value='=']").css("background-color","hsl(25, 98%, 40%)");
    $("button[value='DEL']").css("color","hsl(0, 0%, 93%)");
    $("button[value='reset']").css("color","hsl(0, 0%, 93%)");
    $("button[value='=']").css("color","hsl(0, 0%, 93%)");
    $(".slider").css("background-color","hsl(0, 5%, 81%)");
    $(".scrn").css("background-color","hsl(0, 0%, 93%)");
    $(".btns").css("background-color","hsl(0, 5%, 81%)");
    $(".content").css("scrollbar-color","hsl(0, 0%, 93%) hsl(0, 0%, 93%)");
    $(".attribution").css("color","hsl(228, 45%, 44%)");
}
else
{

    $("body").css("background-color","hsl(268, 75%, 9%)");
    $(".mode").css("background-color","hsl(268, 75%, 9%)");
    $(".mode").css("color","hsl(52, 100%, 62%)");
    $("button").css("color","hsl(52, 100%, 62%)");
   $("button").css("background-color","hsl(268, 47%, 21%)");
    $("button[value='DEL']").css("color","hsl(0, 0%, 100%)");
    $("button[value='reset']").css("color","hsl(0, 0%, 100%)");
    $("button[value='=']").css("color","hsl(198, 20%, 13%)");
    $(".scrn").css("color","hsl(52, 100%, 62%)");
    $("button").css("box-shadow","0px 1px hsl(290, 70%, 36%)");
    $("button[value='DEL']").css("background-color","hsl(281, 89%, 26%)");
    $("button[value='reset']").css("background-color","hsl(281, 89%, 26%)");
    $("button[value='=']").css("background-color","hsl(176, 100%, 44%)");
    $(".slider").css("background-color","hsl(268, 71%, 12%)");
    $(".scrn").css("background-color","hsl(268, 71%, 12%)");
    $(".btns").css("background-color","hsl(268, 71%, 12%)");
    $(".content").css("scrollbar-color","hsl(268, 71%, 12%) hsl(268, 71%, 12%)");
    $(".attribution").css("color","hsl(52, 100%, 62%)");
}
 });


// Calculator functions
$(".btns").on("click",function (e) {
    console.log(e.target.name);
    if (e.target.name) {
        if (e.target.name=="+"||e.target.name=="-"||e.target.name=="/"||e.target.name=="*") {
            if (e.target.name=="*") {
                arr.push(e.target.name);
            }
            else{
                arr.push($("button[name="+`\\${e.target.name}`+"]").text());
            }
                    
        } else if(e.target.name!="+"||e.target.name=="-"||e.target.name=="/"||e.target.name=="*"){
            
                arr.push($("button[name="+e.target.name+"]").text());
        
         console.log("button[name="+e.target.name+"]");
        }
       console.log(arr);
    $(".content").html(arr.join(""));
    } 
})
$(".btns").on("click",function (e) {

    if (e.target.value=="DEL") {
        console.log(e.target.value=="DEL");
        arr.pop();
        if (arr.length==0) {
            $(".content").html("<h6>Please Enter Your Calculations</h6>");
        } else {
            $(".content").html(arr.join(""));
        }
    }
    else if(e.target.value=="reset")
    {
        arr=[];
        $(".content").html("<h6>Please Enter Your Calculations</h6>");
    }
    else if(e.target.value=="=")
    {
     console.log(eval(arr.join("")));
     $(".content").html(eval(arr.join("")));
     arr=[];
    }
})