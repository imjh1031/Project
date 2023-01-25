import React from "react";
import './Footer.css';

import Logo from '../../assest/image/logo.png';

function Footer() {
    return (
        <div id="wrap3">
        <footer id="footer">
            <div className="ft_in">
                <div className="ft_top">
                    <div className="logo_bt">
                        <img src={ Logo } alt="" style={{"width": "100px", "height": "100px"}} />
                    </div>
                    <div className="section_wrapper2">
                        <dl>
                            <dt>이름</dt>
                            <dd>신경수</dd>
                            <dd>고동현</dd>
                            <dd>김수현</dd>
                            <dd>임지현</dd>
                            <dd>정진호</dd>
                        </dl>
                        <dl>
                            <dt>Git</dt>
                            <dd>야호</dd>
                            <dd>호랑</dd>
                            <dd>나비</dd>
                            <dd>한마리</dd>
                        </dl>
                        <dl>
                            <dt>Instagram(?)</dt>
                            <dd>야호</dd>
                            <dd>호랑</dd>
                            <dd>나비</dd>
                            <dd>한마리</dd>
                        </dl>
                    </div>
                </div>
                <div className="ft_bottom">
                    <div>2023년 코리아 IT_3조</div>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;