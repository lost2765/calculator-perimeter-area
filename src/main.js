const width = document.getElementById('width');
const height = document.getElementById('height');
const perBtn = document.getElementById('perBtn');
const areaBtn = document.getElementById('areaBtn');
const perimeterResult = document.getElementById('perimeterResult');
const areaResult = document.getElementById('areaResult');
const err = document.getElementById('err');

perBtn.addEventListener('click', calculatePerimeter);
areaBtn.addEventListener('click', calculateArea);

function calculatePerimeter() {
    if (width.value === '' || height.value === '') {
        err.innerHTML = 'please add width and height';
        return;
    }
    err.innerHTML = '';
    let perimeter = 2 * (Number(width.value) + Number(height.value));
    perimeterResult.innerHTML = perimeter;
}
function calculateArea() {
    if (width.value === '' || height.value === '') {
        err.innerHTML = 'please add width and height';
        return;
    }
    err.innerHTML = '';
    let area = Number(width.value) * Number(height.value);
    areaResult.innerHTML = area;
}
