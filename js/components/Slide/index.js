const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const Item = (css, className) => {
    createStyles(css)

    return (
        `<li class="item ${className}" onclick="handleClick(event)"></li>`
    )
}

const Action = (css) => {
    createStyles(css)

    return (
        `<li class="action"></li>`
    )
}