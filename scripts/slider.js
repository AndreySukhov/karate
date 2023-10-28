import Glide from '@glidejs/glide';

const setTrackWidth = (el, currentIndex, total) => {
    el.style.width = `${(currentIndex/total) * 100}%`
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

limitsTotal.innerHTML = totalNoLimitsSlides
limitsCurrent.innerHTML = 1;

conditionsTotal.innerHTML = conditionsSlides;
conditionsCurrent.innerHTML = 1;

agencyTotal.innerHTML = agencySlides;
agencyCurrent.innerHTML = 1;

setTrackWidth(limitsTrack, 1, totalNoLimitsSlides)
setTrackWidth(conditionsTrack, 1, conditionsSlides)
setTrackWidth(agencyTrack, 1, agencySlides)

limitsSlider.on(['mount.after', 'run'], () => {
    const currentIndex = limitsSlider.index + 1;
    limitsCurrent.innerHTML = currentIndex;
    setTrackWidth(limitsTrack, currentIndex, totalNoLimitsSlides)
})

conditionsSlider.on(['mount.after', 'run'], () => {
    const currentIndex = conditionsSlider.index + 1;
    conditionsCurrent.innerHTML = currentIndex;
    setTrackWidth(conditionsTrack, currentIndex, conditionsSlides)
})

agencySlider.on(['mount.after', 'run'], () => {
    const currentIndex = agencySlider.index + 1;
    agencyCurrent.innerHTML = currentIndex;
    setTrackWidth(agencyTrack, currentIndex, agencySlides)
})
