PHẦN A: Kiểm tra đọc hiểu
    Câu A1: 
    1. Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, những bước xảy ra là:
        1. Request xuất phát từ laptop đi qua router wifi trong phòng
        2. Qua nhà mạng Viettel (chạy xuyên cáp quang dưới đáy Thái Bình Dương)
        3. Đến data center của Shopee ở nơi rất xa
        4. Server xử lý: "Bạn muốn xem các sản phẩm"
        5. Response chạy ngược lại: cáp quang → Viettel → router → laptop
        6. Trình duyệt nhận response và render HTML content cho

    2. (Trong folder Screenshot)
        *Khoanh xanh là status code của request đầu tiên
        *Khoanh cam là tổng thời gian load trang
        *Dòng xanh là 1 request trả về file css

    Câu A2:  Semantic HTML
    4 lỗi semantic cần sửa lại:
    - Dùng nhiều div mà không dùng thẻ semantic
    - Tiêu đề sản phẩm không dùng heading 
    - Menu không có cấu trúc danh sách
    - Ảnh không có Alt
    - Không dùng Article cho "product"
    Sửa lại hoàn chỉnh:   
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <ul>
            <li>
            <a href="/">Trang chủ</a>
            </li>
            <li>
            <a href="/products">Sản phẩm</a>
            </li>
        </ul>
    </nav>
</header>
<main>
    <article class="product">
        <h1>iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro chính hãng">
    </article>
</main>
<footer>
    <p>© 2026 ShopTLU</p>
</footer>

    Câu A3: Block and Line
    Hộp 1 (Đây là phần tử block nó sẽ luôn bắt đầu từ dòng mới và chiếu chiều rộng nhiều nhất có thể)
    Text A Text B (Đây là phần tử inline không xuống dòng)
    Hộp 2 (Đây là block, xuống dòng riêng)
    Text C Text D (span và strong đều inline, tuy nhiên strong thì in đậm text D )
    Hộp 3 (block, xuống dòng riêng)

    Câu A4: Table
    Sự khác nhau giữa 3 thẻ:
    - <thead>: Đầu bảng, chứa hàng tiêu đề
    - <tbody>: Thân bảng, chứa liệu chính
    - <tfoot>: Chân bảng, chứa tổng kết 
    Không nên dùng vì: 
    - Table sinh ra cho dữ liệu dạng bảng không phải bố cục trang nên dẫn đến SEO, accessibility, hiệu năng và khả năng bảo trì đều kém.
    - Trình duyệt phải tính toàn bộ bảng trước khi vẽ ổn định nên hiệu năng render kém hơn
    - HTML5 cung cấp các thẻ để xây dựng bố cục nếu sử dụng table thì sẽ phá vỡ đi tiêu chuẩn
    - Những người khiếm thị hoặc những người truy cập website bằng DTDD hay PDA sẽ không được hiển thị đúng

PHẦN B — THỰC HÀNH CODE
    


