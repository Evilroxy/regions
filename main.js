const regionsHTML = document.querySelector("#Regions");
const departementsHTMl = document.querySelector("#departements");
const regions = {
  ara: ["01", "03", "07", "15", "26", "38", "42", "43", "63", "69", "73", "74", "86"],
  bfc: ["21", "25", "39", "58", "70", "71", "89", "90"],
  bretagne: ["22", "29", "35", "56"],
  cvdl: ["18", "28", "36", "37", "41", "45"],
  corse: ["2A", "2B"],
  ge: ["08", "10", "51", "52", "54", "55", "57", "67", "68", "88"],
  Guadeloupe: ["971"],
  guyane: ["973"],
  hdf: ["02", "59", "60", "62", "80"],
  idf: ["75", "92", "93", "94", "77", "78", "91", "95"],
  reunion: ["974"],
  martinique: ["972"],
  mayotte: ["976"],
  normandie: ["14", "27", "50", "61", "76"],
  nouvelleaquitaine: ["33", "40", "47", "64", "16", "17", "19", "23", "24", "79", "87"],
  occitanie: ["09", "11", "12", "30", "31", "32", "34", "46", "48", "65", "66", "81", "82"],
  paysdelaloire: ["44", "49", "53", "72", "85"],
  paca: ["06", "13", "83", "84", "04", "05"],
};

departementsHTMl.setAttribute('disabled','true')

regionsHTML.addEventListener("change", (e) => {
  departementsHTMl.removeAttribute("disabled", "true");
  for (const region of regionsHTML.children) {
    const departements = regions[region.value];
    if (!departements) continue;
    for (const departement of departements) {
      departementsHTMl.querySelector(`option[value="${departement}"]`).setAttribute("hidden", "true");
    }
  }
  for(const departement of regions[e.target.value]){
    departementsHTMl.querySelector(`option[value="${departement}"]`).removeAttribute("hidden", "false");
  }
});



