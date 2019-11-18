import React, { useState } from 'react';

const Sample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(4);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        if (names.filter(name => name.text === nextNames.text)) {
            alert('이미 있습니다.');
        }
        else {
            setNextId(nextId + 1);
            setNames(nextNames);
            setInputText('');
        }
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Sample;