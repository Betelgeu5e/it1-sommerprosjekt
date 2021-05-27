const KARAKTER_KONTEINER = document.querySelector("#karakterkonteiner")
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

KARAKTER_KONTEINER.scrollIntoView(true);

const lagKarakterElement = async (karakter) => {
    document.title = `Karakter | ${karakter.hverdagsnavn}`;
    if(karakter.fodselsAr === null) {
        karakter.fodselsAr = "Ukjent";
    }
    KARAKTER_KONTEINER.innerHTML = `
        <div class="overskriftkonteiner">
            <h1 class="hovedoverskrift">${karakter.hverdagsnavn}</h1>
            <h2 class="underoverskrift">${karakter.fornavn} ${karakter.etternavn}</h2>
        </div>
        <div class="innhold">
            <div>
                <img class="bilde" src="../../images/karakterer/${karakter.bilde}" alt="${"Bilde av " + karakter.hverdagsnavn}">
            </div>
            <div class="tekst">
                <p class="beskrivelse">${karakter.beskrivelse}</p>
                <div class="info">
                    <h3 class="hovedoverskrift">Info</h3>
                    <p class="avsnitt">Født: ${karakter.fodselsAr}</p>    
                    <p class="avsnitt">Karriere: ${karakter.karriere}</p>
                    <p class="karakter-lokasjon avsnitt"></p>
                    <p class="karakter-skapning avsnitt"></p>
                    <p class="karakter-bok avsnitt"></p>
                    <a class="finn-ut-mer avsnitt" href="${karakter.lesMer}" target="_blank">Finn ut mer!</a>
                </div>
            </div>
        </div>
    `;
    const karakterLokasjon = document.querySelector(".karakter-lokasjon");
    const karakterSkapning = document.querySelector(".karakter-skapning");
    const karakterBok = document.querySelector(".karakter-bok")
    if(karakter.Lokasjon) {
        const lokasjonsSvar = await karakter.Lokasjon.get();
        const lokasjonsID = lokasjonsSvar.id;
        const lokasjonsData = lokasjonsSvar.data();
        karakterLokasjon.innerHTML = `
            Fra: <a href="/html/lokasjoner/lokasjon.html?id=${lokasjonsID}">${lokasjonsData.navn}</a>
        `;
    };
    if(karakter.Skapning) {
        const skapningsSvar = await karakter.Skapning.get();
        const skapningsID = skapningsSvar.id;
        const skapningsData = skapningsSvar.data();
        karakterSkapning.innerHTML = `
            Skapning: <a href="/html/skapninger/skapning.html?id=${skapningsID}">${skapningsData.navn}</a>
        `;
    };
    if(karakter.BokForste) {
        const bokSvar = await karakter.BokForste.get();
        const bokData = bokSvar.data();
        karakterBok.textContent = `
            Møtt første gang: ${bokData.engNavn}
        `;
    };
}
hentDokument('Karakterer', id, lagKarakterElement);