import React, { useState, useEffect } from 'react'
import { VictoryChart, VictoryLine } from "victory";
import file from '../datafile.csv'
import { csv } from 'd3'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    whidth: '100%',
    data: { stroke: '#ff3b3f' }

}

const Grafico = () => {
    const [data, setData] = useState([]);
    let numbers = []
    useEffect(() => {
        csv(file).then(data => {
            setData(data);
        });
    }, []);
    data.forEach(element => {
        numbers.push(element.file)

    });
    numbers.shift();
    return (

        <div >
            <VictoryChart domainPadding={10} style={styles} >
                <VictoryLine style={styles} data={numbers} y="Distance-32383" />
            </VictoryChart>
        </div>

    )




}
export default Grafico