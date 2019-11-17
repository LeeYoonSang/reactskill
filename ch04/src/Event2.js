import React, { useState } from 'react';

const Event2 = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);

    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    }
    const { username, message } = form;

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
        // setUsername('');
        // setMessage('');
    }

    const onKeyPress = e => {
        if (e. key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트연습</h1>
            <input 
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
            />
            <input 
            type="text"
            name="message"
            placeholder="아무거나입력"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Event2;