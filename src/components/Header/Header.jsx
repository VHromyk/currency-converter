import style from './Header.module.css'

const Header = ({usd, eur}) => {

  return (
      <div className={style.wrapper}>
          <a href="/" className={style.logo}>
              UAConverter
          </a>
          <ul className={style.list}>
              <li className={style.list_item}>
                  <p>USD:{usd.toFixed(2)}</p>
              </li>
              <li className={style.list_item}>
                  <p>EUR:{eur.toFixed(2)}</p>
              </li>
          </ul>
      </div>
  );
}

export default Header;