$(document).ready(function() {
    $("#btnSubmit").click(function(){
        //alert("button");
        var val = $("#userName").val();
        var pVal = $("#password").val();
        if (val == 'guest@portfolio.com' && pVal == 'guest') {
        			window.location.href='resume.html';
        }
        else{
        		alert("enter guest@portfolio.com");
        }
    }); 
});