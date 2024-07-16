document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); // Domyślny język
  });
  
  function changeLanguage(lang) {
    fetch(`lang/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        document.getElementById('homenav').innerText = translations.homenav;
        document.getElementById('aboutnav').innerText = translations.aboutnav;
        document.getElementById('about').innerText = translations.about;
        document.getElementById('desc').innerHTML = translations.desc;
        document.getElementById('projectsnav').innerText = translations.projectsnav;
        document.getElementById('projects').innerText = translations.projects;
        document.getElementById('contactnav').innerText = translations.contactnav;
        document.getElementById('contact').innerText = translations.contact;
        document.getElementById('skill').innerText = translations.skill;
        document.getElementById('hello').innerText = translations.hello;
        document.getElementById('name').innerText = translations.name;
        document.getElementById('dev').innerText = translations.dev;
        document.getElementById('project1').innerText = translations.project1;
        document.getElementById('courses').innerText = translations.courses;
        document.getElementById('education').innerText = translations.education;
        document.getElementById('uni').innerText = translations.uni;
      })
      .catch(error => console.error('Error loading translations:', error));
  }