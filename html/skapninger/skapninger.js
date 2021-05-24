const SKAPNINGER_KONTEINER = document.querySelector("#skapningerkonteiner");

const lagSkapningMiniElement = (id, skapning) => {
    SKAPNINGER_KONTEINER.innerHTML += `
    <a class="monster celle" href="skapning.html?&id=${id}">
        <img id="${id}" class="monster-bilde celle-bilde" src="/images/monstre/${skapning.bilde}" alt="${"Bilde av " + skapning.navn}">
        <h1 class="navn celle-tekst">${skapning.navn}</h1>
    </a>
    `;
    if(skapning.sentrerBilde) {
        const bilde = document.querySelector('#' + id);
        bilde.classList.add('sentrert-celle-bilde')
    }
}
hentHeleKolleksjonen('Skapninger', lagSkapningMiniElement);

const bareHomoKnapp = document.querySelector('#bare-homo-knapp');
let erBareHomoKnappTrykket = false;
bareHomoKnapp.addEventListener('click', () => {
    SKAPNINGER_KONTEINER.textContent = "";
    if(erBareHomoKnappTrykket) {
        hentHeleKolleksjonen('Skapninger', lagSkapningMiniElement);
        erBareHomoKnappTrykket = false;
        bareHomoKnapp.classList.remove('knapp-trykket');
    } else {
        hentHeleKolleksjonen('Skapninger', lagSkapningMiniElement, 'orden', '==', 'Humanoider');
        erBareHomoKnappTrykket = true;
        bareHomoKnapp.classList.add('knapp-trykket');
    }
})
const selectElementer = document.querySelectorAll('select');
selectElementer.forEach(selectElement => {
    selectElement.addEventListener('change', () => {
        SKAPNINGER_KONTEINER.textContent = "";
        if (erBareHomoKnappTrykket) {
            hentHeleKolleksjonen('Skapninger', lagSkapningMiniElement, 'orden', '==', 'Humanoider');
        } else {
            hentHeleKolleksjonen('Skapninger', lagSkapningMiniElement);
        }
    });
});