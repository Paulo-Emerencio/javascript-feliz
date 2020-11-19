const root = document.querySelector('#root');
const textTitle = 'Difficulty'
const pathAlien = 'img/alien.png'

// Inserindo o Título por: Tagged template string
// A função está em um arquivo separado
const title = Title`
    color: #D6A2E8;
    font-size: 2.5rem;
    letter-spacing: 1.2px;
    margin-bottom: 4rem;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)

// Inserindo o Alien por: Tagged template string
const alien = Character`
    transform: scale(1);
    margin: 0 1rem;
    ${pathAlien}
`
root.insertAdjacentHTML('beforeend', alien)
root.insertAdjacentHTML('beforeend', alien)
root.insertAdjacentHTML('beforeend', alien)


