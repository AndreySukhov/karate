import Glide from '@glidejs/glide';

const quoteButtons =  document.querySelectorAll('.js-quote-preview');

const setTrackWidth = (el, currentIndex, total) => {
    setTimeout(() => {
        el.style.width = `${(currentIndex/total) * 100}%`
    }, 400)
}



const limitsSlider = new Glide('.js-no-limits-slider').mount();
const conditionsSlider = new Glide('.js-conditions-slider').mount();
const agencySlider = new Glide('.js-agency-slider').mount();


const limitsTotal = document.querySelector('.js-no-limits-slider-total')
const totalNoLimitsSlides = document.querySelector('.js-no-limits-slides').children.length
const limitsCurrent = document.querySelector('.js-no-limits-slider-current');
const limitsTrack = document.querySelector('.js-no-limits-slider-track');

const conditionsTotal = document.querySelector('.js-conditions-slider-total')
const conditionsSlides = document.querySelector('.js-conditions-slides').children.length
const conditionsCurrent = document.querySelector('.js-conditions-slider-current');
const conditionsTrack = document.querySelector('.js-conditions-slider-track');

const agencyTotal = document.querySelector('.js-agency-slider-total')
const agencySlides = document.querySelector('.js-agency-slides').children.length
const agencyCurrent = document.querySelector('.js-agency-slider-current');
const agencyTrack = document.querySelector('.js-agency-slider-track');
const formatSlidesNum = (num) => {
    if (num < 10) {
        return `0${num}`
    }
    return num
}


limitsTotal.innerHTML =  formatSlidesNum(totalNoLimitsSlides);
limitsCurrent.innerHTML = formatSlidesNum(1);

conditionsTotal.innerHTML = formatSlidesNum(conditionsSlides);
conditionsCurrent.innerHTML = formatSlidesNum(1);

agencyTotal.innerHTML = formatSlidesNum(agencySlides);
agencyCurrent.innerHTML = formatSlidesNum(1);

setTrackWidth(limitsTrack, 1, totalNoLimitsSlides)
setTrackWidth(conditionsTrack, 1, conditionsSlides)
setTrackWidth(agencyTrack, 1, agencySlides)

limitsSlider.on(['mount.after', 'run'], () => {
    const currentIndex = limitsSlider.index + 1;
    limitsCurrent.innerHTML = formatSlidesNum(currentIndex);
    setTrackWidth(limitsTrack, currentIndex, totalNoLimitsSlides)
})

conditionsSlider.on(['mount.after', 'run'], () => {
    const currentIndex = conditionsSlider.index + 1;
    conditionsCurrent.innerHTML = formatSlidesNum(currentIndex);
    setTrackWidth(conditionsTrack, currentIndex, conditionsSlides)
})

const quoteMobile = document.querySelector('.js-quote');
const quoteMobileAvatar = quoteMobile.querySelector('.js-quote-avatar')
const quoteMobileText = quoteMobile.querySelector('.js-quote-text');
const quoteMobileDescription = quoteMobile.querySelector('.js-quote-description');

agencySlider.on(['mount.after', 'run'], () => {
    const currentIndex = agencySlider.index + 1;
    agencyCurrent.innerHTML = formatSlidesNum(currentIndex);
    setTrackWidth(agencyTrack, currentIndex, agencySlides)

    if (quoteMobile.classList.contains('active')) {
        quoteMobileAvatar.src = '';

        quoteMobileText.innerText = '';
        quoteMobileDescription.innerText = '';
        quoteMobile.classList.remove('active');
        quoteButtons.forEach((btn) => {
            btn.style.display = 'block';
        });
    }
})

document.querySelectorAll('.js-quote-preview-img').forEach((img) => {
    img.addEventListener('click', (e) => {
        agencySlider.go('>')
    })
})

document.querySelectorAll('.js-conditions-slide__image').forEach((img) => {
    img.addEventListener('click', (e) => {
        conditionsSlider.go('>')
    })
})

document.querySelectorAll('.js-no-limits-img').forEach((img) => {
    img.addEventListener('click', (e) => {
        limitsSlider.go('>')
    })
})
