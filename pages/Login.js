import axios from 'axios'

export default function Login() {
    const loginFormHandler = async function(event) {
        event.preventDefault()

        
    }

    const response = axios.post('/api/user/login', {
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application.json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to login!')
    }

    return (
        <></>
    )
}