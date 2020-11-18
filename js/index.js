const root = document.querySelector('#root');
const textTitle = 'Difficulty'

// Tagged template string
const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)
