const quoteButtons =  document.querySelectorAll('.js-quote-preview');

const quoteMobile = document.querySelector('.js-quote');
const quoteMobileAvatar = quoteMobile.querySelector('.js-quote-avatar')
const quoteMobileText = quoteMobile.querySelector('.js-quote-text');
const quoteMobileDescription = quoteMobile.querySelector('.js-quote-description');


quoteButtons.forEach((quoteBtn) => {
    quoteBtn.addEventListener('click',(e) => {

        const container = e.currentTarget.closest('.js-agency-slide');
        const avatarImg = container.querySelector('.js-quote-author-img').src

        const quoteText = container.querySelector('.js-quote-text').innerText
        const quoteAuthorDescription = container.querySelector('.js-quote-description').innerText

        quoteMobileAvatar.src = avatarImg;

        quoteMobileText.innerText = quoteText;
        quoteMobileDescription.innerText = quoteAuthorDescription;

        quoteMobile.classList.toggle('active');

        quoteButtons.forEach((btn) => {
            btn.style.display = 'none';
        });
    })
})

quoteMobile.querySelector('.js-quote-close-avatar')
    .addEventListener('click', () => {
        quoteMobileAvatar.src = '';

        quoteMobileText.innerText = '';
        quoteMobileDescription.innerText = '';
        quoteMobile.classList.toggle('active');

        quoteButtons.forEach((btn) => {
            btn.style.display = 'block';
        });
    })
