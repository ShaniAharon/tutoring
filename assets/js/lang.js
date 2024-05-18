const textElements = {
  en: {
    logoText: "Shani Coding",
    home: "Home",
    about: "About",
    services: "Services",
    skills: "Skills",
    contact: "Contact",
    greeting: "Hi,<br>I'm <span class='home__title-color'>Shani</span><br>Coding Instructor <br> Web Developer",
    contactMe: "Contact Me",
    aboutTitle: "About Me",
    aboutDescription: "With over three years of experience as a coding instructor and a software engineer specializing in full-stack development, I have worked with various startups to create innovative solutions. I am passionate about teaching and helping students excel in their coding bootcamps and course assignments.",
    servicesTitle: "Services",
    webDevelopment: "Web Development",
    webDevelopmentDescription: "Get personalized web development tutoring sessions to help you understand and apply various web technologies.",
    assignmentHelp: "Assignment Help",
    assignmentHelpDescription: "Receive expert assistance with your coding bootcamp or course assignments to ensure you succeed.",
    codingWorkshops: "Coding Workshops",
    codingWorkshopsDescription: "Participate in hands-on coding workshops designed to enhance your skills and knowledge in various programming languages and frameworks.",
    skillsTitle: "Skills",
    professionalSkills: "Professional Skills",
    skillsDescription: "I have honed a diverse set of skills that allow me to tackle various challenges in web development.",
    contactTitle: "Fill Your Info",
    phonePlaceholder: "Phone",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    sendButton: "Send",
    phoneLabel: "Phone",
    subjectLabel: "Subject",
    messageLabel: "Message",
    footerTitle: "Shani",
    footerCopy: "© 2024 Shani. All rights reserved"
  },
  he: {
    logoText: "שני קודינג",
    home: "בית",
    about: "אודות",
    services: "שירותים",
    skills: "כישורים",
    contact: "צור קשר",
    greeting: "שלום,<br>אני <span class='home__title-color'>שני</span><br>מדריך תכנות <br> ומפתח אתרים",
    contactMe: "צור קשר",
    aboutTitle: "אודותיי",
    aboutDescription: "עם ניסיון של מעל שלוש שנים כמדריך קוד ומהנדס תוכנה המתמחה בפיתוח פול סטאק, עבדתי עם מספר סטארטאפים ליצירת פתרונות חדשניים. אני נלהב ללמד ולעזור לתלמידים להצטיין בבוטקאמפים ובמשימות הקורס שלהם.",
    servicesTitle: "שירותים",
    webDevelopment: "פיתוח אתרים",
    webDevelopmentDescription: "קבל שיעורי פיתוח אתרים מותאמים אישית שיעזרו לך להבין וליישם טכנולוגיות ווב שונות.",
    assignmentHelp: "עזרה במשימות",
    assignmentHelpDescription: "קבל עזרה מקצועית עם המשימות שלך בבוטקאמפ או בקורס כדי להבטיח שתצליח.",
    codingWorkshops: "סדנאות קוד",
    codingWorkshopsDescription: "השתתף בסדנאות קוד מעשיות שנועדו לשפר את הכישורים והידע שלך בשפות תכנות ומסגרות שונות.",
    skillsTitle: "כישורים",
    professionalSkills: "כישורים מקצועיים",
    skillsDescription: "אני מיומן במגוון רחב של כישורים המאפשרים לי להתמודד עם אתגרים שונים בפיתוח אתרים.",
    contactTitle: "מלא את פרטיך",
    phonePlaceholder: "טלפון",
    subjectPlaceholder: "נושא",
    messagePlaceholder: "הודעה",
    sendButton: "שלח",
    phoneLabel: "טלפון",
    subjectLabel: "נושא",
    messageLabel: "הודעה",
    footerTitle: "שני",
    footerCopy: "© 2024 שני. כל הזכויות שמורות"
  }
};

const switchLanguage = (lang) => {
  document.querySelector('.nav__link.active-link').textContent = textElements[lang].home;
  document.querySelector('.nav__logo').textContent = textElements[lang].logoText;
  document.querySelectorAll('.nav__link')[1].textContent = textElements[lang].about;
  document.querySelectorAll('.nav__link')[2].textContent = textElements[lang].services;
  document.querySelectorAll('.nav__link')[3].textContent = textElements[lang].skills;
  document.querySelectorAll('.nav__link')[4].textContent = textElements[lang].contact;

  document.querySelector('.home__title').innerHTML = textElements[lang].greeting;
  document.querySelector('.button').textContent = textElements[lang].contactMe;

  document.querySelector('#about .section-title').textContent = textElements[lang].aboutTitle;
  document.querySelector('.about__text').textContent = textElements[lang].aboutDescription;

  document.querySelector('#services .section-title').textContent = textElements[lang].servicesTitle;
  document.querySelectorAll('.services__title')[0].textContent = textElements[lang].webDevelopment;
  document.querySelectorAll('.services__description')[0].textContent = textElements[lang].webDevelopmentDescription;
  document.querySelectorAll('.services__title')[1].textContent = textElements[lang].assignmentHelp;
  document.querySelectorAll('.services__description')[1].textContent = textElements[lang].assignmentHelpDescription;
  document.querySelectorAll('.services__title')[2].textContent = textElements[lang].codingWorkshops;
  document.querySelectorAll('.services__description')[2].textContent = textElements[lang].codingWorkshopsDescription;

  document.querySelector('#skills .section-title').textContent = textElements[lang].skillsTitle;
  document.querySelector('.skills__subtitle').textContent = textElements[lang].professionalSkills;
  document.querySelector('.skills__text').textContent = textElements[lang].skillsDescription;

  document.querySelector('#contact .section-title').textContent = textElements[lang].contactMe;
  // Update the contact form elements
  document.querySelector('#contact .form__title').textContent = textElements[lang].contactTitle;
  // document.querySelector('#contact .email').setAttribute('placeholder', textElements[lang].phonePlaceholder);
  // document.querySelector('#contact .subject').setAttribute('placeholder', textElements[lang].subjectPlaceholder);
  // document.querySelector('#contact .message').setAttribute('placeholder', textElements[lang].messagePlaceholder);
  document.querySelector('#contact .form__button').value = textElements[lang].sendButton;

  // Update the labels if needed
  document.querySelector('#contact .form__label[for="email"]').textContent = textElements[lang].phoneLabel;
  document.querySelector('#contact .form__label[for="subject"]').textContent = textElements[lang].subjectLabel;
  document.querySelector('#contact .form__label[for="message"]').textContent = textElements[lang].messageLabel;

  document.querySelector('.footer__title').textContent = textElements[lang].footerTitle;
  document.querySelector('.footer__copy').textContent = textElements[lang].footerCopy;

  if (lang === 'he') {
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
  } else {
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }

  document.body.classList.toggle('rtl', lang === 'he');
  document.documentElement.lang = lang;

};


// Detect the browser language and set the initial language
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  console.log('browserLang', browserLang)
  const lang = browserLang.startsWith('he') ? 'he' : 'en';
  switchLanguage(lang);
};

document.getElementById('lang-switcher').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'en' ? 'he' : 'en';
  document.documentElement.lang = newLang;
  switchLanguage(newLang);
});


// Run the language detection on page load
document.addEventListener('DOMContentLoaded', detectBrowserLanguage);