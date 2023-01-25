import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './QnaBoard.css';


function QnaBoard() {
  return (
    <div className="QnaBoard">
            <div className="qna-con">
        <div className="qna-board-box">
            <h1>
                <p className="qna-board-head">게시판 목록</p>
            </h1>
            <table className="board-table-box">
                <tr className="board-setting">
                    <td >번호</td>
                    <td className="board-name">게시판명</td>
                    <td>등록자</td>
                    <td>등록일</td>
                    <td>사용여부</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td className="board-name">게시글1</td>
                    <td>홍길동</td>
                    <td>2023-01-18</td>
                    <td>Y</td>
                </tr>
    
            </table>
            <div className="qna-btn-box">
                <Link to={'/QnA'} className= "qna-btn">문의하기</Link>
            </div>
        </div>

    </div>
    </div>
  );
}

export default QnaBoard;
