import './index.css';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, message, Form, Divider, Input } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';

function ProductPageComponent(props) {
    const { productID } = useParams();
    const [product, setProduct] = useState(null);
    const [owner, setOwner] = useState(null);
    const [showTextarea, setShowTextarea] = useState(false);
    const [ask, getAsk] = useState([]);

    const handleButtonClick = () => {
        setShowTextarea((prevState) => !prevState);
    };
    const history = useHistory();
    if (props.session === null) {
        history.push('/login');
        message.error('로그인이 필요합니다.', 3);
    }
    const getProduct = async () => {
        await axios
            .get(`http://localhost:3006/product/${productID}`)
            .then((result) => {
                const product = result.data[0];
                setProduct(product);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(function () {
        getProduct();
        if (props.session === null) {
            setOwner(null);
            console.log('owner VS customer:', owner);
        } else {
            setOwner(props.session);
            console.log('owner VS customer:', owner);
        }
    }, []);
    useEffect(function () {
        axios
            .get('http://localhost:3006/ask/getAsk')
            .then(function (result) {
                const ask = result.data;
                console.log(ask);
                getAsk(ask);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    if (product === null) {
        return <h1>상품 정보를 받고 있습니다...</h1>;
    }
    const onClickPurchase = async () => {
        await axios
            .post(`http://localhost:3006/product/purchase/${productID}`)
            .then((result) => {
                message.info('상품 구매가 완료되었습니다.');
                getProduct();
            })
            .catch((error) => {
                message.error('상품 구매에 실패했습니다.');
            });
    };
    const onClickPurchaseCancel = async () => {
        await axios
            .post(`http://localhost:3006/product/purchaseCancel/${productID}`)
            .then((result) => {
                message.info('상품 구매가 취소되었습니다.');
                getProduct();
            })
            .catch((error) => {
                message.error('상품 구매 취소에 실패했습니다.');
            });
    };
    const setAsk = async (values) => {
        console.log(values.askText, productID, props.session.userID);
        await axios
            .post('http://localhost:3006/ask/setAsk', {
                askText: values.askText,
                productID: productID,
                userID: props.session.userID,
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                message.error(`에러가 발생했습니다. ${error.message}`);
            });
    };
    return (
        <div>
            <Form initialValues={{}}>
                <div id="image-box">
                    <img src={`http://localhost:3006/uploads/${product.productImgUrl}`} alt="product-img" />
                </div>
                <div id="profile-box">
                    <img src="/images/avatar.png" alt="avatar" />
                    <span>{product.userName}</span>
                </div>
                <div id="contents-box">
                    <div id="name">{product.productName}</div>
                    <div id="price">{product.productPrice}</div>
                    <div id="createdAt">{dayjs(product.productUploadDate).format('YYYY-MM-DD')}</div>
                    <Button
                        id="purchase-button"
                        size="large"
                        type="primary"
                        danger
                        onClick={product.productsoldout === 1 ? onClickPurchaseCancel : onClickPurchase}
                    >
                        {product.productsoldout === 1 ? '구매 취소' : '구매하기'}
                    </Button>
                    <pre id="description">{product.productDescription} </pre>
                </div>
            </Form>
            <div id="question">
                <div id="question-header">
                    <h2>Q&A</h2>
                    <span>판매자에게 궁금한 내용을 물어보세요.</span>
                </div>
                <Divider />
                <div id="comment-wrap">
                    <div className="comment-list">
                        <div className="comment-profile-box">
                            <img src="/images/avatar.png" alt="avatar" />
                            <span>강종협</span>
                        </div>
                        <div className="comment">망가진 곳은 없나요?</div>
                        <Button className="owner-reply-toggle" onClick={handleButtonClick}>
                            {showTextarea ? '취소' : '답글'}
                        </Button>
                    </div>

                    <Form onFinish={setAsk}>
                        <Form.Item className="reply-area" name="askText">
                            <Input.TextArea placeholder="질문을 입력하세요" autoSize={{ minRows: 3, maxRows: 5 }} />
                        </Form.Item>
                        <Form.Item>
                            <Button className="customer-reply-btn" htmlType="submit">
                                댓글
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ProductPageComponent;
