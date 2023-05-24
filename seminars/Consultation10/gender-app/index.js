const nameInput = document.getElementById("nameInput");
const container = document.getElementById("container");

console.log(nameInput.value);



nameInput.addEventListener('change', () => {
  console.log("Произошло изменение");
  console.log(nameInput.value);
  getGenderByName();
});

async function getGenderByName() {
  const response = await fetch(`https://api.genderize.io/?name=${nameInput.value}`);
  const obj = await response.json();
  console.log(obj);
  const { gender, name, probability } = obj;
  // console.log(gender);
  // console.log(name);
  // console.log(probability);
  renderResult(name, gender, probability);
}

function renderResult(name, gender, probability) {
  const element =
    `<div class="genderCard">
  <h3 class="nameHeading">${name}</h3>
  <p class="genderText">${gender}</p>
  <p class="probabilityText">${probability}</p>
  </div>`;
  // container.innerHTML = element;
  // 'beforebegin' - перед контейнером
  // 'beforeend'   - последний ребенок контейнера - перед закрывающим
  // 'afterbegin'  - самый первый ребенок контейнера - сразу после открывающего тега контенера
  // 'afterend'    - сразу за(после) контейнером - после закрывающего тега контейнера
  // begin - открывающий тег контейнера
  // end   -  закрывающий тег контенера 
  container.insertAdjacentHTML('afterend', element);
}