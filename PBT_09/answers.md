PHẦN A — KIỂM TRA ĐỌC HIỂU 
    Câu A1 - DOM TREE
    1.Vẽ DOM tree (sơ đồ cây) cho HTML 
        div#app
        ├── header
        │   ├── h1
        │   │   └── "Todo App"
        │   └── nav
        │       ├── a.active
        │       │   └── "All"
        │       ├── a
        │       │   └── "Active"
        │       └── a
        │           └── "Completed"
        │
        └── main
            ├── form#todoForm
            │   ├── input#todoInput
            │   └── button
            │       └── "Add"
            │
            └── ul#todoList
                ├── li.todo-item
                │   └── "Learn HTML"
                │
                └── li.todo-item.completed
                    └── "Learn CSS"
    2. Viết querySelector cho mỗi yêu cầu:
        Chọn thẻ h1: document.querySelector("h1")
        Chọn input trong form: document.querySelector("#todoForm input")
        Chọn tất cả .todo-item:	document.querySelectorAll(".todo-item")
        Chọn link active: document.querySelector("nav a.active")
        Chọn li đầu tiên trong todoList: document.querySelector("#todoList li:first-child")
        Chọn tất cả a trong nav: document.querySelectorAll("nav a")
    
    Câu A2 — innerHTML vs textContent
    - innerHTML: Trả về hoặc thay đổi toàn bộ cú pháp HTML bên trong phần tử (bao gồm cả các thẻ tag như <div>, <span>, <strong>,...). Trình duyệt sẽ phải phân tích (parse) chuỗi này thành các node DOM thực sự.
    - textContent: Chỉ lấy hoặc thay đổi nội dung văn bản thuần túy (raw text) bên trong phần tử và tất cả các phần tử con của nó. Mọi ký tự đặc biệt của HTML (như <, >) khi đưa vào đây đều bị biến thành chuỗi text thông thường và không bị trình duyệt thực thi.
    - Dùng innerHTML khi chủ động muốn chèn một cấu trúc HTML phức tạp (do chính bạn kiểm soát, không phải từ người dùng) vào trang web.
        VD: Render nhanh một cấu trúc danh sách hoặc bảng từ một mảng dữ liệu có sẵn trong code hệ thống.
            const menuContainer = document.querySelector("#menu");
            menuContainer.innerHTML = `
                <ul>
                    <li><a href="/home">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                </ul>
            `;
    - Dùng textContent khi bạn chỉ muốn cập nhật chữ, số, thông báo mà không cần định dạng phức tạp.
        VD: Thay đổi tên hiển thị của user
            document.querySelector(".username").textContent = "Phạm Thành Đạt";

    Câu A3 — Event Bubbling
        Thứ tự console.log:BUTTON -> INNER -> OUTER
        Nếu bỏ comment e.stopPropagation()→ output thay đổi:chỉ có BUTTON

PHẦN B — THỰC HÀNH CODE
