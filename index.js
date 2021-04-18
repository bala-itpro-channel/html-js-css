
onLoadFn = () => {
  document.querySelector('#btnCounter').addEventListener('click', () => {
    alert("Clicked");
    const val = sessionStorage.getItem('scounter') ? parseInt(sessionStorage.getItem('scounter')) + 1 : 1;
    sessionStorage.setItem('scounter', val);
    document.getElementById('sessionOp').innerText = sessionStorage.getItem('scounter');

    const valLocal = localStorage.getItem('lcounter') ? parseInt(localStorage.getItem('lcounter')) + 1 : 1;
    localStorage.setItem('lcounter', valLocal);
    document.getElementById('localOp').innerText = localStorage.getItem('lcounter');
  });
}