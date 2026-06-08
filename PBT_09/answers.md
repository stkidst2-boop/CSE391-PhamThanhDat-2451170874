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
PHẦN C — DEBUG & PHÂN TÍCH
    Câu C1 — Debug DOM Code
    Lỗi 1:.addEventListener("onclick", function() {
        sửa: onclick thành click
    Lỗi 2: countDisplay = count;
        sửa: countDisplay.textContent = count;
    Lỗi 3: historyList.innerHTML = null;
        sửa: historyList.innerHTML = "";
    Lỗi 4: item.remove;
        sửa: item.remove{}};
    Lỗi 5: count = localStorage.getItem("count");
        sửa: count = Number(localStorage.getItem("count")) || 0;
    Lỗi 6: localStorage.setItem(
                "history",
                historyList.innerHTML
            );
        sửa: historyList.innerHTML = localStorage.getItem("history") || "";
    Lỗi 7: Sau khi load: historyList.innerHTML = ... các <li> được tạo lại từ HTML. Event: li.addEventListener(...)  không còn.
        sửa: historyList.addEventListener(
                "click",
                (e) => {
                    if(e.target.tagName === "LI"){
                        e.target.remove();
                    }
                }
            );

    Câu C2:
    1. Bind event lên 1000 elements riêng lẻ là BAD PRACTICE vì
        + Tốn dung lượng bộ nhớ, mỗi lần gọi addEventListener, JavaScript phải khởi tạo một đối tượng hàm và cấp phát một vùng nhớ riêng cho nó trong RAM. Việc nhân bản 1000 trình lắng nghe sự kiện tương đương với việc ép trình duyệt quản lý 1000 vùng nhớ độc lập. Điều này dễ dẫn đến hiện tượng rò rỉ bộ nhớ nếu các phần tử bị xóa khỏi DOM nhưng hàm lắng nghe không được giải phóng đúng cách.
        + Giảm hiệu năng và khó bảo trì, trình duyệt sẽ tốn nhiều tài nguyên hơn để theo dõi toàn bộ các sự kiện này. Đặc biệt, nếu hệ thống có các tính năng động (như thêm mới dòng, xóa dòng hoặc phân trang), ta lại phải liên tục chạy lại vòng lặp để gắn event cho các phần tử mới, khiến code trở nên rườm rà và dễ phát sinh lỗi logic.
        Cách Event Delegation giải quyết vấn đề:lợi dụng cơ chế Event Bubbling trong JavaScript. Khi một sự kiện (ví dụ: click) xảy ra trên một phần tử con, sự kiện đó không dừng lại mà sẽ "nổi bọt" ngược lên các phần tử cha, ông của nó cho đến khi chạm tới tận cùng là thẻ <html> và đối tượng document.
    2.
     const fragment = document.createDocumentFragment();
     for (let i = 0; i < 1000; i++) {
        const div = document.createElement("div");
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);
    }
    document.body.appendChild(fragment);\
    Giải thích lí do chạy nhanh hơn: DocumentFragment là vùng chứa DOM tạm thời ngoài document, thay vì append 1000 phần tử trực tiếp vào DOM gây nhiều lần reflow, ta append vào Fragment trước rồi đưa Fragment vào DOM một lần duy nhất. Điều này giảm số lần cập nhật layout và tăng hiệu năng render.