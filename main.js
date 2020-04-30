//spostare la classe active all'immagine succesiva


//funzione click su classe next
$('.next').click(function() {
    //recupero l'img che ha la classe active e la salvo in una variabile
    var imgCurrent = $('img.active');

    //rimuovo la classe active
    imgCurrent.removeClass('active');
    //inserisco la classe active all'img successiva
    var imgNext = imgCurrent.next('img');
    imgCurrent.addClass('active');
    console.log(imgNext);
});
