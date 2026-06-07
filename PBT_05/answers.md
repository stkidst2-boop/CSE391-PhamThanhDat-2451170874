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
    Bài B3:
    Lệnh compile SCSS -> CSS: sass scss/style.scss css/style.css

PHẦN C - SUY LUẬN
    Câu C1:   
    Navigation thay đổi:
        Mobile: nav ẩn, chỉ còn hamburger hiện
        Tablet/desktop: hamburger ẩn, nav hiện dưới dạng flex ngang
        Nói cách khác là menu chuyển từ dạng “ẩn/hamburger” trên mobile sang “hiện ngay” trên màn hình lớn
    Lưới content thay đổi:
        Mobile mặc định: 1 cột
        Tablet: 2 cột
        Desktop: 4 cột
    Elements bị ẩn trên mobile: .nav, .sidebar, .ads 
    Font size có thay đổi

    Câu C2: 
    Mobile: sidebar bị ẩn, Form đặt bàn nằm dưới ảnh món ăn
                ┌─────────────────────┐
                │ LOGO          ☰    |
                │ Hotline             │
                ├─────────────────────┤
                │                     │
                │     HERO IMAGE      │
                │                     │
                ├─────────────────────┤
                │      Dish 1         │
                ├─────────────────────┤
                │      Dish 2         │
                ├─────────────────────┤
                │      Dish 3         │
                ├─────────────────────┤
                │      Dish 4         │
                ├─────────────────────┤
                │      Dish 5         │
                ├─────────────────────┤
                │      Dish 6         │
                ├─────────────────────┤
                │    BOOKING FORM     │
                │  Date               │
                │  Time               │
                │  Guests             │
                │  Notes              │
                ├─────────────────────┤
                │     GOOGLE MAP      │
                ├─────────────────────┤
                │       FOOTER        │
                └─────────────────────┘
   
    Tablet: Grid ảnh 2 cột × 3 hàng, bản đồ nằm dưới form
    ┌─────────────────────────────────┐
    │ LOGO               Hotline      │
    ├─────────────────────────────────┤
    │                                 │
    │           HERO IMAGE            │
    │                                 │
    ├──────────────┬──────────────────┤
    │   Dish 1     │    Dish 2        │
    ├──────────────┼──────────────────┤
    │   Dish 3     │    Dish 4        │
    ├──────────────┼──────────────────┤
    │   Dish 5     │    Dish 6        │
    ├─────────────────────────────────┤
    │          BOOKING FORM           │
    ├─────────────────────────────────┤
    │          GOOGLE MAP             │
    ├─────────────────────────────────┤
    │            FOOTER               │
    └─────────────────────────────────┘

    Desktop: Layout 2 cột, Không cần sidebar riêng
    ┌──────────────────────────────────────────────┐
    │ LOGO                            Hotline      │
    ├──────────────────────────────────────────────┤
    │                                              │
    │                HERO IMAGE                    │
    │                                              │
    ├───────────────────┬──────────────────────────┤
    │                   │                          │
    │   Dish Gallery    │      Booking Form        │
    │                   │                          │
    │ ┌───┬───┬───┐     │  Date                    │
    │ │1  │2  │3  │     │  Time                    │
    │ ├───┼───┼───┤     │  Guests                  │
    │ │4  │5  │6  │     │  Notes                   │
    │ └───┴───┴───┘     │                          │
    │                   │                          │
    ├───────────────────┴──────────────────────────┤
    │               GOOGLE MAP                     │
    ├──────────────────────────────────────────────┤
    │                  FOOTER                      │
    └──────────────────────────────────────────────┘

    CSS skeleton:
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    }

    body{
        display:grid;
        grid-template-areas:
            "header"
            "hero"
            "gallery"
            "booking"
            "map"
            "footer";
    }

    header{
        grid-area:header;
    }

    .hero{
        grid-area:hero;
    }

    .gallery{
        grid-area:gallery;
        display:grid;
        grid-template-columns:1fr;
        gap:15px;
    }

    .booking{
        grid-area:booking;
    }

    .map{
        grid-area:map;
    }

    footer{
        grid-area:footer;
    }

    @media (min-width:768px){
        .gallery{
            grid-template-columns:
                repeat(2,1fr);
        }
    }

    @media (min-width:1024px){
        .main-layout{
            display:grid;
            grid-template-columns:
                2fr 1fr;
            gap:20px;
        }

        .gallery{
            grid-template-columns:
                repeat(3,1fr);
        }
    }

    