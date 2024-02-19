

const form = document.querySelector('.newsletter-form');
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.addEventListener('load', function() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        languageSelect.value = selectedLanguage;
        translatePage(selectedLanguage);
    }
});


const languageSelect = document.getElementById('languageSelect');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    console.log('Selected language:', selectedLanguage); 
    localStorage.setItem('selectedLanguage', selectedLanguage);
    translatePage(selectedLanguage);
});

function translatePage(language) {
    if (language === 'en') {
        document.querySelector('h2').innerText = 'Welcome to EasyTools';
        document.querySelector('#firstText1').innerText = 'At EasyTools, we provide a collection of handy calculators and converters to simplify your daily tasks. '
        document.querySelector('#firstText2').innerText = "Whether you need to calculate interest rates, percentages, or convert units, we've got you covered."
        document.querySelector('#firstText3').innerText = 'Our user-friendly tools are designed to make your life easier. Explore our categories:'
        document.querySelector('#calculatorsDescription').innerText = 'Quick and accurate calculations for various scenarios.'
        document.querySelector('#convertersDescription').innerText = 'Effortlessly convert between different units and currencies.'
        
        document.querySelector('#firstText5').innerText = "If you have any questions or feedback, feel free to contact us. We're here to assist you."
        document.querySelector('#getStartedButton').innerText = 'Get Started'
        document.querySelector('#exploreOurApps').innerText = 'Explore Our Handy Apps'
        

        document.querySelector('#noteApp').innerHTML = '<strong>Note App: </strong><a id="1appDescrition1">Take notes, create to-do lists, and stay organized with our Note App.</a>'
        document.querySelector('#weatherApp').innerHTML = '<strong>Weather App:  </strong><a id="1appDescrition2"> Stay up-to-date with the latest weather conditions and forecasts in your area.</a>'
        document.querySelector('#languageApp').innerHTML = '<strong>Language Translator:  </strong><a id="1appDescrition3"> Translate text between different languages effortlessly with our Language Translator.</a>'
        document.querySelector('#clockApp').innerHTML = '<strong>Clock App: </strong><a id="1appDescrition4">Stay punctual with our Clock App. Easily check the time with our simple and intuitive interface.</a>'
        document.querySelector('#imageApp').innerHTML = '<strong>Image Searcher:  </strong><a id="1appDescrition5">Explore visuals effortlessly with our Image Searcher. Find diverse images based on your queries.</a>'
        document.querySelector('#musicApp').innerHTML = "<strong>Music Player:  </strong><a id='1appDescrition6'>Explore your favorite tunes effortlessly with our Music Player. Featuring a user-friendly interface, dive into your music collection with ease.</a>"


        document.querySelector('#convertersHeader').innerText = 'Converters'
        document.querySelector('#converter1').innerHTML = '<strong>Temperature Converter:</strong> Convert temperatures between Celsius, Fahrenheit, and Kelvin with ease.'
        document.querySelector('#converter2').innerHTML = '<strong>Currency Converter:</strong> Instantly convert currencies for travel or business needs.'
        document.querySelector('#converter3').innerHTML = '<strong>Weight Converter:</strong> Quickly switch between pounds and kilograms.'

        document.querySelector('#calculatorsHeader').innerText = 'Calculators'
        document.querySelector('#calculator1').innerHTML = '<strong>Calculator:</strong> Quickly add, subtract, multiply, and divide numbers with precision.';
        document.querySelector('#calculator2').innerHTML = '<strong>Percentage Calculator:</strong> Easily determine percentages, discounts, and markups for your financial needs.';
        document.querySelector('#calculator3').innerHTML = '<strong>Interest Rate Calculator:</strong> Interest Rate Calculator: Accurately calculate interest rates, payments, and savings to facilitate financial planning.';

        document.querySelector('#newsLetter1').innerText = 'Subscribe to Our Newsletter'
        document.querySelector('#newsLetter2').innerText = 'Stay updated with the latest news and updates from our website.'
        document.querySelector('#newsLetter3').setAttribute('placeholder', 'Your Email');
        document.querySelector('#newsLetter4').innerText = 'Subscribe'

        document.querySelector('#question1').innerText = 'How do I use the Weather App?'
        document.querySelector('#answer1').innerText = 'Enter location, view current weather and forecast. Stay informed effortlessly!'

        document.querySelector('#question2').innerText = 'Can I save my notes on the website?'
        document.querySelector('#answer2').innerText = 'Yes, use local storage for convenient note-saving. Note that saved data is device and browser-specific. Check settings for details.'

        document.querySelector('#question3').innerText = 'Is my personal information secure on EasyTools?'
        document.querySelector('#answer3').innerText = 'Absolutely! We take user privacy seriously. All personal information is encrypted and securely stored.'

        document.querySelector('#question4').innerText = 'How often are the currency exchange rates updated in the Currency Converter?'
        document.querySelector('#answer4').innerText = 'Our currency exchange rates are updated in real-time, ensuring accuracy for your conversions.'

      
    } else if (language === 'bg') {
        document.querySelector('h2').innerText = 'Добре дошли в EasyTools';
        document.querySelector('#firstText1').innerText = 'В EasyTools предоставяме набор от удобни калкулатори и конвертори, които да опростят вашите ежедневни задачи.'
        document.querySelector('#firstText2').innerText = 'Без значение дали ви трябва да пресмятате лихвени проценти, проценти или конвертирате единици, ние сме тук, за да ви помогнем.'
        document.querySelector('#firstText3').innerText = 'Нашите лесни за използване инструменти са проектирани да направят живота ви по-лесен. Разгледайте нашите категории:'
        document.querySelector('#calculatorsDescription').innerText = 'Калкулатори: Бързи и точни пресмятания за различни сценарии.'
        document.querySelector('#convertersDescription').innerText = 'Конвертори: Лесно преобразуване между различни единици и валути.'
        
        document.querySelector('#firstText5').innerText = 'Ако имате въпроси или обратна връзка, не се притеснявайте да се свържете с нас. Ние сме тук, за да ви помогнем.'
        document.querySelector('#getStartedButton').innerText = 'Започни'
        document.querySelector('#exploreOurApps').innerText = 'Разгледайте нашите полезни приложения'
        
        

        document.querySelector('#noteApp').innerHTML = '<strong>Бележник: </strong><a id="1appDescrition1">Записвайте бележки, създавайте списъци със задачи и останете организирани с нашето приложение за бележки.</a>'
        document.querySelector('#weatherApp').innerHTML = '<strong>Приложение за времето: </strong><a id="1appDescrition1">Бъдете в крак с последните метеорологични условия и прогнози във вашата област.</a>'
        document.querySelector('#languageApp').innerHTML = '<strong>Преводач: </strong><a id="1appDescrition1">Превеждайте текст между различни езици без усилие с нашия преводач на езици.</a>'
        document.querySelector('#clockApp').innerHTML = '<strong>Часовник: </strong><a id="1appDescrition1">Останете пунктуални с нашият часовник. Лесно проверете времето с нашия прост и интуитивен интерфейс.</a>'
        document.querySelector('#imageApp').innerHTML = '<strong>Търсачка на изображения: </strong><a id="1appDescrition1">Разглеждайте визуални изображения без усилие с нашата търсачка на изображения. Намерете разнообразни изображения въз основа на вашите заявки.</a>'
        document.querySelector('#musicApp').innerHTML = '<strong>Плейър за музика: </strong><a id="1appDescrition1">Разглеждайте любимите си мелодии лесно с нашия музикален плейър. С представения потребителски интерфейс експериментирайте в своята музикална колекция с лекота.</a>'
       
        document.querySelector('#convertersHeader').innerText = 'Конвертори:'
        document.querySelector('#converter1').innerHTML = '<strong> Конвертор за температури:</strong> Конвертор за температури: Лесно преобразявайте температури между Целзий, Фаренхайт и Келвин.'
        document.querySelector('#converter2').innerHTML = '<strong>Конвертор за валути:</strong> Мигновено преобразявайте валути за пътуване или бизнес нужди.'
        document.querySelector('#converter3').innerHTML = '<strong>Конвертор за тегло: </strong> Бързо превключвайте между либри и килограми.'
        
        document.querySelector('#calculatorsHeader').innerText = 'Калкулатори'
        document.querySelector('#calculator1').innerHTML = '<strong>Калкулатор:</strong> Бързо събирайте, изваждайте, умножавайте и делете числа с прецизност.';
        document.querySelector('#calculator2').innerHTML = '<strong>Процентен калкулатор:</strong> Лесно определете проценти, отстъпки и наценки за вашите финансови нужди.';
        document.querySelector('#calculator3').innerHTML = '<strong>Калкулатор за лихви:</strong> Пресмятайте лихвени проценти, плащания и спестявания с точност за финансово планиране.';

        document.querySelector('#newsLetter1').innerText = 'Абонирайте се за нашия бюлетин';
        document.querySelector('#newsLetter2').innerText = 'Бъдете информирани с най-новите новини и актуализации от нашия уебсайт.';
        document.querySelector('#newsLetter3').setAttribute('placeholder', 'Въведете вашия имейл');
        document.querySelector('#newsLetter4').innerText = 'Абонирайте се';

        document.querySelector('#question1').innerText = 'Как да използвам приложението за време?';
document.querySelector('#answer1').innerText = 'Въведете местоположение, вижте текущото време и прогнозата. Бъдете информирани без усилие!';

document.querySelector('#question2').innerText = 'Мога ли да запазя бележките си на уебсайта?';
document.querySelector('#answer2').innerText = 'Да, използва се локално съхранение за удобно запазване на бележки. Забележете, че запазените данни са специфични за устройството и браузъра. Проверете настройките за подробности.';

document.querySelector('#question3').innerText = 'Личната ми информация защитена ли е в EasyTools?';
document.querySelector('#answer3').innerText = 'Абсолютно! Вземаме на сериозно поверителността на потребителите. Цялата ви лична информация е кодирана и сигурно съхранявана.';

document.querySelector('#question4').innerText = 'Колко често се актуализират валутите в Конвертора на валута?';
document.querySelector('#answer4').innerText = 'Нашите валути се актуализират в реално време, гарантирайки точност за вашите преобразувания.';



        


    } else {
        console.log('Unknown language:', language); 
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.getElementById('newsletterinput').value = '';
})
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-item .answer');
    const allButtons = document.querySelectorAll('.faq-item .reveal-button');


    allAnswers.forEach((ans) => {
        if (ans !== answer) {
            ans.classList.add('hidden');
        }
    });
    allButtons.forEach((btn) => {
        if (btn !== button) {
            btn.innerText = '→';
        }
    });

    answer.classList.toggle('hidden');
    button.innerText = answer.classList.contains('hidden') ? '→' : '↓';
}




document.querySelector("#contactUs").addEventListener("click", function() {
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#aboutUsButton").addEventListener("click", function() {
    document.querySelector(".faq").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#newsletterButton").addEventListener("click", function() {
    document.querySelector(".newsletter-section").scrollIntoView({ behavior: "smooth" });
    console.log('da')
});
document.querySelector('.button').addEventListener('click', ()=>{
    document.querySelector(".hero-section").scrollIntoView({ behavior: "smooth" });
})
document.querySelector(".homeButton").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".logo").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});








