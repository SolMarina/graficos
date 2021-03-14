import React from 'react';
import Grafico from './component/Grafico';
import './GraficarApp.css'

const GraficarApp = () => {
    return (
        <div className='mainBox'>
            <h2>Graficar App</h2>
            <hr></hr>
            <div>
                <div className='changeBar'>
                    <Grafico/>
                </div>
            </div>

        </div>
    )


}

export default GraficarApp