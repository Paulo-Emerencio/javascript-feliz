const root = document.querySelector('#root');

// Inserindo o Título por: Tagged template string
// A função está em um arquivo separado
const textTitle = 'Difficulty'
const title = Title`
    color: #D6A2E8;
    font-size: 2.5rem;
    letter-spacing: 1.2px;
    margin-bottom: 4rem;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)

// Inserindo o Alien por: Tagged template string
const pathAlien = 'img/alien.png'
const alien = Character`
    transform: scale(1);
    margin: 2rem 2rem 5rem 2rem;
    ${pathAlien}
`
root.insertAdjacentHTML('beforeend', alien)
root.insertAdjacentHTML('beforeend', alien)
root.insertAdjacentHTML('beforeend', alien)

// <li> do slide (Bolinhas)
const item = Item`
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--slide-color);
    border-radius: 50%;
    list-style: none;
`

// Inserindo o Slide de dificuldade
const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: var(--line-height);
    background-color: var(--slide-color);
    margin: auto;
    ${item + item + item}
`
root.insertAdjacentHTML('beforeend', slide)

