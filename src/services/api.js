import axios from 'axios';

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&cc=USD';



const fetchCurrency = async () => {
try {
  const currencyList = await axios.get(BASE_URL).then((res) => res.data);

  return currencyList;
} catch (error) {
  console.error(error.message)
}
}

export default fetchCurrency;