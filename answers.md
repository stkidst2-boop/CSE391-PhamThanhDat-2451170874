PHẦN A — ĐỌC HIỂU
    Câu A1 — Grid System
    Kích thước |    <768px     | 768px - 991px | ≥ 992px
    số cột     |    1 cột      |     2 cột     |  4 cột
    box layout | Xếp chồng dọc |   2x2 grid    | 1 hàng ngang
    col-md-6 nghĩa là trên các thiết bị có độ rộng màn hình >= 768px, phần tử này sẽ chiếm 
    6/12 cột
    không cần viết col-sm-12 vì trong Bootstrap, các class col-* mặc định có chiều rộng 100% (col-12) nếu không có class nào khác chỉ định cho breakpoint nhỏ hơn, md là breakpoint tiếp theo sau sm và mặc định, nên col-12 là giá trị mặc định cho các màn hình dưới 768px

    Câu A2 — Utilities & Components
    1. Giải thích class d-none d-md-block:
        d-none: Ẩn phần tử trên tất cả các kích thước màn hình (display: none)
        d-md-block: Hiển thị phần tử dưới dạng block từ màn hình ≥ 768px
        =>Phần tử sẽ bị ẩn trên màn hình nhỏ (Mobile < 768px) và hiển thị từ màn hình Medium trở lên
    2. 5 spacing utilities (margin/padding)
    mt-3: margin-top với mức độ 3 (mặc định là 1rem)
    px-4: padding-left với mức độ 4 (mặc định là 1.5rem)
    mb-auto: margin-bottom: auto!important (thường dùng trong flexbox để đẩy phần tử)
    pt-5: padding-top với mức độ 5 (3rem)
    ms-2`: margin-start (margin-left trong LTR) với mức độ 2 (0.5rem)
    3. Sự khác nhau giữa .container, .container-fluid, .container-md
        .container: Có chiều rộng cố định (fixed width) thay đổi theo từng breakpoint\
        .container-fluid: Luôn chiếm 100% chiều rộng màn hình ở mọi breakpoint
        .container-md: Chiếm 100% chiều rộng cho đến khi đạt breakpoint `md` (768px)

PHẦN B — THỰC HÀNH
PHẦN C — PHÂN TÍCH
    Câu C1 — Tùy biến Bootstrap
    1. Mốn đổi màu $primary từ xanh mặc định sang #E63946
     Cần công cụ: Node.js, npm, và một trình biên dịch SASS
     Modify file theo quy trình sau:
        Cài đặt bootstrap qua npm: npm install bootstrap
        Tạo file SASS tùy chỉnh
        Định nghĩa lại biến trước khi import Bootstrap:
            $primary: #E63946;
            @import "node_modules/bootstrap/scss/bootstrap";
        Biên dịch file custom.scss sang custom.css để sử dụng
    2. KHÔNG nên override trực tiếp .btn-primary { background: red; } mà nên dùng SASS variables vì nếu override trực tiếp .btn-primary, ta chỉ đổi màu nút bấm. Nếu dùng SASS variables, các thành phần khác dùng màu $primary như badges, links, borders, background utilities sẽ tự động cập nhật theo, đảm bảo tính nhất quán của giao diện. Ngoài ra, SASS còn giúp tự động tính toán các biến thể màu (hover, active, focus)

    Câu C2:
    So sánh css thuần với bootstrap:
        Số dòng CSS cần viết: Khi dùng css thuần rất nhiều dòng (phải viết media queries, flex/grid rules); khi dùng bootstrap thì cực ít vì chỉ cần dùng classes có sẵn 
        Thời gian phát triển: Khi dùng css thuần thời gian phát triển chậm;; khi dùng bootstrap thì lại rất nhanh do layout chuẩn hóa sẵn
        Khả năng tùy biến: Với CSS thì có khả năng vô hạn, linh hoạt tuyệt đối; đối với Bootstrap nó lại có giới hạn 
        Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?
            + NÊN dùng khi: cần làm prototype nhanh, các dự án Dashboard/Admin, hoặc dự án cần sự nhất quán và không yêu cầu thiết kế quá đặc thù, sáng tạo
            + KHÔNG NÊN dùng khi: dự án yêu cầu bộ nhận diện thương hiệu độc bản (unique design), UI cực kỳ phức tạp hoặc yêu cầu tối ưu dung lượng file CSS