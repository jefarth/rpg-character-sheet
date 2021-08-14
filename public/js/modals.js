const $armorNameInput = document.getElementById('armorNameInput');
const $defValInput = document.getElementById('defValInput');
const $armorLvlReqInput = document.getElementById('armorLvlReqInput');

const $wpnNameInput = document.getElementById('wpnNameInput');
const $atkValInput = document.getElementById('atkValInput');
const $wpnLvlReqInput = document.getElementById('wpnLvlReqInput');

const $spellNameInput = document.getElementById('spellNameInput');
const $manaCostInput = document.getElementById('manaCostInput');
const $dmgValueInput = document.getElementById('dmgValueInput');

// get the character id number for later use
// const urlArr = window.location.href.split('/');
// const player_id = urlArr[urlArr.length - 1];

const saveWeapon = async () => {
    // Get user inputted data
    const name = $wpnNameInput.value.trim();
    const bonus_atk = $atkValInput.value;
    const lvl_req = $wpnLvlReqInput.value;

    // Fetch POST to the weapons db
    const response = await fetch(`/api/weapons`, {
        method: 'POST',
        body: JSON.stringify({
          name, bonus_atk, lvl_req, player_id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
      document.location.replace(`/players-page/${player_id}`);
    } else {
      alert(response.statusText);
    }
}

const saveArmor = async () => {
    // Get user inputted data
    const name = $armorNameInput.value.trim();
    const bonus_def = $defValInput.value;
    const lvl_req = $armorLvlReqInput.value;

    // Fetch POST to the armor db
    const response = await fetch(`/api/armor`, {
        method: 'POST',
        body: JSON.stringify({
          name, bonus_def, lvl_req, player_id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
        document.location.replace(`/players-page/${player_id}`);
    } else {
      alert(response.statusText);
    }
}

const saveSpell = async () => {
  // Get user inputted data
  const name = $spellNameInput.value.trim();
  const mana_cost = $manaCostInput.value;
  const damage = $dmgValueInput.value;
  // Fetch POST to the armor db
  const response = await fetch(`/api/spell`, {
      method: 'POST',
      body: JSON.stringify({
        name, mana_cost, damage, player_id
      }),
      headers: {'Content-Type': 'application/json'}
  });
  
  if (response.ok) {
      document.location.replace(`/players-page/${player_id}`);
  } else {
    alert(response.statusText);
  }
}

const deleteCharacter = async () => {
  if(confirm('Are you sure you want to delete this character?')) {

    const response = await fetch(`/api/player/${player_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ player_id })
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert(response.statusText);
    }
  }
  return;
}

document
    .getElementById('wpnModalSave')
    .addEventListener('click', saveWeapon);

document
    .getElementById('armModalSave')
    .addEventListener('click', saveArmor);

document
    .getElementById('spellModalSave')
    .addEventListener('click', saveSpell);

document
    .getElementById('deleteCharBtn')
    .addEventListener('click', deleteCharacter);