import React from "react";
import "../page/HomePage.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="brand">nhieubrandvai</div>
        <div className="main-footer">
          <div className="CGVVN">
            <h5>CGV Việt Nam</h5>
            <p>
              <span>Giới thiệu</span>
              <br />
              <span>Tiện ích Online</span>
              <br />
              <span>Thẻ Quà Tặng</span>
              <br />
              <span>Tuyển Dụng</span>
              <br />
              <span>Liên hệ Quảng Cáo CGV</span>
              <br />
            </p>
          </div>
          <div className="dieukhoan">
            <h5>Điều khoản sử dụng</h5>
            <p>
              <span>Điều khoản Chung</span>
              <br />
              <span>Điều khoản Giao dịch</span>
              <br />
              <span>Chính sách thanh toán</span>
              <br />
              <span>Chính sách bảo mật</span>
              <br />
              <span>Câu hỏi thường gặp</span>
              <br />
            </p>
          </div>
          <div className="connect">
            <h5>Kết nối với chúng tôi</h5>
            <div className="brandlogo">
              <span>
                <i
                  className="fa-brands fa-square-facebook fa-2xl"
                  style={{ color: "#2086d5" }}
                />
              </span>
              <span>
                <i
                  className="fa-brands fa-square-instagram fa-2xl"
                  style={{ color: "#f17b5e" }}
                />
              </span>
              <span>
                <i
                  className="fa-brands fa-youtube fa-2xl"
                  style={{ color: "#e81127" }}
                />
              </span>
              <span>
                <i
                  className="fa-brands fa-line fa-2xl"
                  style={{ color: "#35d438" }}
                />
              </span>
            </div>
            <br />
            <div>
              <a
                href="http://online.gov.vn/Home/WebDetails/30270"
                id="bonoivu"
                target="_blank"
              >
                <img
                  src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                  alt=""
                  style={{ width: "140px" }}
                />
              </a>
            </div>
          </div>
          <div className="CSKH">
            <h5>Chăm Sóc Khách Hàng</h5>
            <p>
              Hotline: 1900 6017
              <br />
              Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày <br /> bao gồm cả Lễ
              Tết)
              <br />
              Email hỗ trợ: hoidap@cgv.vn
            </p>
          </div>
        </div>
        {/* <div className="footrepon">
          <div className="dropend header-main2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CGV VIỆT NAM
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  TIỆN ÍCH ONLINE
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  THẺ QUÀ TẶNG
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  LIÊN HỆ QUẢNG CÁO
                </a>
              </li>
            </ul>
          </div>
          <div className="dropend header-main2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ĐIỀU KHOẢN SỬ DỤNG
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  ĐIỀU KHOẢN CHUNG
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ĐIỀU KHOẢN GIAO DỊCH
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CHÍNH SÁCH THANH TOÁN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CHÍNH SÁCH BẢO MẬT
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CÂU HỎI THƯỜNG GẶP
                </a>
              </li>
            </ul>
          </div>
          <div className="dropend header-main2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CHĂM SÓC KHÁCH HÀNG
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  HOT LINE: 1900 0067{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  GIỜ LÀM VIỆC
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EMAIL HỖ TRỢ
                </a>
              </li>
            </ul>
          </div>
          <div className="dropend header-main2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              KẾT NỐI
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  FACEBOOK{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  YOUTUBE
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="bot-footer">
          <div className="logocgv">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-35efc.appspot.com/o/pngegg.png?alt=media&token=228d3479-1f39-46db-8535-d55a0293c49c"
              alt=""
            />
          </div>
          <div className="footext">
            <h5>CÔNG TY TNHH CJ CGV VIETNAM</h5>
            <span>
              Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký
              thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ
              Chí Minh.
            </span>
            <br />
            <span>
              Địa Chỉ:Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14,
              Q.10, TPHCM.
            </span>
            <br />
            <span>Hotline:1900 6017</span>
            <br />
            <span>COPY RIGHT 2017 CJ CGV. ALL RIGTH RESERVED.</span>
            <br />
          </div>
        </div>
        <div className="brick"></div>
      </div>
    </div>
  );
}

export default Footer;
