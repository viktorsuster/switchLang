var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['sk'] = new Array();
arrLang['pl'] = new Array();
arrLang['content'] = new Array();


// myContent EN
arrLang['en']['dashboard'] = 'Dashboard';
arrLang['en']['team'] = 'Team';
arrLang['en']['projects'] = 'Projects';
arrLang['en']['calendar'] = 'Calendar';
arrLang['en']['content'] = 'Hi!';

// myContent SK
arrLang['sk']['dashboard'] = 'Nástenka';
arrLang['sk']['team'] = 'Tím';
arrLang['sk']['projects'] = 'Projekty';
arrLang['sk']['calendar'] = 'Kalendár';
arrLang['sk']['content'] = 'Čauko';

// myContent PL
arrLang['pl']['dashboard'] = 'Deska rozdzielcza';
arrLang['pl']['team'] = 'Zespół';
arrLang['pl']['projects'] = 'Projektowanie';
arrLang['pl']['calendar'] = 'Kalendarz';
arrLang['pl']['content'] = 'Csesc';

// Process translation

$(function() {
  $('.event').click(function() {
    var lang = $(this).attr('id');
  
  $('.lang').each(function(index, item) {
  $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });


// Select option

$(function() {
$('#mySelect').on('change', function() {
var lang = $(this).val();


$('.lang').each(function(index, item) {
$(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});