import React, { useState } from 'react';
import './NameList.css';

const NameList = () => {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddName = () => {
        if (inputValue.trim()) {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };

    const handleChangeName = (index) => {
        if (inputValue.trim()) {
            const newNames = [...names];
            newNames[index] = inputValue;
            setNames(newNames);
            setInputValue('');
        }
    };

    return (
        <div className="cyberpunk-container">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите имя"
                className="cyberpunk-input"
            />
            <button
                onClick={handleAddName}
                disabled={!inputValue.trim()}
                className="cyberpunk-button"
            >
                Добавить
            </button>
            {names.length === 0 ? (
                <p className="cyberpunk-text">Список пуст</p>
            ) : (
                <ul className="cyberpunk-list">
                    {names.map((name, index) => (
                        <li key={index} className="cyberpunk-list-item">
                            {name}
                            <button
                                onClick={() => handleChangeName(index)}
                                disabled={!inputValue.trim()}
                                className="cyberpunk-button"
                            >
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NameList;