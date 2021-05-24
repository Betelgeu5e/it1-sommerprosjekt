const SKAPNING_KONTEINER = document.querySelector("#skapningkonteiner")
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

SKAPNING_KONTEINER.scrollIntoView(true);

const lagSkapningElement = async (skapning) => {
    document.title = `Skapninger | ${skapning.navn}`;
    SKAPNING_KONTEINER.innerHTML = `
        <div class="overskriftkonteiner">
            <h1 class="overskrift hovedoverskrift">${skapning.navn}</h1>
        </div>
        <div class="innhold">
            <div>
                <img class="bilde" src="../../images/monstre/${skapning.bilde}" alt="${"Bilde av " + skapning.navn}">
            </div>
            <div class="tekst">
                <p class="beskrivelse">${skapning.beskrivelse}</p>
                <div class="info">
                    <h3 class="hovedoverskrift">Info</h3>
                    <p class="avsnitt">Orden: ${skapning.orden}</p>
                    <p class="avsnitt">Intelligens: ${finnProsent(skapning.intelligens, 5)}</p>    
                    <p class="avsnitt">Fientlighet: ${finnProsent(skapning.fientlighet, 5)}</p>
                    <p id="forsteForekomst" class="avsnitt">Første forekomst: </p>
                    <a class="finn-ut-mer avsnitt" href="${skapning.lesMer}" target="_blank">Finn ut mer!</a>
                </div>
            </div>
        </div>
    `;
    const skapningBokElement = document.querySelector("#forsteForekomst");
    const skapningBok = skapning.forsteForekomst;
    const svar = await skapningBok.get();
    const skapningBokData = svar.data();
    skapningBokElement.textContent += `${skapningBokData.engNavn}
    `;
}
hentDokument('Skapninger', id, lagSkapningElement);

