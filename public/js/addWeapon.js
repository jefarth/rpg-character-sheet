async function weaponFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="weapon-name"]').value.trim();
    const bonus_atk = document.querySelector('input[name="weapon-bonus-atk"]').value;
    const lvl_req = document.querySelector('input[name="weapon-lvl-req"]').value;
   
  
    const response = await fetch(`/api/weapons`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        bonus_atk,
        lvl_req
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/weapons');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-weapon-form').addEventListener('submit', newFormHandler);