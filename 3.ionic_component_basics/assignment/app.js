const nameInput = document.querySelector('#input-course-name')
const ratingInput = document.querySelector('#input-course-rating')
const addButton = document.querySelector('#btn-add')
const courseList = document.querySelector('ion-list')

function clear() {
    nameInput.value = ''
    ratingInput.value = ''
}
addButton.addEventListener('click', () => {
    const rating = ratingInput.value
    const courseName = nameInput.value
    clear()
    if(
        courseName.trim().length <= 0 ||
        rating.trim().length <= 0 ||
        rating < 0 || rating > 5
    ) {

        const alert = document.createElement('ion-alert')
        alert.header = 'Invalid inputs'
        alert.message = 'Please enter valid course name and rating'
        alert.buttons = ['OK']
      
        document.body.appendChild(alert);
        return alert.present();
    }

    const newCourse = document.createElement('ion-item')
    newCourse.textContent = `${courseName}: ${rating} stars`
    courseList.append(newCourse)
})