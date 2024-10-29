'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Lecretures
/*    
const getCountryData = function (cuntry) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${cuntry}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    let currency, language, _;
    for ([_, currency] of Object.entries(data.currencies));

    for ([_, language] of Object.entries(data.languages));
    const html = `
            <article class="country">
            <img class="country__img" src="${data.flags.svg}" alt="${
      data.flags.alt
    }" title="${data.name.common} flag" />
            <div class="country__data">
              <h3 class="country__name">${data.name.official}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${language}</p>
              <p class="country__row"><span>💰</span>${currency.name}</p>
            </div>
          </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
getCountryData('egypt');

const renderCountry = function (data) {
  let currency, language, _;
  for ([_, currency] of Object.entries(data.currencies));

  for ([_, language] of Object.entries(data.languages));
  const html = `
            <article class="country">
            <img class="country__img" src="${data.flags.svg}" alt="${
    data.flags.alt
  }" title="${data.name.common} flag" />
            <div class="country__data">
              <h3 class="country__name">${data.name.official}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${language}</p>
              <p class="country__row"><span>💰</span>${currency.name}</p>
            </div>
          </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndMeighbour = function (cuntry) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${cuntry}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country
    renderCountry(data);

    // render neighbour
    const [neighbour] = data.borders;
    console.log(neighbour);
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    console.log('ttt');
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};

getCountryAndMeighbour('egypt');
getCountryAndMeighbour('usa');

const renderCountry = function (data) {
  let currency, language, _;
  for ([_, currency] of Object.entries(data.currencies));
  
  for ([_, language] of Object.entries(data.languages));
  const html = `
            <article class="country">
            <img class="country__img" src="${data.flags.svg}" alt="${
    data.flags.alt
  }" title="${data.name.common} flag" />
            <div class="country__data">
              <h3 class="country__name">${data.name.official}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${language}</p>
              <p class="country__row"><span>💰</span>${currency.name}</p>
              </div>
              </article>
              `;
              
              countriesContainer.insertAdjacentHTML('beforeend', html);
              countriesContainer.style.opacity = 1;
            };

            const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
    .then(data => renderCountry(data[0]));
  };

  getCountryData(`egypt`);
  getCountryData('usa');
  getCountryData('germany');
  


console.log('Test case');
setTimeout(() => console.log('timer 0 seconds'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('Test case');

  */

// =============================================================================== //
// challige #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json
`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data =>
      console.log(`انت في ${data.address.city}, ${data.address.country} `)
    )
    .catch(error => console.error(error.message));
};

whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
*/
