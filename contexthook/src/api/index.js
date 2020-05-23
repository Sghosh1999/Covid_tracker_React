import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//API call function
export const fetchData = async() =>{
    try {
       
        //Fetching the data from the API 
        //await is used because it needs some time to render or fetch tha API data
        //Destructureing
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        //Taking only the useful file from the API
        const modifiedData = {confirmed,recovered,deaths,lastUpdate,};
        
        return modifiedData;
        
    } catch (error) {
        
    }
}

//for the graphs purpose
export const fetchDailyData = async() => {
    try {
        //const response = await axios.get(`${url}/daily`);
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
        //return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));;
    } catch (error) {
        return error;
    }
}