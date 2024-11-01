'use strict';

class workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distanse, duration) {
    this.coords = coords; // [lat, lng]
    this.distanse = distanse; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on 
    ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends workout {
  type = 'running';
  constructor(coords, distanse, duration, cadence) {
    super(coords, distanse, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  //
  calcPace() {
    this.pace = this.duration / this.distanse;
    return this.pace;
  }
}

class Cycling extends workout {
  type = 'cycling';
  constructor(coords, distanse, duration, elevationGain) {
    super(coords, distanse, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  //
  calcSpeed() {
    this.speed = this.distanse / (this.duration / 60);
    return this.speed;
  }
}

// const running1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(running1, cycling1);

////////////////////////////////////////////////////////////
// Main application arch

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];

  constructor() {
    // Get user position
    this.#getPosition();

    // Get data from local storeg
    this.#getLocalStorage();

    // Adding events handlers
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
  }
  #getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert(`can't get the position`);
        }
      );
  }

  #loadMap(position) {
    const { latitude, longitude } = position.coords;

    this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this.#showForm.bind(this));

    this.#workouts.forEach(work => {
      this.#renderWorkoutMarker(work);
    });
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    // Clear the inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    // Adding the hidden class to the form
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(input => Number.isFinite(input));
    const allPosive = (...inputs) => inputs.every(input => input > 0);
    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;

    let workout;

    // check if data is valid
    // if workout is running, create running Object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadnce)
        !validInputs(distance, duration, cadence) ||
        !allPosive(distance, duration, cadence)
      )
        return window.alert(`the inputs have to be positive numbers!`);

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // if workout is cycling, create cycling Object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadnce)
        !validInputs(distance, duration, elevation) ||
        !allPosive(distance, duration)
      )
        return window.alert(`the inputs have to be positive numbers!`);
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Adding new object to workout array
    this.#workouts.push(workout);
    // console.log(workout);
    // render workout on map as marker
    this.#renderWorkoutMarker(workout);

    // render workout on list
    this.#renderWorkout(workout);

    // Hide form + clear form inputs
    this.#hideForm();

    // set local storge to all workouts
    this.#setLocalStorage();
  }
  #renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  #renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distanse}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;
    if (workout.type === 'running')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
    </li>
    `;
    if (workout.type === 'cycling')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
    </li>
      `;
    form.insertAdjacentHTML('afterend', html);
  }

  #moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => this.#renderWorkout(work));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
