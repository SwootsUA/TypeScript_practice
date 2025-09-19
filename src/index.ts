const userForm = document.querySelector('#user-form') as HTMLFormElement;
const bgColorSelector = document.querySelector('#color-selector') as HTMLSelectElement;
const nameInput = document.querySelector('#user-name') as HTMLInputElement;
const age = document.querySelector('#user-age') as HTMLInputElement;
const hobby = document.querySelector('#user-hobby') as HTMLInputElement;
const expiriance = document.querySelector('#user-hobby-exp') as HTMLInputElement;
const resultDiv = document.querySelector('#script-result') as HTMLDivElement;
const selectorOptions = document.querySelector('#selector-options') as HTMLUListElement;

enum Styles {
  Light = "theme-light",
  Dark = "theme-dark",
  Pink = "theme-pink",
}

function greeting(name: string, age: number, hobby: string, expiriance: number): string {
  const hobbyExpMessage = 
    expiriance > 5 ? `Вау, ти справжній експерт у ${hobby}!` 
    : expiriance > 1 ? `Чудово, ти вже маєш досвід у ${hobby}.` 
    : `Все попереду! Починати нове хобі — це цікаво.`;
  return `Привіт ${name}! Тобі ${age} років. Твоє хобі — ${hobby}. ${hobbyExpMessage}`;
}

function onSubmitHandler(event: Event): void {
  event.preventDefault();
  const userName: string = nameInput.value;
  const userAge: number = Number(age.value);
  const userHobby: string = hobby.value;
  const userHobbyExp: number = Number(expiriance.value);

  const greetingMessage: string = greeting(userName, userAge, userHobby, userHobbyExp);
  resultDiv.textContent = greetingMessage;
}

function setBodyClassList(theme: Styles): void {
  document.body.classList = theme;
}

function onChangeHandler(): void {
  const key = bgColorSelector.value as keyof typeof Styles
  setBodyClassList(Styles[key]);
}

userForm.addEventListener('submit', onSubmitHandler);
bgColorSelector.addEventListener('change', onChangeHandler);

for (const style of Object.keys(Styles)) {
  const liElement: HTMLLIElement = document.createElement("li");
  liElement.textContent = style;
  selectorOptions.appendChild(liElement);
}