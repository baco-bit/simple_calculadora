import React from 'react';
import { useState } from 'react';

const Calculadora = () => {

    const [numero1, setNumero1] = useState('');

    const [numero2, setNumero2] = useState('');

    const [operacion, setOperacion] = useState('');

    const [resultado, setResultado] = useState(0);

    function clickNumber(val) {

        if (operacion === '') {
            setNumero1(numero1 + val)
        } else {
            setNumero2(numero2 + val)

        }
    }

    function limpiar(){
        setNumero1('');
        setNumero2('');
        setOperacion('');
        setResultado('');
    }

    function clickOperacion(val) {
        setOperacion(val);
    }


    function getResultado() {
        switch (operacion) {
            case '+':
                setResultado(Number(numero1) + Number(numero2));
                break;
            case '-':
                setResultado(Number(numero1) - Number(numero2));
                break;
            case '/':
                setResultado(Number(numero1) / Number(numero2));
                break;
            case '*':
                setResultado(Number(numero1) * Number(numero2));
                break;
        }
    }

    return (
        <div className='calculadora-grid'>
            <div className='output'>
                <div className='operacion-anterior'>{operacion ? numero1 + operacion : ''}</div>
                <div className='operacion-actual'>{ resultado ? resultado : (!operacion ? numero1 : numero2)}</div>
            </div>

            <button onClick={limpiar} className='span-two'>AC</button>
            <button onClick={() => { clickOperacion('/') }}>/</button>
            <button onClick={() => { clickNumber(7) }}>7</button>
            <button onClick={() => { clickNumber(8) }}>8</button>
            <button onClick={() => { clickNumber(9) }}>9</button>
            <button onClick={() => { clickOperacion('*') }}>*</button>
            <button onClick={() => { clickNumber(4) }}>4</button>
            <button onClick={() => { clickNumber(5) }}>5</button>
            <button onClick={() => { clickNumber(6) }}>6</button>
            <button onClick={() => { clickOperacion('-') }}>-</button>
            <button onClick={() => { clickNumber(1) }}>1</button>
            <button onClick={() => { clickNumber(2) }}>2</button>
            <button onClick={() => { clickNumber(3) }}>3</button>
            <button className='suma' onClick={() => { clickOperacion('+') }}>+</button>
            <button onClick={() => { clickNumber('.') }}>.</button>
            <button onClick={() => { clickNumber(0) }}>0</button>
            <button onClick={getResultado} className='igual'>=</button>



        </div>

    );
};

export default Calculadora;
