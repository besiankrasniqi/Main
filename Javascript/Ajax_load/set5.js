/**
 * Created by Besian Krasniqi
 * email: besian@bksofteng.com
 * website: www.bksofteng.com
*/
$.ajax({
    dataType: "json",
    url: "file1.json",
    success: function(passval){
        fnOne(passval)
    }
});

function fnOne(passval) {
        x = passval;
        $.each(x, function(key, val){
            $("#maincontent").append("<li>" + key + " : " + val + "</li>");
        });

        var idSeven = x.seven;
        var idNine = x.nine;
        for (var prop in idSeven) {
            $("#maincontent").append("<li>" + prop + " : " + idSeven[prop] +  "</li>")
        }
        $.each(idNine[0], function(key, value){
            $("#maincontent").append("<li>" + key + " : "  + value +  "</li>");
        })
        $.each(idNine[1], function(key, value){
            $("#maincontent").append("<li>" + key + " : "  + value +  "</li>");
        })
}

