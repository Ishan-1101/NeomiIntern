document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.getElementById('countries');
  
    fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then(res => {
      return res.json();
    }).then(data => {
      let output = "";
      data.forEach(country => {
        output += `
        
        <option value="${country.name}">${country.name}</option>`;
      })
  
      selectDrop.innerHTML = output;
    }).catch(err => {
      console.log(err);
    })
  
  
  });