//spostare la classe active all'immagine succesiva


//funzione click su classe next
$('.next').click(function() {
    //recupero l'img e il pallino che ha la classe active in questo momento  e la salvo in una variabile

    var imgCurrent = $('img.active');
    var currentBullet = $('i.active');

    //rimuovo la classe active all'immagine corrente e al pallino
    imgCurrent.removeClass('active');
    currentBullet.removeClass('active');
    //recupero l'immagine succesiva e il pallino succ
    var imgNext = imgCurrent.next('img');
    var nextBullet = currentBullet.next('i');
    //verifico che esista un0mmagine successiva eun pallino successivo
    if (imgNext.length != 0) {
        //se esiste metto la classe active
        imgNext.addClass('active');
        nextBullet.addClass('active');
    } else {
        //se non c'è riparto dall'inizio
        imgNext = $('img:first-child');
        nextBullet = $('i:first-child');
        imgNext.addClass('active');
        nextBullet.addClass('active');
    }



});

//procedimento inverso per freccette per tornare indietro
$('.prev').click(function() {
    //    //recupero l'img e il pallino che ha la classe active in questo momento  e la salvo in una variabile
    var imgCurrent = $('img.active');
    var currentBullet = $('i.active');
    ////rimuovo la classe active all'immagine corrente e al pallino
    imgCurrent.removeClass('active');
    currentBullet.removeClass('active');
    //    //recupero l'immagine precedente e il pallino precedente
    var imgPrev = imgCurrent.prev('img');
    var prevBullet = currentBullet.prev('i');
    //    //verifico che esista un0mmagine precedente  eun pallino precedente
    if (imgPrev.length != 0) {
        imgPrev.addClass('active');
        prevBullet.addClass('active');
    } else {
        ////se non c'è riparto
        imgPrev = $('img:last-of-type');
        prevBullet = $('i:last-child');
        imgPrev.addClass('active');
        prevBullet.addClass('active');
    }



});

$('.fa-circle').click(function(){

//col click seleziono un pallino e mi restituisce l'indice
    var currentIndex = $(this).index();
    console.log(currentIndex);
    //$("img:eq(currentIndex)");
});
