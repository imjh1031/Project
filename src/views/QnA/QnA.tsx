import React from 'react';

import './QnA.css';
import { Link } from 'react-router-dom';
import qnaImg from "../../assest/image/qna01.jpg";


function QnA() {
  return (
    <div className="QnA">
      <div id="wrapper">
        <div className="container00">
          <div className="headline">
            <span className='qna-headline'>헬프 데스크</span>
          </div>
          <div className="body">
            <div className="panel-heading">
              <span>문의 및 의견</span>
            </div>
            <div className="panel-body">
              <form action="" className="qform">
                <div className="content-container">
                  <div className="content-label-container">
                    <label className="content-label">상세내용</label>
                  </div>

                  <div className="contentArea">
                    <textarea
                      className="content-control"
                      id="report_text"
                      name="report_text"
                      rows={3}
                      style={{ height: "160px", resize: "none" }}
                      placeholder="문의사항을 입력해주세요"
                    ></textarea>
                  </div>
                </div>
                <div className="email-container">
                  <div className="control-label-container">
                    <label className="control-label">Email</label>
                  </div>

                  <div className="emailArea">
                    <input
                      className="form-control"
                      id="report_email"
                      name="report_email"
                      value=""
                      placeholder="이메일 입력"
                    />
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="clearfix">
                  <p className="help-block pull-left">
                    <small>좋은 하루 되세요</small>
                    <br />
                    <strong className="etext">
                      기타 문의사항 : aa@naver.com
                    </strong>
                  </p>

                  <button type="submit" className="btn00 QnA-submit">
                    <span className="msg">보내기</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="qna-img-box">
          <img src={qnaImg} alt="" className="qna-img" />
        </div>
      </div>
    </div>
  );
}

export default QnA;
