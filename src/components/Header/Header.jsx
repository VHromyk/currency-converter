import { useState, useEffect } from 'react';
import fetchCurrency from '../../services/api';
import style from './Header.module.css'
import getCurrentCurrency from '../../helpers/helpers';

const Header = () => {
  const [currency, setCurrency] = useState([]);
  
  useEffect(() => {
    fetchCurrency().then((res) => setCurrency(getCurrentCurrency(res)));
  }, [])

  return (
    <div className={style.wrapper}>
      <a href='/' className={style.logo}>UAConverter</a>
    <ul className={style.list}>{currency.map(({cc, rate}) => <li key={cc} className={style.list_item}>
      <p>{cc} / {rate}</p>
    </li>)}</ul>
    </div>
  )
}


export default Header;