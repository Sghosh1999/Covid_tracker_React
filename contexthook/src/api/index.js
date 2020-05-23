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