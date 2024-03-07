import Button from '../Button/Button'
import { useState } from 'react'
import './FeedBackSection.scss'

export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        message: '',
        nameError: false,
        messageError: false
    })
    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [message, setMessage] = useState('')
    // const [nameError, setNameError] = useState(false)
    // const [messageError, setMessageError] = useState(false)
    const [successText, setSuccessText] = useState('')
    const [showForm, setShowForm] = useState(true)

    const handleNameChange = (event) => {
        setForm({
            name: event.target.value,
            nameError: !event.target.value.trim()
        })
    }

    const handleMessageChange = (event) => {
        setForm((prev) => ({
            ...prev,
            message: event.target.value,
            messageError: !event.target.value.trim()
        }))
    }

    const formSubmit = (event) => {
        event.preventDefault()
        if (!form.name.trim()) {
            setForm((prev) => ({ ...prev, nameError: true }))
        }

        if (!form.message.trim()) {
            setForm((prev) => ({ ...prev,  messageError: true }))
        }

        if (!form.name.trim() || !form.message.trim()) {
            return;
        }

        if (form.name && form.message) {
            setSuccessText(`
                <p>Dear ${ form.name } thanks for the feedback...</p>
                <p><b>Reason:</b> ${ form.reason }</p>
                <p><b>Message:</b> ${ form.message }</p>
            `)

            setShowForm(false)
        }

        setForm({
            name: '',
            reason: 'help',
            message: '',
            nameError: false,
            messageError: false
        })
    }

    return (
        <section>
            <h3 className="mb-2">Feed Back</h3>
 
            {
                showForm
                    ? 
                        <form>
                            <div className="mb-2">
                                <label htmlFor="name">Name</label> <br />
                                <input
                                    value={form.name}
                                    onChange={handleNameChange}
                                    style={{boxShadow: form.nameError ? 'inset 0 0 0 1px red' : null}}
                                    type="text" 
                                    id="name" 
                                    className="control" 
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="reason">Reason</label> <br />
                                <select 
                                    value={form.reason}
                                    onChange={event => setForm((prev) => ({ ...prev, reason: event.target.value }))}
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
                                    value={form.message}
                                    onChange={handleMessageChange}
                                    style={{boxShadow: form.messageError ? 'inset 0 0 0 1px red' : null}}
                                    id="message" 
                                    className="control"
                                ></textarea>
                            </div>

                            <div>
                                <Button
                                    disabled={form.nameError || form.messageError}
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