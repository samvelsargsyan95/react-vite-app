
import Button from './Button/Button'
import { differences } from "../data"
import { useState } from 'react'

export default function DifferencesSection({ title }) {
    let [contentType, setContentType] = useState(null)

    const handleClick = (type) => {
        setContentType(type)
    }

    const buttons = [
        {
            className: 'me-2',
            type: 'way'
        },
        {
            className: 'me-2',
            type: 'easy'
        },
        {
            type: 'program'
        }
    ]

    return (
        <section className="mb-35">
        <h3 className="mb-2">{ title }</h3>
        
        {
            buttons.map((button, index) =>  
                <Button
                    key={ index }  
                    className={ button?.className }
                    onClick={() => handleClick(button.type)}
                    isActive={contentType === button.type}
                >
                    <span>{ button.type.charAt(0).toUpperCase() + button.type.slice(1) }</span>
                </Button>
            )
        }

        {
          contentType 
            ? <p className="mt-2">{ differences[contentType] }</p>
            : <p className="mt-2">Click to button</p>
        }
      </section>
    )
}