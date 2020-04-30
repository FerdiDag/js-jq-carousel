//spostare la classe active all'immagine succesiva


//funzione click su classe next
$('.next').click(function() {
    //recupero l'img che ha la classe active in questo momento  e la salvo in una variabile
    var imgCurrent = $('img.active');

    //rimuovo la classe active all'immagine corrente
    imgCurrent.removeClass('active');
    //recupero l'immagine succesiva
    var imgNext = imgCurrent.next('img');
    //verifico che esista un0mmagine successiva
    if (imgNext.length != 0) {
        imgNext.addClass('active');
    } else {
        //se non c'è riparto dall'inizio
        imgNext = $('img:first-child');
        imgNext.addClass('active');
    }



});

//procedimento inverso per freccette per tornare indietro
$('.prev').click(function() {
    //
    var imgCurrent = $('img.active');

    //
    imgCurrent.removeClass('active');
    //
    var imgPrev = imgCurrent.prev('img');
    //
    if (imgPrev.length != 0) {
        imgPrev.addClass('active');
    } else {
        //
        imgPrev = $('img:last-child');
        imgPrev.addClass('active');
    }



});
