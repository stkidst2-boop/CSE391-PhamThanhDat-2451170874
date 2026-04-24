PHẦN A — KIỂM TRA ĐỌC HIỂU
    Câu A1 — Input Types
        1. type="email" -> Ô nhập text, tự kiểm tra có @ -> Dùng cho form đăng ký
        2. type="password" -> Ô nhập ẩn các ký tự để bảo mật thông tin -> Dùng cho ô nhập mật khẩu đăng nhập hoặc mã PIN thanh toán.
        3. type="number" -> Ô nhập số, có nút tăng/giảm, tự chặn nhập chữ, có thể giới hạn min/max -> Dùng cho nhập số lượng sản phẩm
        4. type="tel" -> Ô SĐT -> Dùng để nhập số điện thoại người mua hoặc người nhận hàng
        5. type="date" -> Hiển thị lịch chọn ngày, tự đảm bảo form ngày hợp lệ -> Dùng để khách hàng chọn ngày hẹn giao hàng hoặc nhập ngày sinh
        6. type="color" -> Hiển thị bảng chọn màu -> Dùng để chọn màu sản phẩm khi tùy chỉnh quà tặng hoặc lọc sản phẩm theo màu
        7. type="range" -> Hiển thị thanh kéo -> Dùng làm bộ lọc khoảng giá để tìm kiếm sản phẩm
        8. type="file" -> Nút bấm cho phép chọn tệp tin từ thiết bị; có thể giới hạn định dạng -> Dùng để upload ảnh đánh giá sản phẩm
        9. type="url" -> Ô nhập link, kiểm tra định dạng http:// hoặc https:// -> Dùng cho nhập link sản phẩm hoặc web
        10. type="search" -> Giống ô text nhưng có thêm nút "X" để xóa nhanh và tối ưu phím "Tìm kiếm" trên bàn phím ảo -> Dùng cho thanh tìm kiếm sản phẩm trên toàn hệ thống

    Câu A2 — Validation Attributes
        TH1: form không submit được vì required là thuộc tính không được để trống
        TH2: không submit được vì type = "email" -> trình duyệt kiểm tra định dạng @
        TH3: không submit được vì nhập ngoài phạm vi giá trị
        TH4: không submit được vì giá trị nhập không khớp yêu cầu là 10 số
        TH5: không submit được vì nhập ký tự chưa đạt độ dài tối thiểu 
        - So sánh thực tế với dự đoán là đúng

    Câu A3 — Accessibility
        1. <label for="email"> quan trọng cho người dùng screen reader vì nó hiển thị cho người dùng biết ô này dùng để làm gì
        2. Dùng fieldset + legend để nhóm các input liên quan thành 1 nhóm
            VD: <fieldset>
                    <legend>Thông tin giao hàng</legend>
                    <label for="street">Đường:</label>
                    <input type="text" id="street" name="street">
                </fieldset>
        3. aria-label dùng khi cần mô tả chức năng hoặc nội dung của phần tử cho trình đọc màn hình, đặc biệt khi phần tử không có văn bản hiển thị
           KHÔNG nên dùng aria-label khi đã có <label> vì nó có thể gây nhầm lẫn cho các thuộc tính và khiến nội dung khó hiểu, hay trùng nội dung dẫn đến dư thừa mã nguồn

    Câu A4 — Media   
        1. loading="lazy" trên thẻ <img> dùng để tải ảnh khi user scroll đến mà không hiện ngay khi mở trang, nó giúp trang load nhanh hơn. Tuy nhiên không nên dùng khi ảnh cần hiện ngay ở đầu trang (ảnh hero, logo, ảnh đầu tiên user thấy)
        2. Nên cung cấp nhiều <source> trong thẻ <video> vì không phải trình duyệt nào cũng hỗ trợ mọi định dạng video, nếu khai báo nhiều nguồn trình duyệt sẽ duyệt lần lượt, nguồn 1 không hỗ trợ sẽ duyệt đến nguồn 2. Ba format video phổ biến là mp4, webm, mov
        3. Thuộc tính alt trên <img> dùng để làm mô tả ảnh cho screen reader và khi ảnh lỗi, alt tốt cho 3 trường hợp:
            - Ảnh sản phẩm iPhone 16: alt = "Điện thoai iPhone 16 256GB màu Trắng, nhìn từ phía trước"
            - Ảnh trang trí (decorative): alt = ""
            - Ảnh biểu đồ doanh thu Q1/2026: alt = "Biểu đồ cột doanh thu Quý 1 năm 2026 tăng dần từ tháng 1 đến tháng 3"

    Câu A5 — So sánh <figure> vs <img>            
        Dùng cách 1 khi ảnh đã đủ nghĩa chỉ với alt hoặc là 1 thành phần giao diện, ảnh minh họa bổ trợ không cần chú thích
            VD: <img source = "https://img.ophim.live/uploads/movies/hoppers-cu-nhay-ky-dieu-thumb.jpg?v=1776843304035" alt = "Hoppers: Cú Nhảy Kỳ Diệu">
        Dùng cách 2 khi ảnh cần chú thích rõ ràng, mô tả là một phần nội dung quan trọng, muốn gắn chặt ảnh + mô tả thành 1 khối
            VD: <figure>
                    <img src="jean.jpg" alt="Quần jean nam">
                    <figcaption>Quần Jean nam trắng, Giá 179.000đ </figcaption>
                </figure>