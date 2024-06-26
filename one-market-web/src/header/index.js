import './index.css';
import { Link, useHistory } from 'react-router-dom';
import { Input, message, Form } from 'antd';
import sessionAuth from '../Session/sessionAuth';
import axios from 'axios';

function HeaderComponent(props) {
    const { session, setSession, setSearch } = props;
    const history = useHistory();
    const { Search } = Input;

    const onSearch = (value, form) => {
        axios
            .post('http://localhost:3006/product/search', { productName: value })
            .then((result) => {
                const searchProductData = {
                    products: result.data,
                };
                setSearch(searchProductData);
                history.push('/products');
            })
            .catch((error) => {
                console.log(error);
                message.error('상품이 존재하지 않습니다.');
            });
    };

    const logout = async () => {
        try {
            await sessionAuth.handleLogout();
            message.info('로그아웃 성공');
            setSession(null);
        } catch (error) {
            console.error('로그아웃 에러 : ', error);
        }
    };

    const prepare = () => {
        message.info('준비 중인 서비스입니다.');
    };

    return (
        <header id="header-wrap">
            <div id="header">
                <div id="left-header">
                    <Link to="/">
                        <span id="logo">
                            <img src="/images/one.png" alt="to-index" width="30px" height="30px" />
                            One Market
                        </span>
                    </Link>
                    <Link to="/products" className="nav-menu" alt="to-products">
                        중고거래
                    </Link>
                    <div
                        onClick={() => {
                            prepare();
                        }}
                        className="nav-menu"
                        alt="to-place"
                    >
                        거래지역
                    </div>
                </div>
                <div id="right-header">
                    <Form>
                        <Search id="search" placeholder="물품이나 동네를 검색해보세요" onSearch={onSearch} />
                    </Form>
                    <div>
                        {session !== null ? (
                            <div className="to-logout">
                                <div className="to-login">{session.userName}님</div>
                                <div
                                    className="to-login"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    로그아웃
                                </div>
                            </div>
                        ) : (
                            <div className="to-login" onClick={() => history.push('/login')}>
                                로그인
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
