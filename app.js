// Conexion Inicial con la API
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "3990c4369aa3ea4c1d195850f4605857");
myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

//Solicitud
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.basketball.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//Funcionalidades de la Pagina

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i < menuLength; i++){
  if(menuItem[i].href === currentLocation){
    menuItem[i].className = "nav-link active"
  }
};
