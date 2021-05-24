const linkToHover = document.querySelector('.logo-link');
const toggleLogo = document.querySelector('.toggle-logo');

linkToHover.addEventListener('mouseover', () => {
    toggleLogo.src = '/images/logo-rod.svg';
})
linkToHover.addEventListener('mouseout', () => {
    toggleLogo.src = '/images/logo-vanlig.svg';
})

const getOption = (selectElementId) => {
    const selectElement = document.querySelector('#' + selectElementId);
    return selectElement.options[selectElement.selectedIndex].value;
}
const finnProsent = (deltall, heltall) => {
    return ((deltall + 1) * (100/heltall)).toFixed(2) + "%";
}
