import React from 'react';
import './Login.css';
import login from '../../assest/image/loginimage.png';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="Login">
            <div className="content-box">
                <div className="member-wrap">
                    <div className="section">
                        <h3 className="section-header">로그인</h3>
                        <form action="" className="form-login">
                            <div className="login-box">
                                <div className="input-box">
                                    <label>아이디</label>
                                    <input type="text" placeholder="아이디 또는 이메일을 입력해주세요" className="login-input" />
                                </div>
                                <div className="input-box">
                                    <label>비밀번호</label>
                                    <input type="password" placeholder="영문, 숫자 조합 6자리 이상" className="login-input" />
                                </div>
                                <div className="btn-login-box">
                                    <ul className="btn-ul">
                                        <li>
                                            <Link to='/FindId'><button type="button" className="btn-member-white">아이디찾기</button></Link>
                                        </li>
                                        <li>
                                            <Link to='/FindPassword'><button type="button" className="btn-member-white be">비밀번호찾기</button></Link>
                                        </li>
                                        <li>
                                            <Link to='/signUp'><button type="button" className="btn-member-white be">회원가입</button></Link>
                                        </li>
                                    </ul>
                                    <button type="submit" className="member-login-btn">로그인</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="section">
                        <Link to={ '/About' }><div className="image"><img src={login} alt="" /></div></Link>
                        <Link to={ '/About' } className="image-tag">혁신의 여정 알아보기</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
