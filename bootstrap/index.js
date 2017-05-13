$(function(){
    $("#myModal").on("show.bs.modal",function(){
        alert("在打开窗口前触发.");
    });

    $("#tooltip").tooltip({container:"body"});

    $("#button").popover();

    $("#myButton").on("click",function(){
        var btn=$(this).button("loading");
        setTimeout(function(){
            btn.button("reset");
        },1000);
    });

    $("#myCarousel").carousel({interval:2000,pause:"hover",wrap:true});
});