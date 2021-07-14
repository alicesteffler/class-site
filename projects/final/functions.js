var clicks = 0;
$(".affirmation-button").on("click",function() {
    if(clicks === 0){
        funcA();
    }
    if(clicks === 1){
        funcB();
    }
    if(clicks === 2){
        funcC();
    }
    if(clicks === 3){
        funcD();
    }
    if(clicks === 4){
        funcE();
    }
    if(clicks === 5){
        funcF();
    }
    if(clicks === 6){
        funcG();
    }
    if(clicks === 7){
        funcH();
    }
    if(clicks === 8){
        funcI();
    }
    if(clicks === 9){
        funcJ();
    }
    if(clicks === 10){
        funcK();
    }
    if(clicks === 11){
        funcL();
    }
    clicks++;
});
function funcA() {
  $(".p1").removeClass("hidden");
}

function funcB() {
  $(".p1").addClass("hidden");
  $(".p2").removeClass("hidden");
  $('body').css('background', '#1fc7de');
}
function funcC() {
  $(".p2").addClass("hidden");
  $(".p3").removeClass("hidden");
  $('body').css('background', '#bd6ce9');
}
function funcD() {
  $(".p3").addClass("hidden");
  $(".p4").removeClass("hidden");
  $('body').css('background', '#43e4aa');
}
function funcE() {
  $(".p4").addClass("hidden");
  $(".p5").removeClass("hidden");
  $('body').css('background', '#a7e443');
}
function funcF() {
  $(".p5").addClass("hidden");
  $(".p6").removeClass("hidden");
  $('body').css('background', '#e4b743');
}
function funcG() {
  $(".p6").addClass("hidden");
  $(".p7").removeClass("hidden");
  $('body').css('background', '#c69df4');
}
function funcH() {
  $(".p7").addClass("hidden");
  $(".p8").removeClass("hidden");
  $('body').css('background', '#e46f43');
}
function funcI() {
  $(".p8").addClass("hidden");
  $(".p9").removeClass("hidden");
  $('body').css('background', '#d553a1');
}
function funcJ() {
  $(".p9").addClass("hidden");
  $(".p10").removeClass("hidden");
  $('body').css('background', '#47e443');
}
function funcK() {
  $(".p10").addClass("hidden");
  $(".p11").removeClass("hidden");
  $('body').css('background', '#a15da0');
}
function funcL() {
  $(".p11").addClass("hidden");
  $(".p12").removeClass("hidden");
  $('body').css('background', '#6ea18a');
}
