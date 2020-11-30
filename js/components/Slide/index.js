const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const Item = (css, className) => {
    createStyles(css)

    return (
        `<li class="item ${className}" style="${css}" onclick="handleClick()"></li>`
    )
}

const Action = (css) => {
    createStyles(css)

    return (
        `<li class="action" style="${css}"></li>`
    )
}