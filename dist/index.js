const userForm = document.querySelector('#user-form');
const bgColorSelector = document.querySelector('#color-selector');
const nameInput = document.querySelector('#user-name');
const age = document.querySelector('#user-age');
const hobby = document.querySelector('#user-hobby');
const expiriance = document.querySelector('#user-hobby-exp');
const resultDiv = document.querySelector('#script-result');
const selectorOptions = document.querySelector('#selector-options');
var Styles;
(function (Styles) {
    Styles["Light"] = "theme-light";
    Styles["Dark"] = "theme-dark";
    Styles["Pink"] = "theme-pink";
})(Styles || (Styles = {}));
function greeting(name, age, hobby, expiriance) {
    const hobbyExpMessage = expiriance > 5 ? `Вау, ти справжній експерт у ${hobby}!`
        : expiriance > 1 ? `Чудово, ти вже маєш досвід у ${hobby}.`
            : `Все попереду! Починати нове хобі — це цікаво.`;
    return `Привіт ${name}! Тобі ${age} років. Твоє хобі — ${hobby}. ${hobbyExpMessage}`;
}
function onSubmitHandler(event) {
    event.preventDefault();
    const userName = nameInput.value;
    const userAge = Number(age.value);
    const userHobby = hobby.value;
    const userHobbyExp = Number(expiriance.value);
    const greetingMessage = greeting(userName, userAge, userHobby, userHobbyExp);
    resultDiv.textContent = greetingMessage;
}
function setBodyClassList(theme) {
    document.body.classList = theme;
}
function onChangeHandler() {
    const key = bgColorSelector.value;
    setBodyClassList(Styles[key]);
}
userForm.addEventListener('submit', onSubmitHandler);
bgColorSelector.addEventListener('change', onChangeHandler);
for (const style of Object.keys(Styles)) {
    const liElement = document.createElement("li");
    liElement.textContent = style;
    selectorOptions.appendChild(liElement);
}
