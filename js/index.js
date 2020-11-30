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

// Inserindo o Slide de dificuldade
// Bola Branca
const action = Action`
    .action{
        list-style: none;
        border-radius: 50%;
        background-color: #fff;
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        position: absolute;
        left: 5px;
    }
`
// Bolinhas de fundo
const item = Item`
    .item {
        height: calc(var(--line-height) * 2);
        width: calc(var(--line-height) * 2);
        background-color: var(--slide-color);
        border-radius: 50%;
        list-style: none;
    }
`
// Bolinha de fundo selecionada
const itemActive = Item`
    height: calc(var(--line-height) * 5);
    width: calc(var(--line-height) * 5);
    background-color: var(--slide-color);
    border-radius: 50%;
    list-style: none;
`
// Função para determinar o item ativo
const states = [true, false, false]
function showItems(stateItems) {
    const items = stateItems.map(state => {
        if (state) {
            return itemActive
        }
        return item
    })

    return items.join('')
}
// Função de clique nas bolinhas
function handleClick(){
    console.log('Aeeee Carai!!!')
}

function createStyles(css){
    const head = document.querySelector('head')
    const style = `
        <style>
            ${css}
        </style>
    `
    head.insertAdjacentHTML('beforeend', style)
}

// Inserindo o Slide de dificuldade
const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: var(--line-height);
    background-color: var(--slide-color);
    margin: auto;
    ${showItems(states) + action}
`
root.insertAdjacentHTML('beforeend', slide)

