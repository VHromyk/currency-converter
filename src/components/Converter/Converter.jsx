import { useState, useEffect } from 'react';
import fetchCurrency from '../../services/api';
import style from './Converter.module.css'
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import Header from '../Header/Header'

const options = ['usd', 'uah', 'eur'];

const Converter = () => {
  const [USD, setUSD] = useState(0);
  const [EUR, setEUR] = useState(0);
  const [currencyOptions, setCurrencyOptions] = useState(options);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  

  let fromAmount, toAmount

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const getCurrencyRate = async (currency) => {
      const rate = await fetchCurrency(currency).then((res) => res);

      return rate;
  };
  
  useEffect(() => {
   setFromCurrency(options[0]);
    setToCurrency(options[0]);
    
      getCurrencyRate('usd').then((res) => setUSD(res.usd.uah));
      getCurrencyRate('eur').then((res) => setEUR(res.eur.uah));
}, [])


  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetchCurrency(fromCurrency).then((res) => {
        setExchangeRate(res[fromCurrency][toCurrency].toFixed(2));
      }
      );
    }
  }, [fromCurrency, toCurrency]);


  console.log(exchangeRate);

  
  const hadleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  
  const hadleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
      <>
          <Header usd={USD} eur={EUR} />
          <div className={style.wrapper}>
              <CurrencyRow
                  options={currencyOptions}
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                  amount={fromAmount}
                  onChangeAmount={hadleFromAmountChange}
              />
              <div className={style.equal}>=</div>
              <CurrencyRow
                  options={currencyOptions}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={(e) => setToCurrency(e.target.value)}
                  amount={toAmount}
                  onChangeAmount={hadleToAmountChange}
              />
          </div>
      </>
  );
}

export default Converter;