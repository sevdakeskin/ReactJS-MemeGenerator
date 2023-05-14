import React from 'react'

function Ternary() {

    const [messages, setMessages] = React.useState(["first message", "second message"]);

    function body() {
        return (

            <div>
                {
                    messages.length === 0 ? //if
                        <h1>No messages</h1> : //else
                        <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>


                }
            </div>

        )
    };


    return (

        <div>

            {body()}

        </div>
    )
}

export default Ternary
        