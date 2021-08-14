const $nameRandomizeBtn = document.querySelector('#nameRandomizeBtn');
const $classSelect = document.querySelector('#classSelect')
const $nameInput = document.querySelector('#nameInput');
const $atkInput = document.querySelector('#atkInput');
const $defInput = document.querySelector('#defInput');
const $hpInput = document.querySelector('#hpInput');
const $manaInput = document.querySelector('#manaInput');

const statFields = [$atkInput, $defInput, $hpInput, $manaInput];


const rollStats = (event) => {
    event.preventDefault();
    // Get four random numbers in an array
    const nums = [];
    for (let i = 0; i < 4; i++) {
        nums.push(Math.floor(Math.random() * 20) + 1);
    }
    // Put the numbers in the fields
    for (let i = 0; i < statFields.length; i++) {
        statFields[i].value = nums[i];
    }
    return;
};

const saveCharacter = async (event) => {
    event.preventDefault();
    // Gets the class title for later use
    const title = $classSelect.value;
    // Get form data
    const name = $nameInput.value.trim();
    const base_atk = $atkInput.value.trim();
    const base_def = $defInput.value.trim();
    const base_hp = $hpInput.value.trim();
    const base_mana = $manaInput.value.trim();
    // The class_id is retrieved from the select option with the matching id
    const class_id = Number(document.querySelector(`#${title}`).className);

    // fetch POST route
    const response = await fetch('/api/player', {
        method: 'POST',
        body: JSON.stringify({
            name, base_atk, base_def, base_hp, base_mana, class_id
        }),
        headers: { 'Content-Type': 'json'}

    });

    if (response.ok) {
        document.location.replace('/api/player')
    } else {
        alert('Something went wrong... Try again.')
    }
    return;
}

document
    .querySelector('#rollStatsBtn')
    .addEventListener('click', rollStats);

document
    .querySelector('#newPlayerForm')
    .addEventListener('submit', saveCharacter);