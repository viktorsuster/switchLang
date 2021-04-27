const config = {
  locales: {
    default: 'sk', // lang code: en/sk/pl
    availableLocales: [
      {
        code: 'en',
        label: 'English'
      },
      {
        code: 'sk',
        label: 'Slovak'
      },
      {
        code: 'pl',
        label: 'Polish'
      }
    ]
  },
  routes: [
    {
      name: 'dashboard',
      label: 'Dashboard',
      route: '/'
    },
    {
      name: 'team',
      label: 'Team',
      route: '/#team'
    },
    {
      name: 'projects',
      label: 'Projects',
      route: '/#projects'
    },
    {
      name: 'calendar',
      label: 'Calendar',
      route: '/#calendar'
    },
    {
      name: 'profile',
      label: 'Profile',
      route: '/#profile'
    },

  ]
}

const locales = {
  en: [
    {
      source: 'Dashboard',
      target: 'Dashboard'
    },
    {
      source: 'Team',
      target: 'Team'
    },
    {
      source: 'Projects',
      target: 'Projects'
    },
    {
      source: 'Calendar',
      target: 'Calendar'
    },
    {
      source: 'Hello: English language',
      target: 'Hello: English language'
    }
  ],
  sk: [
    {
      source: 'Dashboard',
      target: 'Nástenka'
    },
    {
      source: 'Team',
      target: 'Tím'
    },
    {
      source: 'Projects',
      target: 'Projekty'
    },
    {
      source: 'Calendar',
      target: 'Kalendár'
    },
    {
      source: 'Hello: English language',
      target: 'Čauko: Slovenský jazyk'
    },
    {
      source: 'Profile',
      target: 'Profil'
    }
  ],
  pl: [
    {
      source: 'Dashboard',
      target: 'Deska rozdzielcza'
    },
    {
      source: 'Team',
      target: 'Zespół'
    },
    {
      source: 'Projects',
      target: 'Projektowanie'
    },
    {
      source: 'Calendar',
      target: 'Kalendarz'
    },
    {
      source: 'Hello: English language',
      target: 'Csescs: Język polski'
    }
  ]
}

function _translate(source) {
  var translations = locales[getLocale()],
      translation = translations.find(t => t.source === source);
  return !translation ? source : translation.target;
}

function setLocale(code) {
  if(config.locales.availableLocales.find(locale => locale.code === code)) {
    localStorage.setItem('locale', code);
    return true
  } else {
    alert('This language is not supported'); // Todo: Translate
    return false
  }
}

function getLocale() {
  if(!localStorage.getItem('locale')) {
    setLocale(config.locales.default);
  }

  return localStorage.getItem('locale');
}

function loadNavigation() {
  var $navigationList = document.getElementById('nav-list');
  config.routes.forEach(function (item) {
    var $li = document.createElement('li'),
        $a = document.createElement('a')
    $a.setAttribute('href', item.route)
    $a.innerText = _translate(item.label);
    $li.append($a);
    $navigationList.append($li);
  })
}

function loadLanguageSwitcher() {
  var $languageSwitcher = document.getElementById('lang-switcher');
  config.locales.availableLocales.forEach(function (item) {
    var $li = document.createElement('li'),
        $a = document.createElement('a')
    $a.innerText = _translate(item.label);
    $li.append($a);
    $li.setAttribute('class', 'event');
    $li.addEventListener('click', () => listenerSwitchLanguage(item.code))
    $languageSwitcher.append($li);
  })
}

function listenerSwitchLanguage(code) {
  if(setLocale(code)) {
    location.reload();
  }
}

function init() {
  loadNavigation();
  loadLanguageSwitcher();
}

// Process translation
$(function () {
  init();
});
