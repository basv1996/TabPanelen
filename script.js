$('.knoppen').each( function() {
    var Knopje = $(this);
    var SelectedKnop = Knopje.find('li.actief');
    var link = SelectedKnop.find('a');
    var LinkActief = $(link.attr('href'));
    
    Knopje.on('click', 'a', function(e) {
        e.preventDefault();
        var link = $(this);
//       alert(link.attr('href'));
        var beoogdId = this.hash;
//      alert(beoogdId);
        
        if(beoogdId && !link.parent().is('.actief')){
            LinkActief.removeClass('actief');
            SelectedKnop.removeClass('actief');
            
           LinkActief = $(beoogdId).addClass('actief');
            SelectedKnop = link.parent().addClass('actief');
        }
    })
    
});

// unobrusive weghalen van niet active vensters
$('paneel').css('display','none')