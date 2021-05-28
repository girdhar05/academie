let from = document.getElementById('from');
let airportData = document.getElementById('airportData');
let fromValue;
// function loader() {

// }
from.addEventListener('keyup', async (e) => {
  fromValue = from.value;
  if (fromValue.length >= 3) {
    let fetchResponse = await fetch(`/users/${fromValue}`);
    let resValue = await fetchResponse.json();
    // await loader();
    console.log(resValue);
    for (let i = 0; i < resValue.length; i++) {
      airportData.innerHTML = airportData.innerHTML + '<br>' + resValue[i].name;
    }
  }
  //   fromValue = from.length;
  //   if (fromValue >= 3) {
  //     console.log('corect');
  //   }
});
