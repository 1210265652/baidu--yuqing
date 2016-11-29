$(function(){
    var h=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*h
        })
        $("#fullpage")[0].addEventListener("webkitTransitionEnd",function() {
            flag=true;
        })
        flag=false;
    })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*h
        })
        $("#fullpage")[0].addEventListener("webkitTransitionEnd",function() {
            flag=true;
        })
        flag=false;
    })
})
