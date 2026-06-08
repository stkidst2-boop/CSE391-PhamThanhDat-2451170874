# PBT_09: DOM MANIPULATION & EVENTS
Bộ bài tập frontend gồm 4 ứng dụng web đơn giản, xây dựng với HTML, CSS và JavaScript thuần.

## 📂 Cấu Trúc Thư Mục Dự Án

```text
PBT_09/
├── form_validator/        Form đăng ký với kiểm tra dữ liệu đầu vào.
│   ├── app.js
│   ├── index.html
│   └── style.css
├── keyboard_app/          Ứng dụng bắt sự kiện phím bấm
│   ├── app.js
│   ├── index.html
│   └── style.css
├── product_catalog/       Danh mục sản phẩm tích hợp bộ lọc tìm kiếm nâng cao
│   ├── app.js
│   ├── index.html
│   └── style.css
├── todo_app/              Ứng dụng quản lý công việc (Thêm, Sửa, Xóa)
│   ├── app.js
│   ├── index.html
│   └──  style.css
├──  screenshots/          Thư mục lưu trữ hình ảnh minh họa giao diện kết quả
├──  video/                Thư mục chứa video quay lại quá trình hoạt động demo
├──  answers.md            Câu trả lời lí thuyết
└──  README.md             Tài liệu hướng dẫn tổng quan

##🔧 Hướng dẫn chạy

Mỗi ứng dụng là một trang web tĩnh. Có thể mở trực tiếp file `index.html` trong thư mục ứng dụng bằng trình duyệt.

Nếu dùng máy chủ cục bộ (ví dụ `Live Server` trong VS Code), mở thư mục ứng dụng và khởi chạy server để xem.

## Chi tiết từng ứng dụng

### 1.📑 Form Validator (`form_validator/`)

- Tên trang: `Register Form`
- Kiểm tra:
  - Tên hợp lệ (2–50 ký tự)
  - Email theo định dạng chuẩn
  - Mật khẩu đánh giá Strength (Yếu/Trung bình/Mạnh)
  - Xác nhận mật khẩu khớp
  - Số điện thoại định dạng tự động và yêu cầu đủ 10 số
- Nút `Register` chỉ bật khi toàn bộ trường hợp lệ.
- Hiển thị modal xác nhận khi đăng ký thành công.

### 2.⌨️ Keyboard App (`keyboard_app/`)

- Tên trang: `Keyboard Navigation`
- Thao tác:
  - `←` / `→` để chuyển ảnh
  - Số `1`–`9` để nhảy tới ảnh tương ứng
  - `Space` để bật/tắt slideshow
  - `Ctrl+K` mở Command Palette
  - `Esc` đóng Command Palette
- Command Palette hỗ trợ tìm kiếm và thực thi lệnh như `Next Image`, `Previous Image`, `First Image`, `Last Image`, `Play Slideshow`, `Stop Slideshow`.

### 3.🛒 Product Catalog (`product_catalog/`)

- Thẻ sản phẩm được tạo động bằng JavaScript.
- Tính năng:
  - Tìm kiếm theo tên sản phẩm
  - Lọc theo danh mục: Điện thoại, Laptop, Tablet, Phụ kiện
  - Sắp xếp: giá tăng/d giảm, tên, đánh giá
  - Chế độ tối
  - Nút `Thêm giỏ` cập nhật số lượng giỏ hàng
  - Click vào sản phẩm mở modal chi tiết

### 4.📋 Todo App (`todo_app/`)

- Tạo, chỉnh sửa và xóa công việc
- Đánh dấu hoàn thành bằng click vào nội dung công việc
- Lọc công việc theo `All`, `Active`, `Completed`
- Xóa tất cả công việc đã hoàn thành
- Lưu trạng thái todo vào `localStorage` để giữ khi tải lại trang

##✏️ Ghi chú
- Dự án sử dụng JavaScript thuần, không cần build.
- Mỗi ứng dụng gồm một `index.html`, `style.css` và `app.js`.
- Thư mục `screenshots/` và `video/` hiện tại trống, có thể sử dụng để lưu tài liệu minh họa sau này.
