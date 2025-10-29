const form = document.getElementById('progress-form');
const list = document.getElementById('workout-list');
const totalWorkouts = document.getElementById('total-workouts');
const totalCalories = document.getElementById('total-calories');

let workouts = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const workout = document.getElementById('workout').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    workouts.push({ workout, duration, calories });
    renderWorkouts();
    form.reset();
});

function renderWorkouts() {
    list.innerHTML = '';
    let totalCal = 0;

    workouts.forEach((w) => {
        const li = document.createElement('li');
        li.textContent = `${w.workout} - ${w.duration} min - ${w.calories} kcal`;
        list.appendChild(li);
        totalCal += w.calories;
    });

    totalWorkouts.textContent = workouts.length;
    totalCalories.textContent = totalCal;
}
