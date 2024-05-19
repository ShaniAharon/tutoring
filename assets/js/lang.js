const textElements = {
  en: {
    logoText: "Shani Coding",
    home: "Home",
    about: "About",
    services: "Services",
    skills: "Skills",
    contact: "Contact",
    pricing: "Pricing",
    greeting: "Hi,<br>I'm <span class='home__title-color'>Shani</span><br>Coding Instructor <br> Web Developer",
    contactMe: "Contact Me",
    aboutTitle: "About Me",
    aboutSubtitle: "I'm Shani",
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
    footerTitle: "Shani Coding",
    footerCopy: "© 2024 Shani. All rights reserved",
    pricing: "Pricing",
    pricingTitle: "Pricing Plans",
    basicPlan: "Basic",
    basicPrice: "50",
    basicFeature1: "1 Hour Session",
    basicFeature2: "Personalized Tutoring",
    standardPlan: "Standard",
    standardPrice: "120",
    standardFeature1: "2 Hour Session",
    standardFeature2: "Bootcamp Assignment Help",
    premiumPlan: "Premium",
    premiumPrice: "200",
    premiumFeature1: "3 Hour Session",
    premiumFeature2: "Project Assistance",
    getStarted: "Get Started"
  },
  he: {
    logoText: "שני קודינג",
    home: "בית",
    about: "אודות",
    services: "שירותים",
    skills: "כישורים",
    contact: "צור קשר",
    pricing: "מחירים",
    greeting: "שלום,<br>אני <span class='home__title-color'>שני</span><br>מדריך תכנות <br> ומפתח אתרים",
    contactMe: "צור קשר",
    aboutTitle: "אודותיי",
    aboutSubtitle: "אני שני",
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
    footerTitle: "שני קודינג",
    footerCopy: "© 2024 שני. כל הזכויות שמורות",
    pricing: "מחירים",
    pricingTitle: "תוכניות מחירים",
    basicPlan: "בסיסי",
    basicPrice: "50",
    basicFeature1: "פגישה של שעה",
    basicFeature2: "הדרכה מותאמת אישית",
    standardPlan: "סטנדרט",
    standardPrice: "120",
    standardFeature1: "פגישה של שעתיים",
    standardFeature2: "עזרה במשימות בוטקאמפ",
    premiumPlan: "פרימיום",
    premiumPrice: "200",
    premiumFeature1: "פגישה של שלוש שעות",
    premiumFeature2: "עזרה בפרויקטים",
    getStarted: "התחל"
  },
  th: {
    logoText: "ชานิ การเขียนโค้ด",
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    services: "บริการ",
    skills: "ทักษะ",
    contact: "ติดต่อ",
    greeting: "สวัสดี,<br>ฉันคือ <span class='home__title-color'>ชานิ</span><br>ครูสอนเขียนโค้ด <br> นักพัฒนาเว็บ",
    contactMe: "ติดต่อฉัน",
    aboutTitle: "เกี่ยวกับฉัน",
    aboutSubtitle: "ฉันคือ ชานิ",
    aboutDescription: "ด้วยประสบการณ์มากกว่าสามปีในฐานะครูสอนเขียนโค้ดและวิศวกรซอฟต์แวร์ที่เชี่ยวชาญด้านการพัฒนาแบบเต็มสแต็ก ฉันได้ทำงานกับสตาร์ทอัพต่างๆ เพื่อสร้างโซลูชันที่เป็นนวัตกรรม ฉันมีความหลงใหลในการสอนและช่วยให้นักเรียนประสบความสำเร็จในบู๊ตแคมป์การเขียนโค้ดและงานมอบหมายหลักสูตร",
    servicesTitle: "บริการ",
    webDevelopment: "การพัฒนาเว็บ",
    webDevelopmentDescription: "รับการสอนการพัฒนาเว็บส่วนบุคคลเพื่อช่วยให้คุณเข้าใจและประยุกต์ใช้เทคโนโลยีเว็บต่างๆ",
    assignmentHelp: "ช่วยงานที่ได้รับมอบหมาย",
    assignmentHelpDescription: "รับความช่วยเหลือจากผู้เชี่ยวชาญเกี่ยวกับการบู๊ตแคมป์การเขียนโค้ดหรือการมอบหมายหลักสูตรของคุณเพื่อให้แน่ใจว่าคุณประสบความสำเร็จ",
    codingWorkshops: "เวิร์กช็อปการเขียนโค้ด",
    codingWorkshopsDescription: "เข้าร่วมเวิร์กช็อปการเขียนโค้ดแบบลงมือปฏิบัติจริงที่ออกแบบมาเพื่อเสริมทักษะและความรู้ของคุณในภาษาการเขียนโปรแกรมและกรอบงานต่างๆ",
    skillsTitle: "ทักษะ",
    professionalSkills: "ทักษะระดับมืออาชีพ",
    skillsDescription: "ฉันได้ฝึกฝนทักษะที่หลากหลายซึ่งช่วยให้ฉันจัดการกับความท้าทายต่างๆ ในการพัฒนาเว็บได้",
    contactTitle: "กรอกข้อมูลของคุณ",
    phonePlaceholder: "โทรศัพท์",
    subjectPlaceholder: "หัวข้อ",
    messagePlaceholder: "ข้อความ",
    sendButton: "ส่ง",
    phoneLabel: "โทรศัพท์",
    subjectLabel: "หัวข้อ",
    messageLabel: "ข้อความ",
    footerTitle: "ชานิ การเขียนโค้ด",
    footerCopy: "© 2024 ชานิ. สงวนลิขสิทธิ์ทั้งหมด",
    pricing: "ราคา",
    pricingTitle: "แผนราคา",
    basicPlan: "พื้นฐาน",
    basicPrice: "50",
    basicFeature1: "การให้คำปรึกษา 1 ชั่วโมง",
    basicFeature2: "การสอนแบบส่วนบุคคล",
    standardPlan: "มาตรฐาน",
    standardPrice: "120",
    standardFeature1: "การให้คำปรึกษา 2 ชั่วโมง",
    standardFeature2: "ความช่วยเหลือเกี่ยวกับงานมอบหมายในบูตแคมป์",
    premiumPlan: "พรีเมี่ยม",
    premiumPrice: "200",
    premiumFeature1: "การให้คำปรึกษา 3 ชั่วโมง",
    premiumFeature2: "ความช่วยเหลือในโครงการ",
    getStarted: "เริ่มต้น"
  }
};

const currencyMap = {
  en: { locale: 'en-US', currency: 'USD', rate: 1 / 3.6 },
  he: { locale: 'he-IL', currency: 'ILS', rate: 1 },
  th: { locale: 'th-TH', currency: 'THB', rate: 10 }
};

const formatPrice = (lang, priceUSD) => {
  const { locale, currency, rate } = currencyMap[lang];
  const price = priceUSD * rate;
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);
};

const switchLanguage = (lang) => {
  document.querySelector('.nav__link.active-link').textContent = textElements[lang].home;
  document.querySelector('.nav__logo').textContent = textElements[lang].logoText;
  document.querySelectorAll('.nav__link')[1].textContent = textElements[lang].about;
  document.querySelectorAll('.nav__link')[2].textContent = textElements[lang].services;
  document.querySelectorAll('.nav__link')[3].textContent = textElements[lang].skills;
  document.querySelectorAll('.nav__link')[4].textContent = textElements[lang].pricing;
  document.querySelectorAll('.nav__link')[5].textContent = textElements[lang].contact;

  document.querySelector('.home__title').innerHTML = textElements[lang].greeting;
  document.querySelector('.button').textContent = textElements[lang].contactMe;

  document.querySelector('#about .section-title').textContent = textElements[lang].aboutTitle;
  document.querySelector('.about__text').textContent = textElements[lang].aboutDescription;
  document.querySelector('.about__subtitle').textContent = textElements[lang].aboutSubtitle;

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

  // Pricing Section
  document.querySelector('#pricing .section-title').textContent = textElements[lang].pricingTitle;
  document.querySelectorAll('.pricing__title')[0].textContent = textElements[lang].basicPlan;
  document.querySelectorAll('.pricing__price')[0].textContent = formatPrice(lang, textElements[lang].basicPrice);
  document.querySelectorAll('.pricing__feature')[0].textContent = textElements[lang].basicFeature1;
  document.querySelectorAll('.pricing__feature')[1].textContent = textElements[lang].basicFeature2;
  document.querySelectorAll('.pricing__title')[1].textContent = textElements[lang].standardPlan;
  document.querySelectorAll('.pricing__price')[1].textContent = formatPrice(lang, textElements[lang].standardPrice);
  document.querySelectorAll('.pricing__feature')[2].textContent = textElements[lang].standardFeature1;
  document.querySelectorAll('.pricing__feature')[3].textContent = textElements[lang].standardFeature2;
  document.querySelectorAll('.pricing__title')[2].textContent = textElements[lang].premiumPlan;
  document.querySelectorAll('.pricing__price')[2].textContent = formatPrice(lang, textElements[lang].premiumPrice);
  document.querySelectorAll('.pricing__feature')[4].textContent = textElements[lang].premiumFeature1;
  document.querySelectorAll('.pricing__feature')[5].textContent = textElements[lang].premiumFeature2;
  document.querySelectorAll('.pricing__button').forEach(button => button.textContent = textElements[lang].getStarted);

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
  // const lang = browserLang.startsWith('he') ? 'he' : 'en';
  const lang = browserLang.startsWith('he') ? 'he' : browserLang.startsWith('th') ? 'th' : 'en';
  switchLanguage(lang);
};

document.getElementById('lang-switcher').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  // const newLang = currentLang === 'en' ? 'he' : 'en';
  const newLang = currentLang === 'en' ? 'he' : currentLang === 'he' ? 'th' : 'en';
  document.documentElement.lang = newLang;
  switchLanguage(newLang);
});


// Run the language detection on page load
document.addEventListener('DOMContentLoaded', detectBrowserLanguage);