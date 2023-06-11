import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="inner">
          <div>
            <h2>무통장 입금계좌</h2>
            <div>
              <p>BANK ACCOUNT</p>
              <p>111-222222-33</p>
              <p>예금주 - 전진솔</p>
            </div>
          </div>
          <div>
            <h2>고객센터</h2>
            <div>
              <p>
                영업시간 이외에는 문의 게시판을 이용해주시면 당담자 확인 후 빠른
                답변 도와드리겠습니다.
              </p>
              <p>02-1263-1245</p>
            </div>
          </div>
          <div>
            <h2>공지사항</h2>
            <ul>
              <li>화장품가이드 2023-01-15</li>
              <li>신상품 입고 안내 2023-01-11</li>
              <li>몰 오픈을 축하드립니다. 2023-01-05</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footermenu">
        <div className="inner">
          <ul>
            <li>홈</li>
            <li>매장안내</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </div>
      <div className="address">
        <div className="inner">
          상호 : 헤라 <br />
          주소 : 경기도 성남시 중원구 <br />
          대표전화 : 국번없이 052-1234-4223 대표이사 : 전진솔 개인정보관리자 :
          헤라 사업자 등록번호 : 102-12-12345 <br />
          copyright(c) Sory Dory, all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
