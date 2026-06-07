PHẦN A - ĐỌC HIỂU 
    Câu A1 — 5 Loại Positioning
    + Static:
        Vẫn chiếm chỗ trong flow?: Có
        Tham chiếu vị trí: Theo flow bình thường 
        Cuộn theo trang?: Có
        Use case: Bố cục mặc định
    + relative:
        Vẫn chiếm chỗ trong flow?: Có
        Tham chiếu vị trí: So với vị trí gốc của chính nó
        Cuộn theo trang?: Có
        Use case: Làm anchor cho absolute con, dịch nhẹ
    + absolute: 
        Vẫn chiếm chỗ trong flow?: Không
        Tham chiếu vị trí: Bám vào cha RELATIVE gần nhất
        Cuộn theo trang?: Có
        Use case: Badge, dropdown, tooltip, overlay
    + fixed:
        Vẫn chiếm chỗ trong flow?: Không
        Tham chiếu vị trí: Viewport
        Cuộn theo trang?: Không
        Use case: Chat button, cookie banner, header cố định
    + sticky:
        Vẫn chiếm chỗ trong flow?: Có
        Tham chiếu vị trí: Viewport (khi dính)
        Cuộn theo trang?: Header bám theo khi cuộn
        Use case: Sticky header, sticky table header, sidebar
    *Câu hỏi thêm:
        - absolute sẽ tham chiếu tới body khi không tìm thấy phần tử cha nào có position khác static.
        - absolute tham chiếu parent khi phần tử cha gần nhất có position khác static.
        - Nearest Positioned Ancestor nghĩa là tổ tiên gần nhất có thuộc tính position khác static, được dùng làm hệ tọa độ cho phần tử absolute

PHẦN B - THỰC HÀNH CODE
PHẦN C - SUY LUẬN
    Câu C1 — Flexbox vs Grid: Khi nào dùng gì?
    1. Dùng Flexbox, vì thanh điều hướng là bố cục trục ngang, có lợi thế mạnh trong việc căn chỉnh các phần tử theo hàng và phân bổ khoảng cách
    2. Dùng Grid, vì Đây là bố cục hai chiều (cả hàng và cột) dạng lưới hoàn,khi dùng Grid chỉ cần thiết lập grid-template-columns: repeat(3, 1fr);. Khi có ảnh mới được thêm vào, Grid sẽ tự động đẩy chúng xuống hàng tiếp theo và căn thẳng hàng với các ảnh phía trên mà không cần tính toán phần trăm width hay margin phức tạp như Flexbox.
    3. Dùng Grid, vì nó giúp định hình cấu trúc lớn của trang web rất rõ ràng với grid-template-columns: 1fr 300px và giữ cho cấu trúc trang ổn định ngay cả khi nội dung bên trong thay đổi.
    4. Kết hợp cả hai, vì dùng Grid cho phần cha của Footer để chia đều thành 4 cột (repeat(4, 1fr)) một cách nhanh chóng và chính xác. Dùng Flexbox (flex-direction: column) cho các liên kết bên trong từng cột để xếp chúng theo chiều dọc và dễ dàng căn chỉnh khoảng cách giữa các dòng text.
    5. Dùng Flexbox, vì bố cục chỉ theo một chiều dọc, margin-top: auto đẩy nút xuống cuối card rất dễ. Code ngắn gọn và đúng mục đích của Flexbox.