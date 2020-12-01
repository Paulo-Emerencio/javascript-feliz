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

// Fazendo o Slide de dificuldade
// Bola Branca
const action = Action`
    .action{
        list-style: none;
        border-radius: 50%;
        background-color: #fff;
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        position: absolute;
        left: -10px;
        transition: transform 200ms linear;
    }

    .action.second {
        transform: translateX(297px);
    }

    .action.third {
        transform: translateX(594px);
    }
`

// Função para determinar o item ativo
const states = [true, false, false]

function showItems(stateItems) {
    //Bolinhas laranjas pequenas (não selecionadas)
    const item = (pos) => Item`
        .item {
            height: calc(var(--line-height) * 2);
            width: calc(var(--line-height) * 2);
            background-color: var(--slide-color);
            border-radius: 50%;
            list-style: none;
            transition: transform 300ms linear;
            cursor: pointer;
        }
        ${`pos-${pos}`}
    `
    //Bolinha laranja selecionada (grande)
    const itemActive = (pos) => Item`
        .item.active {
            transform: scale(2.4)
        }
        
        ${`active pos-${pos}`}
    `

    const items = stateItems.map((state, index) => {
        if (state) {
            return itemActive(index + 1)
        }
        return item(index + 1)
    })

    return items.join('')
}

function clearAction(action) {
    action.classList.remove('second')
    action.classList.remove('third')
}

// Função de clique nas bolinhas
function handleClick(event){
    const { target } = event
    const allItems = document.querySelectorAll('.item')
    const action = document.querySelector('.action')

    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active')

    clearAction(action)
    if (target.classList.contains('pos-2')) {
        action.classList.add('second')
    }

    if (target.classList.contains('pos-3')) {
        action.classList.add('third')
    }
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

