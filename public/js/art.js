const $imgForm = document.getElementById('imgForm');
const $imgURL = document.getElementById('imgUrl');
const $imgFormShow = document.getElementById('showImgForm');
const $imgSaveBtn = document.getElementById('imgSave');
const $imgCancelBtn = document.getElementById('imgCancel');

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
    document.getElementById('playerArt').src = $imgURL.value;
    cancelArt();
}

$imgFormShow.addEventListener('click', showArtForm);
$imgSaveBtn.addEventListener('click', saveArt);