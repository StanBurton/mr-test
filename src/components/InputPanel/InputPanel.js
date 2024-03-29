import React from 'react';

import './InputPanel.css';

const InputPanel = ({ value, inputHandler, filter }) => {
    return (
        <input type={filter === 'length' ? 'number' : 'text'}
            value={value}
            onChange={(e) => inputHandler(e.target.value)}
            className="form-control inputPanel "
            placeholder="Enter a number or text..."
            max="20" />
    )
}

export default InputPanel;