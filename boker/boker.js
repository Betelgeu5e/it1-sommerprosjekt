const BOKER_KONTEINER = document.querySelector("#bokerkonteiner")

const lagBokMiniElement = (id, bok) => {
    BOKER_KONTEINER.innerHTML += `
    <div class="bok">
        <div class="bilde-konteiner">
            <img class="omslag" src="../../images/boker/${bok.omslag}" alt="${"Bilde av " + bok.engNavn}">
        </div>
        <div class="tekst-konteiner">
            <p class="avsnitt"><b>På norsk: </b><span class="verdi">${bok.navn}</span></p>
            <p class="avsnitt"><b>På engelsk: </b><span class="verdi">${bok.engNavn}</span></p>
            <p class="avsnitt"><b>Utgitt(eng) i </b><span class="verdi">${bok.utgivelsesar}</span></p>
        </div>
    </div>
    `;
}
hentHeleKolleksjonen('Boker', lagBokMiniElement);

const selectElementer = document.querySelectorAll('select');
selectElementer.forEach(selectElement => {
    selectElement.addEventListener('change', () => {
        BOKER_KONTEINER.textContent = "";
        hentHeleKolleksjonen('Boker', lagBokMiniElement);
    });
});
