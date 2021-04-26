// Array option

// var arrLang = new Array();
// arrLang['en'] = new Array();
// arrLang['sk'] = new Array();
// arrLang['pl'] = new Array();
// arrLang['content'] = new Array();

// // myContent EN
// arrLang['en']['dashboard'] = 'Dashboard';
// arrLang['en']['team'] = 'Team';
// arrLang['en']['projects'] = 'Projects';
// arrLang['en']['calendar'] = 'Calendar';
// arrLang['en']['content'] = 'Hi!';

// // myContent SK
// arrLang['sk']['dashboard'] = 'Nástenka';
// arrLang['sk']['team'] = 'Tím';
// arrLang['sk']['projects'] = 'Projekty';
// arrLang['sk']['calendar'] = 'Kalendár';
// arrLang['sk']['content'] = 'Čauko';

// // myContent PL
// arrLang['pl']['dashboard'] = 'Deska rozdzielcza';
// arrLang['pl']['team'] = 'Zespół';
// arrLang['pl']['projects'] = 'Projektowanie';
// arrLang['pl']['calendar'] = 'Kalendarz';
// arrLang['pl']['content'] = 'Csesc';

// Object option

const locales = {
  en: {
    dashboard: 'Dashboard',
    team: 'Team',
    projects: 'Projects',
    calendar: 'Calendar',
    content: 'Hello'
  },
  sk: {
    dashboard: 'Nástenka',
    team: 'Tím',
    projects: 'Projekty',
    calendar: 'Kalendár',
    content: 'Čauko'
  },
  pl: {
    dashboard: 'Deska rozdzielcza',
    team: 'Zespół',
    projects: 'Projektowanie',
    calendar: 'Kalendarz',
    content: 'Csesc'
  }
}

// Process translation

$(function () {
  $('.event').click(function (e) {
    e.preventDefault()
    var lang = $(this).attr('id');
    $('.lang').each(function (index, item) {
      // $(this).find('> li').text(arrLang[lang][$(this).attr('key')]);
      $(this).find('> li').text(locales[lang][$(this).attr('key')]);
    });
  });
});


// Select option

// $(function () {
//   $('#mySelect').on('change', function () {
//     var lang = $(this).val();


//     $('.lang').each(function (index, item) {
//       $(this).text(arrLang[lang][$(this).attr('key')]);
//     });
//   });
// });