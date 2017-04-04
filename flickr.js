$(document).ready(function() {

    function search(search){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + search + "&tagmode=any&format=json&jsoncallback=?")
        .done(function(data) {
            var i = 0;
            $(data.items).each(function (){
                var fotos = data.items[i].media.m
                $("#fotos").append("<img src = " + fotos + ">")
                i++;
            });
        });
    }
    $("#flickr").click(function(){
        search("fuenlabrada");
    });

    $("#boton").click(function(){
        var formulario = document.getElementById('form').value;
        search(formulario)
    });
});
