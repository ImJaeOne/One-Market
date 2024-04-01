import './index.css';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Select } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function ProductsPageComponent() {
    const history = useHistory();
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const option = [
        {
            value: 'all',
            label: '전체',
        },
        {
            value: 'cloth',
            label: '의류',
        },
        {
            value: 'beuty',
            label: '뷰티',
        },
        {
            value: 'food',
            label: '식품',
        },
        {
            value: 'kitchen',
            label: '주방용품',
        },
        {
            value: 'daily',
            label: '생활용품',
        },
        {
            value: 'sport',
            label: '스포츠',
        },
        {
            value: 'electronics',
            label: '가전/디지털',
        },
        {
            value: 'furniture',
            label: '가구',
        },
        {
            value: 'health',
            label: '헬스',
        },
    ];
    return (
        <div id="products">
            <h1 id="product-headline">중고거래</h1>
            <Form>
                <div id="products-nav">
                    <Form.Item>
                        <Select
                            defaultValue="전체"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={option}
                        />
                    </Form.Item>
                    <Button
                        id="product-upload"
                        size="large"
                        onClick={() => history.push('/upload')}
                        icon={<DownloadOutlined />}
                    >
                        상품 업로드
                    </Button>
                </div>
                <div id="product-wrap">
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>

                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="product-card">
                        <div>
                            <img className="product-img" src="images/notebook1.jpg" alt="product-img" />
                        </div>
                        <div className="product-contents">
                            <span className="product-name">맥북 16인치</span>
                            <span className="product-price">300000원</span>
                            <div className="product-footer">
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/avatar.png" alt="profile-img" />
                                    <span>임재원</span>
                                </div>
                                <span className="product-date">2024-03-26</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </Form>
        </div>
    );
}

export default ProductsPageComponent;
