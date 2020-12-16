import React, { useState } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h4>Hook Counter</h4>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                decrement
            </button>
        </div>
    );
}
export default HookCounter