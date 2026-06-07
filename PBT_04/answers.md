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
    