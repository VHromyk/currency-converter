import React from 'react';
import style from './CurrencyRow.module.css'

const CurrencyRow = ({
  options,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount }) => {
  
  return (
      <div className={style.wrapper}>
      <input type="number" value={amount} onChange={onChangeAmount} className={style.input}/>
          <select className={style.select} value={selectedCurrency} onChange={onChangeCurrency}>
              {options.map((option) => (
                  <option key={option} value={option}>{option.toUpperCase()}</option>
              ))}
          </select>
      </div>
  );
}


export default CurrencyRow;