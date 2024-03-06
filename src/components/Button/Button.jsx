import classes from './Button.module.scss'
// this is a module type of CSS, with this type all styles are coded
 
export default function Button({ children, className, isActive, ...props  }) {
    let classList = `${classes.button} ${className}`

    if (isActive) classList += ` ${classes.active}`

    return (
        <button
            { ...props }
            className={classList}
        >{ children }</button>
    )
}