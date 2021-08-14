const $armorNameInput = document.getElementById('armorNameInput');
const $defValInput = document.getElementById('defValInput');
const $armorLvlReqInput = document.getElementById('armorLvlReqInput');

const $wpnNameInput = document.getElementById('wpnNameInput');
const $atkValInput = document.getElementById('atkValInput');
const $wpnLvlReqInput = document.getElementById('wpnLvlReqInput');

const saveWeapon = () => {
    const name = $wpnNameInput.value.trim();
    const bonus_atk = $atkValInput.value;
    const lvl_req = $wpnLvlReqInput.value;
    

    console.log(name, bonus_atk, lvl_req);
}

document
    .getElementById('wpnModalSave')
    .addEventListener('click', saveWeapon);