import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div className="information mb-5" name="test5">
            <div className="information__content" id="information">
              <img
                style={{ height: 120, width: "100%" }}
                src="./img/back-news.jpg"
                alt
              />
              <div className="d-flex">
                <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="dienAnh-tab"
                      data-toggle="tab"
                      href="#dienAnh"
                      role="tab"
                      aria-controls="dienAnh"
                      aria-selected="true"
                    >
                      Điện Ảnh 24h
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="review-tab"
                      data-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="khuyenMai-tab"
                      data-toggle="tab"
                      href="#khuyenMai"
                      role="tab"
                      aria-controls="khuyenMai"
                      aria-selected="false"
                    >
                      Khuyến Mãi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dienAnh"
                  role="tabpanel"
                  aria-labelledby="dienAnh"
                >
                  <div className="infor">
                    <div className="infor__content infor1 mb-3">
                      <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                        <img
                          src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                          chiếu
                        </h5>
                      </a>
                      <p>
                        Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc
                        bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi
                        sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong
                        một khung hình để ăn mừng thành tích ấn tượng{" "}
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor2 mb-3">
                      <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                        <img
                          src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                          PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT...
                        </h5>
                      </a>
                      <p>
                        Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
                        thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng
                        VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor3 mb-3">
                      <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                        <img
                          src="./img/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                          Antebellum: Bẫy Thực...
                        </h5>
                      </a>
                      <p>
                        Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                        mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự
                        tham gia của nhà sản xuất{" "}
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor4 mb-3">
                      <a href="https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo">
                        <img
                          src="./img/ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!
                        </h5>
                      </a>
                      <p>
                        Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to
                        Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán
                        Đảo (Train to Busan{" "}
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor5 mb-3">
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher...
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng...
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                            đình...
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/goc-dien-anh/7948-gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="infor__xemThem collapse" id="infor__xemThem">
                    <div className="infor">
                      <div className="infor__content infor1 mb-3">
                        <a href="https://tix.vn/goc-dien-anh/7945-kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu">
                          <img
                            src="./img/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                            Chiêu
                          </h5>
                        </a>
                        <p>
                          Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp
                          tục tham gia phần tiếp theo của Gái già lắm chiêu với mái
                          tóc được cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ
                          là mỹ nhân tiếp theo nối gót hai đàn chị là Diễm My 9X và
                          Ninh{" "}
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor2 mb-3">
                        <a href="https://tix.vn/goc-dien-anh/7944-5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio">
                          <img
                            src="./img/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                            Pinocchio
                          </h5>
                        </a>
                        <p>
                          Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                          Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục
                          thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy
                          sắc màu nhưng cũng vô cùng mới lạ. Cùng{" "}
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor3 mb-3">
                        <a href="https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam">
                          <img
                            src="./img/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                          </h5>
                        </a>
                        <p>
                          Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                          thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                          tại các thị trường bên{" "}
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor4 mb-3">
                        <a href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan">
                          <img
                            src="./img/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                          </h5>
                        </a>
                        <p>
                          Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                          Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                          nữ thời hiện đại. Điều đó được{" "}
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor5 mb-3">
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Diễn viên đặc biệt của Bằng Chứng Vô Hình
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/goc-dien-anh/7938-pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inforMore mt-5">
                    <button
                      aria-expanded="false"
                      className="xemThem"
                      data-toggle="collapse"
                      data-target="#infor__xemThem"
                    >
                      XEM THÊM
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review"
                >
                  <div className="infor">
                    <div className="infor__content infor1 mb-3">
                      <a href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket">
                        <img
                          src="./img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                        </h5>
                      </a>
                      <p>
                        Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor2 mb-3">
                      <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war">
                        <img
                          src="./img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          Review: Dinh Thự Oan Khuất (Ghost Of War)
                        </h5>
                      </a>
                      <p>
                        Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                        Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor3 mb-3">
                      <a href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh">
                        <img
                          src="./img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                        </h5>
                      </a>
                      <p>
                        Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                        đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                        tộc - nỗi đau gây nhức
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor4 mb-3">
                      <a href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia">
                        <img
                          src="./img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.jpg"
                          alt
                        />
                        <h5 className="my-3">
                          American Sniper - Chính nghĩa hay phi nghĩa?
                        </h5>
                      </a>
                      <p>
                        American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                        của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                        phim chậm rãi đưa người
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor5 mb-3">
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/review-spider-man-into-the-spider-vesre-15886520889426.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            Review: Spider-Man: Into The Spider-Vesre{" "}
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                            giờ lầy lội và hài hước đến thế
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                            hùng Valiant
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="infor__xemThem collapse" id="infor__xemThem">
                    <div className="infor">
                      <div className="infor__content infor1 mb-3">
                        <a href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan">
                          <img
                            src="./img/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân
                            cảm động của Khả Như và Kiều Minh Tuấn
                          </h5>
                        </a>
                        <p>
                          Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                          tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor2 mb-3">
                        <a href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than">
                          <img
                            src="./img/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là
                            tình thân
                          </h5>
                        </a>
                        <p>
                          Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước
                          và cảm xúc về tình cảm gia đình.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor3 mb-3">
                        <a href="https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh">
                          <img
                            src="./img/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                            bệnh hoạn vô hình?
                          </h5>
                        </a>
                        <p>
                          Phiên bản hiện đại của The Invisible Man là một trong những
                          phim kinh dị xuất sắc nhất năm nay.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor4 mb-3">
                        <a href="https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa">
                          <img
                            src="./img/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ
                            đâu xa
                          </h5>
                        </a>
                        <p>
                          Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái
                          kết lại không tương xứng với phần mở đầu hứa hẹn.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor5 mb-3">
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/review/7859-review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu
                              than...
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/review/7858-review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ
                              chưa...
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/review/7857-review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời...
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/review/7852-review-birds-of-prey-man-lot-xac-hoanh-trang-cua-harley-quinn-va-dc"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/review-birds-of-prey-15809871977193.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [Review] Birds of Prey - Màn lột xác hoành tráng của
                              Harley...
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inforMore mt-5">
                    <button
                      aria-expanded="false"
                      className="xemThem"
                      data-toggle="collapse"
                      data-target="#infor__xemThem"
                    >
                      XEM THÊM
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="khuyenMai"
                  role="tabpanel"
                  aria-labelledby="khuyenMai"
                >
                  <div className="infor">
                    <div className="infor__content infor1 mb-3">
                      <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan">
                        <img src="./img/bhd-59k-ve-ca-tuan-16045659414321.jpg" alt />
                        <h5 className="my-3">BHD 59K/VÉ CẢ TUẦN !!!</h5>
                      </a>
                      <p>
                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                        59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor2 mb-3">
                      <a href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve">
                        <img
                          src="./img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                          alt
                        />
                        <h5 className="my-3">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h5>
                      </a>
                      <p>
                        Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                        voucher thanh toán ZaloPay thả ga
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor3 mb-3">
                      <a href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">
                        <img
                          src="./img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.jpg"
                          alt
                        />
                        <h5 className="my-3">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </h5>
                      </a>
                      <p>
                        ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                        chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor4 mb-3">
                      <a href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">
                        <img
                          src="./img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                          alt
                        />
                        <h5 className="my-3">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h5>
                      </a>
                      <p>
                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                        59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                        Vé Phim trên ZaloPay.
                      </p>
                      <div className="cmt">
                        <i className="fa fa-thumbs-up mr-4">1</i>
                        <i className="fa fa-comment" />
                      </div>
                    </div>
                    <div className="infor__content infor5 mb-3">
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                            Tr...
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé
                            Pháp...
                          </h5>
                        </a>
                      </div>
                      <div className="infor5__item mb-3">
                        <a
                          className="d-flex"
                          href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu"
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src="./img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                            alt
                          />
                          <h5 className="ml-3">
                            [Mega GS] Một đoá hoa thay ngàn lời yêu
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="infor__xemThem collapse" id="infor__xemThem">
                    <div className="infor">
                      <div className="infor__content infor1 mb-3">
                        <a href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
                          <img
                            src="./img/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim
                            Thang
                          </h5>
                        </a>
                        <p>
                          123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao
                          dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor2 mb-3">
                        <a href="https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs">
                          <img src="./img/sinh-nhat-mega-gs-15663933683466.jpg" alt />
                          <h5 className="my-3">Sinh Nhật Mega GS</h5>
                        </a>
                        <p>
                          Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta
                          lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor3 mb-3">
                        <a href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua">
                          <img
                            src="./img/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
                          </h5>
                        </a>
                        <p>Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.</p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor4 mb-3">
                        <a href="https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang">
                          <img
                            src="./img/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
                            alt
                          />
                          <h5 className="my-3">
                            [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
                          </h5>
                        </a>
                        <p>
                          Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành
                          tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.
                        </p>
                        <div className="cmt">
                          <i className="fa fa-thumbs-up mr-4">1</i>
                          <i className="fa fa-comment" />
                        </div>
                      </div>
                      <div className="infor__content infor5 mb-3">
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [123Phim] Bạn Là Fan Cứng Marvel?
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng
                              Vui
                            </h5>
                          </a>
                        </div>
                        <div className="infor5__item mb-3">
                          <a
                            className="d-flex"
                            href="https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve"
                          >
                            <img
                              style={{ width: 50, height: 50 }}
                              src="./img/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg"
                              alt
                            />
                            <h5 className="ml-3">
                              Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inforMore mt-5">
                    <button
                      aria-expanded="false"
                      className="xemThem"
                      data-toggle="collapse"
                      data-target="#infor__xemThem"
                    >
                      XEM THÊM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
