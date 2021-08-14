const $imgForm = document.getElementById('imgForm');
const $imgURL = document.getElementById('imgUrl');
const $imgFormShow = document.getElementById('showImgForm');
const $imgSaveBtn = document.getElementById('imgSave');
const $imgCancelBtn = document.getElementById('imgCancel');

// get the character id number for later use
const urlArr = window.location.href.split('/');
const player_id = urlArr[urlArr.length - 1];

const showArtForm = () => {
    $imgFormShow.classList.add('d-none');
    $imgForm.classList.remove('d-none');
}

const cancelArt = () => {
    $imgURL.value = '';
    $imgFormShow.classList.remove('d-none');
    $imgForm.classList.add('d-none');
}

const saveArt = async (event) => {
    event.preventDefault();
    
    const art = $imgURL.value
    
    const response = await fetch(`/api/player/art`, {
        method: 'PUT',
        body: JSON.stringify({
          art,
          player_id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
      document.location.replace(`/players-page/${player_id}`);
    } else {
      alert(response.statusText);
    }

    // document.getElementById('playerArt').src = $imgURL.value;
    // cancelArt();
}

$imgFormShow.addEventListener('click', showArtForm);
$imgSaveBtn.addEventListener('click', saveArt);