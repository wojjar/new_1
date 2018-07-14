
window.onload = function () {
    $(".loader .inside").fadeOut(1000, function () {
        $(".loader").fadeOut(500);
    });

   
    rotateImgs();
    function rotateImgs()
    {
        var firstImg = $(".imgToRotate:first-child");
        
        firstImg.addClass("current");
        
        rotate();
    }
    
    function rotate()
    {
    
        var current = $(".current");
        
        current.animate({ "opacity": 0}, 5000, function()
        {
            $(this).removeClass("current");
        }
        );	
        
        current = current.next();
         if (current[0] ==  undefined)
           current = $(".imgToRotate:first-child");
           
        current.css("opacity", 0).addClass("current").delay(100).animate({"opacity": 0.7}, 5000, rotate);
    }
    
};













