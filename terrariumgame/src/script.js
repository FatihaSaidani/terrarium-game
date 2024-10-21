
// storing the initial positions of the plants
const initialPositions = {};

// main function with variables declared & eventlistener to enable dragging plants
function dragElement(terrariumElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
  
  initialPositions[terrariumElement.id] = {
    top: terrariumElement.offsetTop,
    left: terrariumElement.offsetLeft
  };
    

// allowing pointer to drag plants and utilising Dom
function pointerDrag(e) {
  e.preventDefault();
  console.log(e);
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onpointermove = elementDrag;
  document.onpointerup = stopElementDrag;
}

// utilising css 
function elementDrag(e) {
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
  terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}


// utilising Dom
function stopElementDrag() {
  document.onpointerup = null;
  document.onpointermove = null;
}
}


// applying to each individual plant outside of function
const plants = [
  'plant1', 'plant2', 'plant3', 'plant4', 'plant5', 'plant6',
  'plant7', 'plant8', 'plant9', 'plant10', 'plant11', 'plant12',
  'plant13', 'plant14'
];

plants.forEach(plantId => {
  dragElement(document.getElementById(plantId));
});

// initialising reset button
document.getElementById('resetButton').addEventListener('click', () => {
  plants.forEach(plantId => {
      const plant = document.getElementById(plantId);
      const {top, left} = initialPositions[plantId];
      plant.style.top = top + 'px';
      plant.style.left = left + 'px';
  });
});
