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
         
