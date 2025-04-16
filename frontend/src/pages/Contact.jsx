

export function Contact() {

    function handleSubmit() {
        //call API function (if we had one)
    }

    return (
        <div>
            <h1>Contact us</h1>
            <p>You have any issue with us? email me at <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a></p>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name"/>
                <label>Email: </label>
                <input type="text" name="email"/>
                <label>Message: </label>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}