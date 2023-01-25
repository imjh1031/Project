import React from "react";
import { Link } from "react-router-dom";
import "./Shopping.css";

function Shopping() {
  return (
    <div className="Shopping">
      <div id="container">
        <div id="contents">
          <div className="sub_content">
            <div className="content_box cart order">
              <h1 className="h1-text">장바구니</h1>
              <div className="order_wrap inner">
                <div className="cart_cont">
                  <form
                    id="frmCart"
                    name="frmCart"
                    method="post"
                    target="ifrmProcess"
                  >
                    <div className="cart_cont_list">
                      <div className="<!--order_table_type--> list">
                        <table>
                          <thead>
                            <tr>
                              <th>상품정보</th>
                              <th></th>
                              <th>수량</th>
                              <th>주문금액</th>
                              <th>삭제</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="td_left">
                                <div className="pick_add_cont">
                                  <span className="pick_add_img">
                                    <a href="">
                                      <img
                                        src="/image/PDP_perfume_thaw_50ml_1.jpg"
                                        width="40"
                                        alt="퍼퓸 쏘,선셋"
                                        title="퍼퓸 쏘,선셋"
                                        className="middle"
                                      />
                                    </a>
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="pick_add_info">
                                  <em>
                                    <a
                                      href="/IJHDetailPageTest copy.html"
                                      className="name"
                                    >
                                      퍼퓸 쏘,선셋
                                    </a>
                                  </em>
                                  <p className="price"></p>
                                </div>
                              </td>
                              <td className="td_test">
                                <img
                                  className="count_minus"
                                  src="https://siitatr1563.cdn-nhncommerce.com/data/skin/front/awesome/img/sita2/quantity_minus.svg"
                                  data-goodsno="1000000008"
                                  data-mode="minus"
                                  data-optionsno="67"
                                  data-sno="150323"
                                  data-count="1"
                                  data-cartsno="150323"
                                />
                                <span className="count">1</span>
                                <img
                                  className="count_plus"
                                  src="https://siitatr1563.cdn-nhncommerce.com/data/skin/front/awesome/img/sita2/quantity_plus.svg"
                                  data-goodsno="1000000008"
                                  data-mode="plus"
                                  data-optionsno="67"
                                  data-sno="150323"
                                  data-count="1"
                                  data-cartsno="150323"
                                />
                              </td>
                              <td className="td_price">
                                <strong className="order_sum_txt">원</strong>
                                <p className="add_currency"></p>
                              </td>
                              <td>
                                <img
                                  className="remove"
                                  src="https://siitatr1563.cdn-nhncommerce.com/data/skin/front/awesome/img/sita2/cart_close.svg"
                                  data-sno="150323"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </form>
                  <div className="savings">
                    소중한 순간을 더욱 특별하게 만들어줄 우리만의 🎁제품으로
                    따듯한 마음을 전해보세요.
                  </div>
                  <div className="price_sum sum">
                    <div className="price_sum_cont">
                      <div className="price_sum_list">
                        <dl>
                          <dt>총 상품금액</dt>
                          <dd>
                            <strong id="totalGoodsPrice"></strong>원
                          </dd>
                        </dl>
                        <dl className="sign">
                          <dt>&nbsp;</dt>
                          <dd>
                            <img
                              src="https://siitatr1563.cdn-nhncommerce.com/data/skin/front/awesome/img/sita2/cart_sum_plus.svg"
                              alt="더하기"
                            />
                          </dd>
                        </dl>
                        <dl>
                          <dt>총 배송비</dt>
                          <dd>
                            <strong id="totalDeliveryCharge"></strong>원
                          </dd>
                        </dl>
                        <dl className="sign">
                          <dt>&nbsp;</dt>
                          <dd>
                            <img
                              src="https://siitatr1563.cdn-nhncommerce.com/data/skin/front/awesome/img/sita2/cart_sum_equal.svg"
                              alt="합계"
                            />
                          </dd>
                        </dl>
                        <dl className="price_total">
                          <dt>결제예정금액</dt>
                          <dd>
                            <strong id="totalSettlePrice"></strong>원
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="btn_order_box">
                    <span className="button_box">
                      <Link to={"/OrderCheck"} className="btn_order_whole_buy buy">
                          주문하기
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shopping;
