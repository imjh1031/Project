import React from "react";

import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="join member ">
        <div className="inner">
          <form
            id="frm"
            action="../member/member_ps.php"
            method="post"
            target="ifrmProcess"
          >
            <input type="hidden" name="rncheck" value="none" />
            <input type="hidden" name="dupeinfo" value="" />
            <input type="hidden" name="pakey" value="" />
            <input type="hidden" name="foreigner" value="" />
            <input type="hidden" name="adultFl" value="" />
            <input type="hidden" name="mode" value="join" />
            <h1>회원가입</h1>
            <div className="wrapper">
              <div className="left">
                <div className="input_box auth_input">
                    <div className="label-box">
                        <label>연락처</label>
                    </div>
                  <input name="cellPhone" id="cellPhone" type="tel" />
                </div>
                <div className="input_box auth_input">
                  <label>이름</label>
                  <input name="memNm" id="memNm" type="text" maxLength={30} />
                </div>
                <div className="input_box  auth_input">
                  <label>닉네임</label>
                  <input
                    name="nickNm"
                    type="text"
                    maxLength={12}
                    placeholder="영문, 숫자, 한글 조합 최대12자"
                  />
                </div>
                <div className="term2s">
                  <div className="term2">
                    <label>
                      <input name="" type="checkbox" id="all-ck" value=""  className="chek"/>
                      <i></i>
                    </label>
                    <b>
                      모두 동의합니다.(선택 시 적립금 3,000원을 지급해드립니다.)
                    </b>
                  </div>
                  <div className="term2">
                    <label>
                      <input
                        name="privateApprovalFl"
                        type="checkbox"
                        id="private-fl"
                        value="y"
                        className="chek"
                      />
                      <i></i>
                      (필수) 개인정보 처리방침에 동의합니다.
                    </label>
                    <a href="/service/private.php" target="_blank">
                      약관보기
                    </a>
                  </div>
                  <div className="term2">
                    <label>
                      <input
                        name="agreementInfoFl"
                        type="checkbox"
                        id="term2s-fl"
                        value="y"
                        className="chek"
                      />
                      <i></i>
                      (필수) 이용약관에 동의합니다.
                    </label>
                    <a href="/service/agreement.php" target="_blank">
                      약관보기
                    </a>
                  </div>
                  <div className="term2 blue">
                    <label>
                      <input
                        name="smsFl"
                        type="checkbox"
                        id="marketing-fl"
                        value="y"
                        className="chek"
                      />
                      <i></i>
                    </label>
                    (선택) 마케팅 정보 수신에 동의합니다.
                    <input name="maillingFl" type="hidden" value="n" />
                  </div>
                  <div className="term2 blue">
                    <label>
                      <input type="checkbox" id="expirationFl" className="chek" />
                      <i></i>
                    </label>
                    (선택) 평생회원 가입에 동의합니다.{" "}
                    <a href="/service/guide.php" target="_blank">
                      안내보기
                    </a>
                    <input name="expirationFl" type="hidden" value="1" />
                  </div>
                </div>
              </div>
              <div className="right form">
                <div className="input_box">
                    <div className="label-box">
                        <label>이메일 (아이디)</label>
                    </div>
                  <div className="email_box">
                    <input type="text" className="mail_first" />
                    <i className="items">@</i>
                    <input type="text" className="mail_second" />
                    <i></i>
                    <select id="mail-tail">
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
                  <span className="red email_msg1" hidden = {true}>
                    사용할 수 없는 이메일입니다
                  </span>
                  <span className="blue email_msg2" hidden = {true}>
                    사용가능한 이메일입니다
                  </span>
                </div>
                <div className="input_box">
                  <label>비밀번호</label>
                  <input
                    name="memPw"
                    type="password"
                    minLength={10}
                    placeholder="영문, 숫자 조합 10자리 이상 16자리 이하"
                  />
                  <span className="red pw_msg1" hidden = {true}>
                    영문, 숫자 조합 10자리 이상 16자리 이하
                  </span>
                </div>
                <div className="input_box">
                  <label>비밀번호 확인</label>
                  <input id="pwcheck" type="password" />
                  <span className="red pw_msg2" hidden = {true}>
                    비밀번호가 일치하지 않습니다
                  </span>
                </div>
                <button type="submit" id="btn-submit">
                  가입하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
