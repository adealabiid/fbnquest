$(document).ready(function() {
    $( ".bottom-panel__link.financing" ).hover(function() {
      // $( this ).fadeOut( 100 );
      $( ".bottom-panel__link.financing" ).find(".image-icon").attr('src','images/portfolio.png');
    });
    $( ".bottom-panel__link.advising" ).hover(function() {
      // $( this ).fadeOut( 100 );
      $( ".bottom-panel__link.advising" ).find(".image-icon").attr('src','images/speech-bubble-white.png');
    });
    $( ".bottom-panel__link.investing" ).hover(function() {
      // $( this ).fadeOut( 100 );
      $( ".bottom-panel__link.investing" ).find(".image-icon").attr('src','images/stopwatch-white.png');
    });
    $( ".bottom-panel__link.trading" ).hover(function() {
      // $( this ).fadeOut( 100 );
      $( ".bottom-panel__link.trading" ).find(".image-icon").attr('src','images/handshake-white.png');
    });
    $( ".bottom-panel__link.securing" ).hover(function() {
      // $( this ).fadeOut( 100 );
      $( ".bottom-panel__link.securing" ).find(".image-icon").attr('src','images/list-white.png');
    });

    var bgImageArray = ["fbn_image.jpg", "fbn_image_1.jpg"],
    base = "images/",
    secs = 4;
    bgImageArray.forEach(function(img){
        new Image().src = base + img; 
        // caches images, avoiding white flash between background replacements
    });

    function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function(){ 
            document.getElementById("top-section").style.background = "url(" + base + bgImageArray[k] + ") no-repeat";
            document.getElementById("top-section").style.backgroundSize ="cover";
            document.getElementById("top-section").style.transition ="all 1s";	
			//document.getElementById("top-section").fadeOut( 100 );         
        if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }            
        }, (secs * 1200) * i)   
    }
}
backgroundSequence();   

$('.company-links__anchor').click(function(e){
  e.preventDefault();
  $(this).closest('.company-links__item').find('.sub-link').toggle('slow');
  console.log($(this).closest('.company-links__item').find('.company-links__item .sub-link'));
  // $('.company-links__item .sub-link').hide();
});

$('.search-button').click(function(e){
  e.preventDefault();
  $('.site-search-form').toggle('slow');
});

$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  $('.site-search-form').hide();
});



});