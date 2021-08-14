const baseAtk = Number(document.getElementById('baseAtk').innerText);
const baseDef = Number(document.getElementById('baseDef').innerText);
const baseHp = Number(document.getElementById('baseHp').innerText);
const baseMana = Number(document.getElementById('baseMana').innerText);

const $bonusAtkSpan = document.getElementById('bonusAtk');
const $bonusDefSpan = document.getElementById('bonusDef');
const $actualAtkSpan = document.getElementById('actualAtk');
const $actualDefSpan = document.getElementById('actualDef');
const $actualHpSpan = document.getElementById('actualHp');
const $actualManaSpan = document.getElementById('actualMana');


const calculateStats = () => {
    const bonusAtk = Number($bonusAtkSpan.innerText);
    const bonusDef = Number($bonusDefSpan.innerText);

    $actualAtkSpan.innerText = bonusAtk + baseAtk;
    $actualDefSpan.innerText = bonusDef + baseDef;
    $actualHpSpan.innerText = baseHp;
    $actualManaSpan.innerText = baseMana;
};

calculateStats();