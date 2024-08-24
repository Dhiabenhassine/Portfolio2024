import React,{useState} from 'react';
import './calculator.css'; 
import Draggable from 'react-draggable';
import { evaluate } from 'mathjs';

function Calculator({ isAppOpen, toggleCalculator }) {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    isAppOpen && (
      <Draggable>
        <div style={styles.calculator}>
          <div onClick={toggleCalculator} style={styles.closeButton}>X</div>
          <input 
            type="text" 
            value={input} 
            readOnly 
            style={styles.input} 
          />
          <div style={styles.buttons}>
            {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C', '/'].map((btn) => (
              <button 
                key={btn} 
                onClick={() => btn === '=' ? handleCalculate() : btn === 'C' ? handleClear() : handleButtonClick(btn)} 
                style={styles.button}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </Draggable>
    )
  );
}

const styles = {
  calculator: {
    width: '90%',
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'absolute', 
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    zIndex: 1000,
  },
  input: {
    width: '100%',
    height: '40px',
    textAlign: 'right',
    marginBottom: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s',
  },
  closeButton: {
    position: 'absolute',
    top: '0px',
    right: '7px',
    cursor: 'pointer',
    fontSize: '18px',
    background: 'transparent',
    border: 'none',
    color: '#888',
    fontWeight: 'bold',
  }
};

export default Calculator;
