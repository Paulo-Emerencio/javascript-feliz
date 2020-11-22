const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)