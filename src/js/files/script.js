// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Переключение сотрудников на странице "О Нас"

const personsMain = document.querySelectorAll('.team-about__item');
const personsLittle = document.querySelectorAll('.person-info-team');

if (personsMain.length && personsLittle.length) {
    personsLittle.forEach((person, index) => {
        person.addEventListener('click', () => {
            personsLittle.forEach(item => {
                item.classList.remove('_active');
            })
            person.classList.add('_active');
            personsMain.forEach(item => {
                item.classList.remove('_active');
            })
            personsMain[index].classList.add('_active');
        })
    })
}
//========================================================================================================================================================

// Текущая страница в порфтолио

const projectLinks = document.querySelectorAll('.nav-portfolio__item');

if (projectLinks.length) {
    projectLinks.forEach(link => {
        if (link.href == window.location.href) {
            link.classList.add('_current');
        }
    })
}