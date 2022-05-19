import style from './Header.module.css';
import Container from '../Container/Container';
import Icon from '../../images/icon.svg';

const Header = ({options, usd, eur}) => {

    console.log(options);
    return (
        <div className={style.wrapper}>
            <Container>
                <div className={style.header_content}>
                    <a href="/" className={style.logo_link}>
                        <div className={style.logo_wrapper}>
                            <img
                                src={Icon}
                                alt="Logo"
                                width="41px"
                                height="31px"
                            />
                            <span className={style.logo_description}>
                                UAConverter
                            </span>
                        </div>
                    </a>
                    <ul className={style.list}>
                        <li className={style.list_item}>
                            <img
                                src={options[0].logo}
                                alt={options[0].currency}
                                width="24px"
                                height="24px"
                            />
                            <p className={style.price}>USD:{usd.toFixed(2)}</p>
                        </li>
                        <li className={style.list_item}>
                            <img
                                src={options[2].logo}
                                alt={options[2].currency}
                                width="24px"
                                height="24px"
                            />
                            <p className={style.price}>EUR:{eur.toFixed(2)}</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Header;