import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [userId, setUserId] = useState('');

    const handleAction = (action) => {
        axios.post('http://localhost:3000/game', { userId, action })
            .then(response => alert(response.data.message))
            .catch(error => console.error(error));
    };

    return (
        <div className="App">
            <h1>Telegram Mini Game</h1>
            <input 
                type="text" 
                placeholder="Enter Telegram User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={() => handleAction('spin')}>Spin</button>
            <button onClick={() => handleAction('bid')}>Bid</button>
            <button onClick={() => handleAction('boost')}>Boost</button>
        </div>
    );
}

export default App;
