import React from 'react';
import { Link } from 'react-router-dom';

import './FindId.css';

function FindId() {
    return (
        <div className="FindId">
            <div className="containers">
                <div className="headline">
                    <h1 className='find-id'>아이디 찾기</h1>
                </div>
                <div className="form-container">
                    <form action="" className="con-box">
                        <div id="name_view" className="element name" >
                            <span id="name_lable" className="holder">
                                이름</span>
                            <div className="inside">
                                <label className="ePlaceholder" title="이름 / 혹은 회사명">
                                    <input id="name" name="name" className="email-input" placeholder="이름 / 혹은 회사명" value="" type="text" /></label>
                                <div className="email">이메일</div>
                                <label className="ePlaceholder" title="이메일">
                                    <input id="email" name="email" className="lostInput" placeholder="이메일" value="" type="text" />
                                </label>
                                <div className="sp-sub-submit">
                                    <button type='submit' className="sp-btn">아이디 찾기</button>
                                    <Link to={'/FindPassword'} className="sp-btn2">비밀번호 찾기</Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default FindId;
