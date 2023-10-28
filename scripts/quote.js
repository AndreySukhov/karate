const quoteButtons =  document.querySelectorAll('.js-quote-preview');

const quoteMobile = document.querySelector('.js-quote');
const quoteMobileAvatar = quoteMobile.querySelector('.js-quote-avatar')
const quoteMobileCloseAvatar = quoteMobile.querySelector('.js-quote-close-avatar')
const quoteMobileText = quoteMobile.querySelector('.js-quote-text');
const quoteMobileDescription = quoteMobile.querySelector('.js-quote-description');


quoteButtons.forEach((quoteBtn) => {
    quoteBtn.addEventListener('click',(e) => {

        document.querySelector('body').classList.toggle('fixed');
        document.querySelector('html').classList.toggle('fixed');

        const container = e.currentTarget.closest('.js-agency-slide');
        const previewImg = container.querySelector('.js-quote-preview-img').src
        const avatarImg = container.querySelector('.js-quote-author-img').src

        const quoteText = container.querySelector('.js-quote-text').innerText
        const quoteAuthorDescription = container.querySelector('.js-quote-description').innerText

        quoteMobileAvatar.src = avatarImg;
        quoteMobileCloseAvatar.src = previewImg;

        quoteMobileText.innerText = quoteText;
        quoteMobileDescription.innerText = quoteAuthorDescription;


        quoteMobile.classList.toggle('active');
    })
})

quoteMobile.querySelector('.js-quote-close-avatar')
    .addEventListener('click', () => {
        quoteMobileAvatar.src = '';
        quoteMobileCloseAvatar.src = '';

        quoteMobileText.innerText = '';
        quoteMobileDescription.innerText = '';
        document.querySelector('body').classList.toggle('fixed');
        document.querySelector('html').classList.toggle('fixed');
        quoteMobile.classList.toggle('active');
    })
