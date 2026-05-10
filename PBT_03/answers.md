PHẦN A — KIỂM TRA ĐỌC HIỂU
    Câu A1 — 3 Cách nhúng CSS
        • Inline CSS — trong attribute style
           VD: <h1 style="color: red; font-size: 14px;">Xin chào</h1>
           Ưu điểm: Nhanh tiện, không cần file riêng, dùng để ghi đè tạm thời, có độ ưu tiên cao nhất
           Nhược điểm: Không tái sử dụng cho phần tử khác, khó maintain và bảo trì
           Nên dùng khi: Test nhanh, thay đổi định dạng cho duy nhất 1 phần tử
        • Internal CSS — trong thẻ <style>
            VD: <head>
                    <style>
                        h1 { color: blue; font-size: 14px; }
                    </style>
                </head>
            Ưu điểm: Gọn hơn Inline, dễ quản lý, không cần tạo file .css riêng
            Nhược điểm: Chỉ có tác dụng trong duy nhất trang đó, không tái sử dụng cho nhiều page
            Nên dùng khi: Làm 1 website nhỏ chỉ 1 trang, tùy chỉnh cho 1 trang cụ thể mà trang khác không cần, làm bài tập
        • External CSS — file riêng  
            VD: <head>
                    <link rel = "stylesheet" href = "styles.css">
                </head>
                <body>
                    <p>Xin chào</p>
                </body>
                *styles.css*
                h1 {color: blue; font-size: 18px;}
            Ưu điểm: Chuyên nghiệp, tái sử dụng cho nhiều trang, dễ bảo trì
            Nhược điểm: Có thể lỗi nếu link sai, trình duyệt mất thêm một yêu cầu để tải file css về
            Nên dùng khi: Làm dự án thật, website nhiều trang, code nhiều và cần maintain lâu dài
    
    Câu A2 — CSS Selectors — Dự đoán kết quả
        1. h1                           -> Chọn: ShopTLU 
        2. .price                       -> Chọn: 25.990.000đ, 45.990.000đ
        3. #app header                  -> Chọn: ShopTLU, Home, Products, About
        4. nav a:first-child            -> Chọn: Home
        5. .product.featured h2         -> Chọn: iPhone 16 
        6. article > p                  -> Chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...
        7. a[href="/"]                  -> Chọn: Home
        8. .top-bar.dark h1             -> Chọn: ShopTLU   
    
    Câu A3 - Box Model — Tính toán kích thước
        *Trường hợp 1:
            Chiều rộng hiển thị: 450px
            không gian chiếm trên trang: 470px
        *Trường hợp 2:
            Chiều rộng hiển thị: 400px
            Kích thước content thực tế: 350px
            Không gian chiến trên trang: 420px
        *Trường hợp 3:
            Khoảng cách giữa box-a và box-b = 40px
            Vì Margin dọc giữa 2 block element gộp lại và lấy cái lớn hơn
        Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 30px

    Câu A4 — Specificity (Độ ưu tiên)
    1. Tính specificity score cho mỗi rule
        rule A: 0,0,1
        rule B: 0,1,0
        rule C: 1,0,0
        rule D: 0,1,1
    2. Element có màu đỏ 
    3. Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu cam
    4. Nếu Rule A thêm !important, element có màu đen vì nó có thứ tự ưu tiên hơn những cái còn lại

PHẦN B — THỰC HÀNH CODE
    Bài B1 — Style trang Profile
    