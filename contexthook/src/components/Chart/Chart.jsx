import React , { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const chart = () => {
    const [dailyData,setDailyData] = useState({});

    // state = {
    //     dailyData: {}
    // }

    useEffect(() => {
       const fetchAPI = async() => {
           setDailyData(await fetchDailyData());
       }

      fetchAPI();
    },[]);

    const linechart = (
        dailyData.length? 
        (<Line
           data = {{
               labels: dailyData.map(( { date }) => date),
               datasets: [{
                   data: dailyData.map(({ confirmed }) => confirmed),
                   label: 'Infected',
                   borderColor: '#3333ff',
                   fill: true}, 
               
                    {data: dailyData.map(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
               }],
           }}
        />) : null
    
    );

    return (
        <div className={styles.container}>
            {linechart}
        </div>
    )
}

export default chart;