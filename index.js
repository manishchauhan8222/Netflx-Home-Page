
document.addEventListener('DOMContentLoaded', function () {


    const hiddenLanguage = document.querySelector('.hidden-language');
    const languageBtn = document.querySelector('.language-btn');
    const footerLanguageBtn = document.querySelector('.footer-language-btn');
    const netflixIndia = document.querySelector('.netflix-india');
    const footerHiddenLanguage = document.querySelector('.footer-hidden-language')

    const englishLanguage = document.querySelector('.english');
    const hindiLanguage = document.querySelector('.hindi');
    const footerEnglishLanguage = document.querySelector('.footer-hidden-language .english');
    const footerHindiLanguage = document.querySelector('.footer-hidden-language .hindi');


    const signInInputs = document.querySelectorAll('.home-page-signIn');
    const signInBtns = document.querySelectorAll('.home-page-signIn-btn');
    
    // js for sign-in-email
    function validEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    signInInputs.forEach((input) => {
        input.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                const email = input.value;
                const validEmailWarning = input.parentElement.querySelector('.valid-email-warning');
                
                if (validEmail(email)) {
                    input.value = '';
                    window.location.href = 'signIn-page.html';
                } else {
                    validEmailWarning.style.display = 'block';
                }
            }
        });
    
        input.addEventListener('input', function () {
            const validEmailWarning = input.parentElement.querySelector('.valid-email-warning');
            validEmailWarning.style.display = 'none';
        });
    });
    
    signInBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const input = btn.parentElement.querySelector('.home-page-signIn');
            const email = input.value;
            const validEmailWarning = input.parentElement.querySelector('.valid-email-warning');
            
            if (validEmail(email)) {
                input.value = '';
                window.location.href = 'signIn-page.html';
            } else {
                validEmailWarning.style.display = 'block';
            }
        });
    });
    


    // js for language
    languageBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (hiddenLanguage.style.display === 'none' || hiddenLanguage.style.display === '') {
            hiddenLanguage.style.display = 'block';

        } else {
            hiddenLanguage.style.display = 'none';

        }
    });

    hindiLanguage.addEventListener('click', function (event) {
        event.preventDefault();
        hiddenLanguage.style.display = 'none';
    });
    englishLanguage.addEventListener('click', function (event) {
        event.preventDefault();
        hiddenLanguage.style.display = 'none';
    });
    hindiLanguage.addEventListener('mouseover', function (event) {
        event.preventDefault();
        englishLanguage.style.backgroundColor = 'transparent';
    });

    englishLanguage.addEventListener('mouseover', function (event) {
        event.preventDefault();
        englishLanguage.style.backgroundColor = '';
    });


    // js for footer (language)
    footerLanguageBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (footerHiddenLanguage.style.display === 'none' || footerHiddenLanguage.style.display === '') {
            footerHiddenLanguage.style.display = 'block';
            netflixIndia.style.display = 'none';
        } else {
            footerHiddenLanguage.style.display = 'none';
            netflixIndia.style.display = 'block';
        }
    });
    footerHindiLanguage.addEventListener('click', function (event) {
        event.preventDefault();
        footerHiddenLanguage.style.display = 'none';
    });
    footerEnglishLanguage.addEventListener('click', function (event) {
        event.preventDefault();
        footerHiddenLanguage.style.display = 'none';
    });
    footerHindiLanguage.addEventListener('mouseover', function (event) {
        event.preventDefault();
        footerEnglishLanguage.style.backgroundColor = 'transparent';
    });

    footerEnglishLanguage.addEventListener('mouseover', function (event) {
        event.preventDefault();
        footerEnglishLanguage.style.backgroundColor = '';
    });

    // js for questions
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const items = question.querySelector('.items');
        const itemsHidden = question.querySelector('.items-hidden');
        const itemsPlus = question.querySelector('.items-p');

        items.addEventListener('click', function () {
            setTimeout(function () {
                if (itemsHidden.style.display === 'none' || itemsHidden.style.display === '') {
                    itemsHidden.style.display = 'block';
                    itemsPlus.textContent = 'X';
                    itemsPlus.style.fontWeight = 'lighter';
                    itemsPlus.style.fontSize = '23px';

                } else {
                    itemsHidden.style.display = 'none';
                    itemsPlus.textContent = '+';
                    itemsPlus.style.fontWeight = '700';
                    itemsPlus.style.fontSize = '2rem';
                }
            }, 100);

        });
    })
});

