import React from 'react';
import './DetailPage.css';
import perfume1 from '../../assest/image/PDP_perfume_thaw_50ml_1.jpg';
import perfume2 from '../../assest/image/PDP_perfume_thaw_50ml_2.jpg';
import perfume3 from '../../assest/image/PDP_perfume_thaw_50ml_3.jpg';
import perfume4 from '../../assest/image/PDP_perfume_thaw_50ml_4.jpg';
import perfume5 from '../../assest/image/PLP_perfume_thaw_50ml.jpg';


function DetailPage() {
  return (
    <div className="DetailPage">
        <header>
        <div id="product">
            <div className="page detail-page">
                <div className="detail-page__wrap">
                    <div className="detail">
                        <div className="detail__content jsDetailCont dflex-center-between">
                            <div className="detail-imgs relative" style={{ "height": "100vh" }}>
                                <div className="detail-imgs__container scrollable-content swiper-container jsImgSlide" data-break="768">
                                    <div className="detail-imgs__wrDetailPageer swiper-wrDetailPageer">
                                        <div className="detail-imgs__item relative swiper-slide">
                                            <img className="detail-imgs__img" src={perfume1} />
                                        </div>
                                        <div className="detail-imgs__item relative swiper0slide">
                                            <img className="detail-imgs__img" src={perfume2}/>
                                        </div>
                                        <div className="detail-imgs__item relative swiper-slide">
                                            <img className="detail-imgs__img" src={perfume3} />
                                        </div>
                                        <div className="detail-imgs__item relative swiper-slide">
                                            <img className="detail-imgs__img" src={perfume4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-con">
                                <div className="product-box">
                                    <div className="small-logo2">퍼퓸</div>
                                    <div className="product-info">
                                        <div className="info-logo">퍼퓸 쏘,선셋</div>
                                        <div className="price">139,000원</div>
                                    </div>
                                    <div className="image-info">
                                        <ul className="images">
                                            <li className="image1"><img src={perfume5} alt=""/></li>
                                        </ul>
                                    </div>
                                    <div className="detail-infos">
                                        <div className="info-desc">따뜻한 공기 | 오렌지 껍질 | 머스크</div>
                                        <div className="info-desc2">
                                            봄이 찾아와 겨울의 무거운 공기가 걷히고 따뜻한 노을이 하늘을 붉게 물들이는 듯한 머스크의 묵직한 향과 오렌지 껍질의 상큼한 향이 만나 경쾌한 무게감을 퍼트립니다.
                                             달콤한 바닐라와 통카빈은 부드러운 향취를 더 하여 살결 위에 포근하고 기분 좋은 여운으로 오랜 시간 머무릅니다.
                                        </div>
                                        <div className="detail-btn">
                                            <button type="button" className="cart">장바구니에 담기</button>
                                        </div>
                                        <div className="detail-notice">                                            
                                            * 상품 혹은 증정품의 포장(랩핑)을 개봉 및 훼손한 경우 반품이 불가합니다.
                                            <br/>                                            
                                            * 단순 변심 또는 주문 실수로 인한 교환이 불가합니다. 신중한 구매 부탁드립니다.                                    
                                        </div>
                                    </div>
                                    <div className="detail-info">
                                        <div className="detail-info__box">
                                            <div className="detail-info__top relative jsInfoToggle">
                                                <button type="button" className="detail-info__subject">향 노트</button>
                                                <div className="detail-info__arrow n-arrow n-arrow--down jsInfoArrow">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  );
}

export default DetailPage;
