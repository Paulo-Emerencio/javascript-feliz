const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const Item = (css) => {
    createStyles(css)

    return (
        `<li class="item" style="${css}" onclick="handleClick()"></li>`
    )
}

const Action = (css) => {
    createStyles(css)

    return (
        `<li class="action" style="${css}"></li>`
    )
}