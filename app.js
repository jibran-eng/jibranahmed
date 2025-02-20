$(document).ready(function(){
    $("#adbtn").click(function(){
        var Name = $(".txtName").val();
        $(".result").append('<div class="entry">'+Name+'</div>');
        $(".txtName").val("");
    });
});