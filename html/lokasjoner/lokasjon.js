const LOKASJON_KONTEINER = document.querySelector("#lokasjonkonteiner")
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

LOKASJON_KONTEINER.scrollIntoView(true);

const lagLokasjonElement = async (lokasjon) => {
    document.title = `Lokasjon | ${lokasjon.navn}`;
    LOKASJON_KONTEINER.innerHTML = `
        <div class="overskriftkonteiner">
            <h1 class="overskrift hovedoverskrift">${lokasjon.navn}</h1>
        </div>
        <div id="flagg-bakgrunn" class="innhold">
            <div id="vapenskjoldkonteiner">
                <img class="bilde" src="../../images/lokasjoner/vapenskjold/${lokasjon.vapenskjold}" alt="${"Våpenskjoldet til " + lokasjon.navn}">
            </div>
            <div class="tekst">
                <p class="beskrivelse">${lokasjon.beskrivelse}</p>
                <div class="info">
                    <h3 class="hovedoverskrift">Info</h3>
                    <p class="avsnitt">Språk: ${lokasjon.sprak}</p>    
                    <p class="avsnitt">Status: ${lokasjon.status}</p>
                    <div class="karakter-lokasjon"></div>
                    <h4 id="lokasjon-hovedstader-overskrift" class="underoverskrift">Hovedsteder:</h4>
                    <ul id="lokasjon-hovedstader" class="liste"></ul>
                    <h4 id="lokasjon-religioner-overskrift" class="underoverskrift"></h4>
                    <ul id="lokasjon-religioner" class="liste"></ul>
                    <a class="finn-ut-mer avsnitt" href="${lokasjon.lesMer}" target="_blank">Finn ut mer!</a>
                </div>
            </div>
        </div>

    `;
    const hovedstadOverskrift = document.querySelector('#lokasjon-hovedstader-overskrift');
    const hovedstadKonteiner = document.querySelector('#lokasjon-hovedstader');
    const religionOverskrift = document.querySelector('#lokasjon-religioner-overskrift');
    const religionKonteiner = document.querySelector('#lokasjon-religioner');
    if (lokasjon.hovedstad.length <= 1) {
        hovedstadOverskrift.textContent = "Hovedstad:";
    }
    if (lokasjon.hovedstad.length === 0) {
        hovedstadKonteiner.innerHTML+= `
        <li>Ukjent</li>`;
    }
    lokasjon.hovedstad.forEach(hovedstad => {
        hovedstadKonteiner.innerHTML+= `
            <li>${hovedstad}</li>`;
    });
    if(lokasjon.religion.length === 1) {
        religionOverskrift.textContent = "Religion:";
    } else if(lokasjon.religion.length > 1) {
        religionOverskrift.textContent = "Religioner:";
    }
    lokasjon.religion.forEach(religion => {
        religionKonteiner.innerHTML+= `
            <li>${religion}</li>`;
    });
    const medFlaggBakgrunn = document.querySelector('#flagg-bakgrunn');
    medFlaggBakgrunn.style.backgroundImage = `url(/images/lokasjoner/flagg/${lokasjon.flagg})`;

    if(lokasjon.vapenskjold === null) {
        const vapenskjoldkonteiner = document.querySelector('#vapenskjoldkonteiner');
        vapenskjoldkonteiner.textContent = lokasjon.navn + " har ikke noe flagg eller våpenskjold.";
    }
}
hentDokument('Lokasjoner', id, lagLokasjonElement);