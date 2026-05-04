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