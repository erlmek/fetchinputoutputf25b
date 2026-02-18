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

function addATag() {

    if (findes) return;


    const el = document.createElement("a");
    //const val = ddKommune.value;
    //el.textContent = val;
    //el.href = "kommune.html";
    const kom = ddKommune.options[ddKommune.selectedIndex].kommune;
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
