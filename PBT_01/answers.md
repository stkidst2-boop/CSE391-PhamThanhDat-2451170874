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
    Bài B1 — Trang Profile cá nhân
    Bài B2 — Trang Sản phẩm E-Commerce
    Bài B3 — Debug HTML
<!DOCTYPE>
<html>
<head>
    <title>Trang web
    <meta charset="utf8">
</head>
<body>
    <h1>Welcome to ShopTLU<h1>
    
    <header>
        <nav>
            <a href="home">Trang chủ<a>
            <a href="products">Sản phẩm</a>
        </nav>
    </header>
    
    <main>
        <section>
            <h3>Sản phẩm hot</h3>
            <img src=iphone.jpg>
            <p>iPhone 16 Pro</p>
            <p>Giá: <b>25.990.000đ</p></b>
        </section>
        
        <section>
            <h3>Thông tin</h3>
            <table>
                <tr>
                    <td>Tên</td>
                    <td>Giá</td>
                </tr>
                <tr>
                    <td>iPhone</td>
                    <td>25tr</td>
                </tr>
            </table>
        </section>
    </main>
    
    <main>
        <p>Sidebar content</p>
    </main>
    
    <footer>
        <p>Copyright 2026
    </footer>
</body>  


    Lỗi 1: Dòng 70 - Sai DOCTYPE - thêm html trong <!DOCTYPE>
    Lỗi 2: Dòng 71 - Thiếu lang - Thêm lang ="vi" trong <html>
    Lỗi 3: Dòng 73 - Thiếu thẻ đóng title - thêm </title>
    Lỗi 4: Dòng 74 - Khai báo bộ mã kí tự trong meta charset sai - sửa "utf8" -> "UTF-8"
    Lỗi 5: Dòng 77 - Sai thẻ đóng h1 - sửa thẻ đóng thành </h1>
    Lỗi 6: Dòng 81 - Sai thẻ đóng và link không đúng - sửa "home" -> "#home" và <a> -> </a>
    Lỗi 7: Dòng 82 - Link không đúng - sửa "products" -> "#products"
    Lỗi 8: Dòng 89 - Sai cú pháp trong thẻ img và thiếu alt để mô tả ảnh - cho ảnh vào trong " " và thêm alt "mô tả"
    Lỗi 9: Dòng 91 - Sai thứ tự đóng thẻ - thẻ đóng </b> phải trước </p>
    Lỗi 10: Dòng 96 - Sai semantic, table không có thead và tbody - thêm 2 thẻ <thead></thead> và <tbody></tbody>
    Lỗi 11: Dòng 98 - Dùng td cho header - sửa lại thành <th> tương tự dòng 99
    Lỗi 12: Dòng 109 - Dùng thừa sai 1 thẻ main - sửa thành aside
    Lỗi 13: Dòng 114 - Thiếu thẻ đóng p - thêm </p>
    Lỗi 14: Dòng 117 - thiếu thẻ đóng html - thêm </html>

    Bài B4 - Phân tích trang web thật
    1. 3 thẻ semantic html5 mà trang đó dùng là:
        - thẻ header ở đầu trang
        - thẻ h1 trong body
        - thẻ footer ở cuối trang
       Thẻ không dùng đúng semantic:
        - dùng <div class="body-home"> thay vì <main>
    2. Tại trang chủ web không có <table> mà chỉ có ở trong sản phẩm chi tiết
        - Table đó không hiện nội dung gì
        - Có dùng <tbody> nhưng không dùng <thead>
    3. Form đó có:
        -action = "/tim-kiem"
        -method không khai báo
        Input types được dùng :
        - input type="text"
        - button type="submit"
    
    PHẦN C — SUY LUẬN
    Câu C1: 
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Demo</title>
</head>
<body>
    <header> <!--Vì đây là đầu trang-->
        <nav aria-label="Main navigation"> <!--vì đây là điều hướng chính-->
            <ul> <!-- ul vì danh sách menu không có thứ tự -->
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/dien-thoai">Điện thoại</a></li>
            </ul>
        </nav>
    </header>

    <main> <!--main chứa toàn bộ nội dung chính-->
        <nav aria-label="breadcrumb"> <!--nav vì đây là điều hướng-->
            <ol> <!--ol vì breadcrumb có thứ tự cấp bậc-->
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/dien-thoai">Điện thoại</a></li>
                <li aria-current="page">Xiaomi 17</li> <!--trang hiện tại-->
            </ol>
        </nav>

        <section> <!--Vì đây là một nhóm nội dung-->
            <h2>Xiaomi 17</h2>
            <figure> <!--Ảnh chính-->
                <img src="https://placehold.co/200x300" alt="Ảnh sản phẩm chính">
                <figcaption>Ảnh sản phẩm chính</figcaption>
            </figure>

            <div> <!--để chứa các ảnh phụ-->
                <img src="https://placehold.co/150x200" alt="Ảnh sản phẩm 1">
                <img src="https://placehold.co/150x200" alt="Ảnh sản phẩm 2">
                <img src="https://placehold.co/150x200" alt="Ảnh sản phẩm 3">
                <img src="https://placehold.co/150x200" alt="Ảnh sản phẩm 4">
            </div>
        </section>

        <section> <!--vì đây là nhóm thông tin sản phẩm-->
            <h1>Sản phẩm chi tiết</h1> <!-- h1 vì là tiêu đề chính của trang -->
            <p>Giá: <strong>...</strong></p> <!--strong để nhấn mạnh giá-->

            <div>
                <span>★★★★☆</span> <!--Vì nội dung inline-->
            </div>

            <section>
                <h2>Mô tả sản phẩm</h2>
                <p>Chi tiết mô tả sản phẩm...</p>
            </section>
        </section>

        <section>
            <h2>Thông số kỹ thuật</h2>
            <table> <!--vì đây là mô tả thông số dạng bảng-->
                <thead> <!--phần tiêu đề bảng-->
                    <tr>
                        <th>Thông số</th>
                    </tr>
                </thead>
                <tbody> <!--phần nội dung-->
                    <tr>
                        <th>Màn hình</th>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th>Pin</th>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Đánh giá</h2>
            <article> <!--Mỗi đánh giá là 1 article độc lập-->
                <h3>Người dùng A</h3>
                <p>Sản phẩm rất tốt</p>
            </article>

            <article>
                <h3>Người dùng B</h3>
                <p>Chất lượng ổn</p>
            </article>
        </section>

    </main>

    <aside> <!--Sidebar: Sản phẩm tương tự-->
        <h2>Sản phẩm tương tự</h2>
        <article>
            <h3><a href="#">Vivo X300 Ultra</a></h3> <!--Dẫn tới sản phẩm khác-->
        </article>

        <article>
            <h3><a href="#">Samsung Galaxy S24 Ultra</a></h3>
        </article>
    </aside>

    <footer> <!--Chân trang-->
        <p>©Copyright</p> <!--Thông tin bản quyền, liên hệ...-->
    </footer>
</body>
</html>

    Câu C2:
        Việc chỉ dùng <div> cho mọi thứ rồi thêm class không phải lựa chọn hoàn hảo mà nó còn gây ra 1 số hệ quả về mặt kĩ thuật ví dụ như:
        Về Seo, các công cụ tìm kiếm như Google ưu tiên nội dung được đánh dấu bằng thẻ semantic, <header>, <nav>, <article>, <footer> giúp bot hiểu rõ cấu trúc trang, từ đó lập chỉ mục chính xác hơn. Nếu chỉ dùng <div>, công cụ tìm kiếm khó phân biệt đâu là nội dung chính, đâu là menu, dẫn đến kết quả SEO kém
        Về Accessibility, những người khiếm thị cần sử dụng trình đọc màn hình dựa vào các thẻ như <nav>, <main>, <header> để định hướng trang web. Nếu tất cả chỉ là <div>, họ sẽ gặp khó khăn trong việc hiểu bố cục và truy cập thông tin
        VD cụ thể semantic HTML giúp ích: Một bài viết blog dùng <article> và <section> sẽ được Google hiển thị rõ ràng trong kết quả tìm kiếm với tiêu đề, đoạn mô tả, thậm chí cả breadcrumb. Nếu chỉ dùng <div>, bài viết đó có thể bị coi như một khối nội dung chung, không nổi bật.
        Trường hợp thực tế mà <div> vẫn phù hợp: Khi cần tạo container thuần layout như chia grid, flex, wrapper để nhóm các phần tử mà không mang ý nghĩa ngữ nghĩa
        