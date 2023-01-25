import React from 'react';
import logo from './logo.svg';
import './FindPassword.css';
import { Link } from 'react-router-dom';


function FindPassword() {
    return (
        <div className="FindPassword">
            <div className="container2">
                <div className="headline2">
                    <h1 className='find-password'>비밀번호 찾기</h1>
                </div>
                <div className="form-container2">
                    <form action="" className="test2">
                        <div className="find-password-by-id2">아이디</div>
                        <label className="ePlaceholder2" title="아이디">
                            <input id="member_id2" className="IdInput2" name="member_id" placeholder="아이디" value="" type="text" />
                        </label>
                        <div id="name_view2" className="element name2" >
                            <span id="name_lable2" className="holder2">
                                이름</span>
                            <div className="inside2">
                                <label className="ePlaceholder2" title="이름 / 혹은 회사명">
                                    <input id="name2" name="name" className="email-input2" placeholder="이름 / 혹은 회사명" value="" type="text" /></label>
                                <div className="email2">이메일</div>
                                <label className="ePlaceholder2" title="이메일">
                                    <input id="email2" name="email" className="lostInput2" placeholder="이메일" value="" type="text" />
                                </label>
                                <div className="sp-sub-submit2">
                                    <Link to={'/FindId'} className="sp-btn2">아이디 찾기</Link>
                                    <button type='submit' className="sp-btn2">비밀번호 찾기</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default FindPassword;
