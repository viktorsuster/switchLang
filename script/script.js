var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['sk'] = new Array();
arrLang['pl'] = new Array();


// myContent EN
arrLang['en']['dashboard'] = 'Dashboard';
arrLang['en']['team'] = 'Team';
arrLang['en']['projects'] = 'Projects';
arrLang['en']['calendar'] = 'Calendar';
arrLang['en']['desc'] = 'Hi!';

// myContent SK
arrLang['sk']['dashboard'] = 'Nástenka';
arrLang['sk']['team'] = 'Tím';
arrLang['sk']['projects'] = 'Projekty';
arrLang['sk']['calendar'] = 'Kalendár';
arrLang['sk']['desc'] = 'Čauko';

// myContent PL
arrLang['pl']['dashboard'] = 'Deska rozdzielcza';
arrLang['pl']['team'] = 'Zespół';
arrLang['pl']['projects'] = 'Projektowanie';
arrLang['pl']['calendar'] = 'Kalendarz';
arrLang['pl']['desc'] = 'Csesc';

fetch("json/lang.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

// Process translation


$(function() {
$('#mySelect').on('change', function() {
var lang = $(this).val();
$('.lang').each(function(index, item) {
$(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});