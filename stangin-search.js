const playerNamesInput = document.querySelector("#playerNames")

playerNamesInput.addEventListener("input", onInputChange)

let playerNamesList = [
  "LaMelo Ball PG",
  "Terry Rozier SG",
  "Kelly Oubre Jr. SG",
  "P.J. Washington PF",
  "Gordon Hayward SF",
  "Mason Plumlee C",
  "Jalen McDaniels PF",
  "Dennis Smith Jr. PG",
  "Mark Williams C",
  "Nick Richards C",
  "Svi Mykhailiuk SG",
  "Theo Maledon PG",
  "Cody Martin SF",
  "James Bouknight SG",
 "Bryce McGowens G",
  "Kai Jones PF",
  "JT Thor F"
]

function onInputChange() {
  removeAutocompleteDropdown();

  const value = playerNamesInput.value.toLowerCase();

  if (value.length === 0) return;

  const filteredNames = [];

  playerNamesList.forEach((playerName) => {
    if (playerName.substring(0, value.length).toLowerCase() === value)
      filteredNames.push(playerName);
  });
  createAutocompleteDropdown(filteredNames);
}

function createAutocompleteDropdown(list) {
  const filteredList = document.createElement("ul");
  filteredList.className = "autocomplete-list";
  filteredList.id = "autocomplete-list";
  
  list.forEach((playerName) => {
    const listItem = document.createElement("li");
    const playerNameButton = document.createElement("button");
    playerNameButton.innerHTML = playerName;
    listItem.appendChild(playerNameButton);
    
    filteredList.appendChild(listItem);
    
  });
  
  document.querySelector('#autocomplete-wrapper').appendChild(filteredList);
}

function removeAutocompleteDropdown() {
  const filteredList = document.querySelector("#autocomplete-list");
  if(filteredList) filteredList.remove();
}