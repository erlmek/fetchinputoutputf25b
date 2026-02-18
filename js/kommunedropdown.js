console.log("Jeg er i kommunedropdown.js")
const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchAnyUrl(any) {
    return fetch(any).then(response => response.json());
}

function fillDropDown(kom) {
    const el = document.createElement("option");
    el.textContent = kom.navn
    el.value = kom.kode
    el.kommune = kom
    ddKommune.appendChild(el);
}

const kommuneMap = new Map(); //er min lokale kommune database. key er pk som er kommune.kode

function findes(komKode) {
    const bFindes = kommuneMap.has(komKode)
    return bFindes
}

function addATag() {
    const komKode = ddKommune.value;
    const kom = ddKommune.options[ddKommune.selectedIndex].kommune;
    if (kom.findes) return;

    //if (findes()) return;
    //kommuneMap.set(ddKommune.value, ddKommune.options[ddKommune.selectedIndex].kommune)
    const el = document.createElement("a");
    //const val = ddKommune.value;
    //el.textContent = val;
    //el.href = "kommune.html";
    kom.findes = true;
    el.textContent = kom.navn
    el.href = kom.href
    divKommune.appendChild(el);
    const br = document.createElement("br");
    divKommune.appendChild(br);
}

async function actionFetch() {
    const kommuner = await fetchAnyUrl(urlKommune);
    console.log(kommuner)
    ddKommune.innerHTML = "";
    //kommuner.sort((a,b) => a.navn.localeCompare(b.navn))
    kommuner.sort((a,b) => a.navn > b.navn ? 1 : -1)
    kommuner.forEach(kom => fillDropDown(kom))
}


const divKommune = document.getElementById("divKommuner");
const ddKommune = document.getElementById("ddKommuner");
const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)
ddKommune.addEventListener('change', addATag)
