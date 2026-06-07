PHẦN A - ĐỌC HIỂU
    Câu A1 — Viewport & Mobile-First
    1. <meta name="viewport" content="width=device-width, initial-scale=1.0">
    *Giải thích các thuộc tính:
    + name="viewport": Cho trình duyệt biết đây là cấy hình viewport
    + width=device-width: Trang web sẽ được render theo đúng chiều rộng thiết bị.
    + initial-scale=1.0: Không tự phóng to hay thu nhỏ.
    2. Nếu thiếu thẻ này, iPhone sẽ hiển thị trang web rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.
    3. Sự khác nhau giữa Mobile-First và Desktop-First
    + Mobile-First: Viết CSS cho mobile trước sau đó mở rộng cho màn hình lớn hơn
    VD css cho mobile: 
        .product {
            width: 100%;
        }

        @media (min-width: 768px) {
            .product {
                width: 50%;
            }
        }
    + Desktop-First: Viết CSS cho desktop trước sau đó thu nhỏ cho mobile
    VD css cho desktop:
        .product {
            width: 50%;
        }
        @media (max-width: 768px) {
            .product {
                width: 100%;
            }
        }
    Mobile-First được khuyên dùng vì:
    + Mobile tải ít CSS hơn (mobile chỉ tải mobile styles, không download desktop styles)
    + Buộc bạn ưu tiên nội dung quan trọng trước (content thinking)
    + Google và performance tools đánh giá cao hơn

    Câu A2 - Breakpoints
    + Extra Small: <576px; thiết bị đại diện: điện thoại; lưới sản phẩm nên hiển thị 1 cột
    + Small: >=576px; thiết bị đại diện: điện thoại lớn; lưới sản phẩm nên hiển thị 2 cột
    + Medium: >=768px; thiết bị đại diện: tablet; lưới sản phẩm nên hiển thị 2-3 cột
    + Large: >992px; thiết bị đại diện: Laptop; lưới sản phẩm nên hiển thị 3-4 cột
    + Extra Large: >1200px; thiết bị đại diện: Desktop; lưới sản phẩm nên hiển thị 4 cột
    + Extra Extra Large: >1400px; thiết bị đại diện: màn hình lớn; lưới sản phẩm nên hiển thị 5-6 cột

    Câu A3 - Media Queries
    Chiều rộng màn hình	   .container widt
    375px (iPhone SE)        100% 
    600px                    540px
    800px                    720px
    1000px                   960px
    1400px                   1140px

    Câu A4 - SCSS Basics
    1. Variables ($primary-color)
    Sửa 1 chỗ, tất cả tự đổi
    VD: $primary-color: #3498db;
        .button {
            background: $primary-color;
        }

        css: .button {
                background: #3498db;
              }

        Khi đổi $primary-color: red; toàn bộ project tự cập nhật

    2. Nesting 
    Cho phép viết CSS lồng nhau giống HTML    VD: .navbar {
            background: black;
            a {
                color: white;
            }
        }
    css: 
        .navbar {
            background: black;
        }

        .navbar a {
            color: white;
        }

    3.Mixins 
    Hàm CSS tái sử dụng
    VD: Khai báo mixin
        @mixin flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        Sử dụng
        .hero {
            @include flex-center;
        }
    css sinh ra: 
        .hero {
            display: flex;
            justify-content: center;
            align-items: center;
        }

    4. @extend (Inheritance)
    Cho phép kế thừa style
    VD: .btn {
            padding: 10px;
            border-radius: 5px;
        }

        .btn-primary {
            @extend .btn;
            background: blue;
        }
    css sinh ra: 
        .btn,
        .btn-primary {
            padding: 10px;
            border-radius: 5px;
        }

        .btn-primary {
            background: blue;
        }

PHẦN B - THỰC HÀNH CODE
