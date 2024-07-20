import './Card.css'

function Card(props) {
    // Здесь <CreateUser className=... /> className - это просто props
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card