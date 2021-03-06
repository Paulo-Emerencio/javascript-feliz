const style = `
<style>
    :root {
        --line-height: 10px;
        --slide-color: #EAB543;
    }

* {
    margin: 0;
    padding: 0;
    border: none;
}

body{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: #2C3A47;
}

#root{
    box-sizing: border-box;
    font-family: 'Press Start 2P', cursive;
    background-color: #3B3B98;
    width: 40vw;
    min-width: 768px;
    height: 65vh;
    text-align: center;
    padding-top: 4rem;
}
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', style)