import Button from '../Button/Button'
import { useState } from 'react'
import './FeedBackSection.scss'

export default function FeedBackSection() {
    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [successText, setSuccessText] = useState('')
    const [showForm, setShowForm] = useState(true)

    const handleNameChange = (event) => {
        setName(event.target.value)
        setNameError(!event.target.value.trim())
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
        setMessageError(!event.target.value.trim())
    }

    const formSubmit = (event) => {
        event.preventDefault()
        if (!name.trim()) {
            setNameError(true)
        }

        if (!message.trim()) {
            setMessageError(true)
        }

        if (!name.trim() || !message.trim()) {
            return;
        }

        if (name && message) {
            setSuccessText(`
                <p>Dear ${ name } thanks for the feedback...</p>
                <p><b>Reason:</b> ${ reason }</p>
                <p><b>Message:</b> ${ message }</p>
            `)
        }

        setShowForm(false)
        setName('');
        setReason('help');
        setMessage('');
    }

    return (
        <section>
            <h3 className="mb-2">Feed Back {showForm}</h3>

            {
                showForm
                    ? 
                        <form>
                            <div className="mb-2">
                                <label htmlFor="name">Name</label> <br />
                                <input
                                    value={name}
                                    onChange={handleNameChange}
                                    style={{boxShadow: nameError ? 'inset 0 0 0 1px red' : null}}
                                    type="text" 
                                    id="name" 
                                    className="control" 
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="reason">Reason</label> <br />
                                <select 
                                    value={reason}
                                    onChange={event => setReason(event.target.value)}
                                    id="reason" 
                                    className="control" 
                                >
                                    <option value="error">Error</option>
                                    <option value="help">Need help</option>
                                    <option value="offers">Offers</option>
                                </select>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="message">Message</label> <br />
                                <textarea 
                                    value={message}
                                    onChange={handleMessageChange}
                                    style={{boxShadow: messageError ? 'inset 0 0 0 1px red' : null}}
                                    id="message" 
                                    className="control"
                                ></textarea>
                            </div>

                            <div>
                                <Button
                                    disabled={nameError || messageError}
                                    onClick={formSubmit}
                                >Send</Button>
                            </div>
                        </form>
                    : 
                        <>
                            <div className="mb-2" dangerouslySetInnerHTML={{ __html: successText }}></div>
                            <Button onClick={() => setShowForm(true)}>Send another one</Button>
                        </>
            }
        

        </section>
    )
}