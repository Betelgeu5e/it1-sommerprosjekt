const KARAKTER_KONTEINER = document.querySelector("#karakterkonteiner")

const lagKarakterMiniElement = (id, karakter) => {
    KARAKTER_KONTEINER.innerHTML += `
    <a class="karakter celle" href="karakter.html?${karakter.hverdagsnavn}&id=${id}">
        <img id="${id}" class="karakter-bilde celle-bilde" src="/images/karakterer/${karakter.bilde}" alt="${"Bilde av " + karakter.hverdagsnavn}">
        <h1 class="navn celle-tekst">${karakter.hverdagsnavn}</h1>
    </a>
    `;
    if(karakter.sentrerBilde) {
        const bilde = document.querySelector('#' + id);
        bilde.classList.add('sentrert-celle-bilde')
    }
}
hentHeleKolleksjonen('Karakterer', lagKarakterMiniElement);

const bareLedereKnapp = document.querySelector('#bare-ledere-knapp');
let erBareLedereKnappTrykket = false;
bareLedereKnapp.addEventListener('click', () => {
    KARAKTER_KONTEINER.textContent = "";
    if(erBareLedereKnappTrykket) {
        hentHeleKolleksjonen('Karakterer', lagKarakterMiniElement);
        erBareLedereKnappTrykket = false;
        bareLedereKnapp.classList.remove('knapp-trykket');
    } else {
        hentHeleKolleksjonen('Karakterer', lagKarakterMiniElement, 'erLeder', '==', true);
        erBareLedereKnappTrykket = true;
        bareLedereKnapp.classList.add('knapp-trykket');
    }
})
const selectElementer = document.querySelectorAll('select');
selectElementer.forEach(selectElement => {
    selectElement.addEventListener('change', () => {
        KARAKTER_KONTEINER.textContent = "";
        if (erBareLedereKnappTrykket) {
            hentHeleKolleksjonen('Karakterer', lagKarakterMiniElement, 'erLeder', '==', true);
        } else {
            hentHeleKolleksjonen('Karakterer', lagKarakterMiniElement);
        }
    });
})
