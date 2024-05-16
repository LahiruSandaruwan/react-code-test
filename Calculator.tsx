import { useState } from 'react';
import type { NextPage } from 'next';

const Calculator: NextPage = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState('');

    const calculateSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setTotal(`Total: ${sum}`);
    };

    return (
        <div style={{ padding: 20, maxWidth: 400, margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Adding Two Numbers</h1>
            <div style={{ marginBottom: 10 }}>
                <div style={{ marginBottom: 10 }}>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="First Number"
                        style={{ width: '100%', padding: '8px', fontSize: '16px', marginBottom: '10px', borderColor: 'black', borderWidth: 2 }}
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Second Number"
                        style={{ width: '100%', padding: '8px', fontSize: '16px', marginBottom: '10px', borderColor: 'black', borderWidth: 2 }}
                    />
                </div>
            </div>
            <button onClick={calculateSum} style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', color: 'black', border: '2px solid black', cursor: 'pointer' }}>
                Add Two Numbers
            </button>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{total}</h2>
        </div>
    );
};

export default Calculator;
