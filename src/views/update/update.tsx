import React from "react";

import "./update.css";

function update() {
    return (
        <div className="join3 member3">
            <div className="inner3">

                <form id="frm3" action="../member/member_ps.php" method="post" target="ifrmProcess">
                    <input type="hidden" name="rncheck" value="none" />
                    <input type="hidden" name="dupeinfo" value="" />
                    <input type="hidden" name="pakey" value="" />
                    <input type="hidden" name="foreigner" value="" />
                    <input type="hidden" name="adultFl" value="" />
                    <input type="hidden" name="mode" value="join" />

                    <h1 className="updatetitle3">회원정보수정</h1>



                    <div className="wrapper3">

                        <div className="left3">

                            <div className="input_box3 auth_input3">
                                <label>연락처</label>
                                <input name="cellPhone" id="cellPhone3" type="tel"/>
                            </div>

                            <div className="input_box3 auth_input3">
                                <label>이름</label>
                                <input name="memNm" id="memNm3" type="text"/>
                            </div>


                            <div className="input_box3  auth_input3">
                                <label>닉네임</label>
                                <input name="nickNm" type="text" placeholder="영문, 숫자, 한글 조합 최대12자" />
                            </div>

                            <div className="input_box3 leave3">
                                <a href="/mypage/hack_out" className="leave3">회원탈퇴</a>
                            </div>

                        </div>

                        <div className="right form3">
                                <label className="input_box3_id">이메일 (아이디)</label>
                            <div className="input_box3_2">
                                <div className="email_box3">
                                    <input type="text" className="mail_first3" />
                                    <i className="email_box4">@</i>
                                    <input type="text" className="mail_second3" />
                                    <i></i>
                                    <select id="mail-tail3">
                                        <option value="">직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="hanmail.net">hanmail.net</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="hotmail.com">hotmail.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="icloud.com">icloud.com</option>
                                    </select>
                                </div>
                                <input type="hidden" name="memId" />
                                <input type="hidden" name="email" />
                                <span className="red email_msg3" hidden >사용할 수 없는 이메일입니다</span>
                                <span className="blue email_msg3" hidden >사용가능한 이메일입니다</span>
                            </div>
                                <label className="input-box3-head">기본배송지 설정</label>
                            <div className="input_box4">
                                <div className="searchline3">
                                    <input name="memPw" type="text" placeholder="" />
                                </div>

                            </div>
                            <div className="input_box5">

                                <input id="pwcheck3" type="text" />

                            </div>
                            <button type="button" id="btn-submit3" style={{ "marginTop": "102px" }}>회원정보 수정완료</button>

                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default update;
