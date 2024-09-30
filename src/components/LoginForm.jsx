import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${username} has logged in`)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username: <input type="text" value={username} onChange={handleUsernameInput} /></label>
        <label htmlFor="">Password: <input type="text" value={password} onChange={handlePasswordInput} /></label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default LoginForm;