PHẦN A — KIỂM TRA ĐỌC HIỂU
    Câu A1: Dự đoán
        Đoạn 1: undefined
        Đoạn 2: Lỗi ReferenceError không truy cập được trước khi khởi tạo 
        Đoạn 3: Lỗi TypeError không thể gán lại giá trị cho hằng số
        Đoạn 4: [1, 2, 3, 4]
        Đoạn 5: Trong block: 2, ngoài block: 1

    # So sánh và giải thích:
        + Đoạn 1: hiện underfined nhưng không phải lỗi vì cơ chế Hoisting với var, khi JavaScript biên dịch đoạn code này, nó sẽ "kéo" phần khai báo var x; lên trên cùng của scope, nhưng giữ nguyên vế gán = 5 ở phía dưới.
        + Đoạn 2: let cũng bị Hoisting nhưng lại báo lỗi vì nó theo cơ chế Temporal Dead Zone nhưng không được khởi tạo giá trị mặc định, từ đầu block cho đến dòng dòng let y = 10; được gọi là "vùng chết" khi cố tình gọi y trong vùng này sẽ ăn ngay lỗi ReferenceError.
        + Đoạn 3: const báo lỗi vì theo cơ chế Immutable Binding (tính chất của hằng số), vì dùng hằng số cho kiểu dữ liệu nguyên thủy (Primitive - số 15). Lệnh z = 20 là hành vi gán lại giá trị mới (re-assignment) vào vùng nhớ cũ -> Bị cấm hoàn toàn nên xảy ra lỗi
        + Đoạn 4: constr không bị lỗi vì hoạt động theo cơ chế Reference Type (Kiểu dữ liệu tham chiếu), do arr là một Array (kiểu dữ liệu tham chiếu), bản chất const arr chỉ giữ cái địa chỉ ô nhớ của mảng đó. Lệnh arr.push(4) chỉ là chỉnh sửa/thêm bớt nội dung bên trong ô nhớ đó chứ không hề thay đổi địa chỉ của mảng, địa chỉ không đổi nên không xảy ra lỗi
        + Đoạn 5: 2 biến trùng tên nhưng vẫn tồn tại, vì hoạt động theo cơ chế Block Scope, do biến let a = 2 ở bên trong khối là một biến hoàn toàn độc lập, nó tạm thời che khuất (shadowing) biến a = 1 ở bên ngoài. Khi đi ra khỏi dấu }, biến a = 2 lập tức  mất đi, nên lệnh console.log ngoài block vẫn tìm thấy và in ra a = 1 của scope cha

    Câu A2 — Data Types & Coercion
    typeof null -> "object" (Lỗi lịch sử của JS)
    typeof undefined -> "undefined"
    typeof NaN -> "number"
    "5" + 3 -> "53" (Số 3 bị ép kiểu thành chuỗi để nối)
    "5" - 3 -> 2 (Chuỗi "5" bị ép kiểu thành số để thực hiện phép trừ)
    "5" * "3" -> 15 (Cả hai bị ép kiểu thành số)
    true + true -> 2 (true tương đương với 1)
    [] + [] -> "" (Mảng trống chuyển thành chuỗi rỗng)
    [] + {} -> "[object Object]" (Mảng trống là "", Object chuyển thành string)
    {} + [] -> 0 (Trong console, {} có thể bị coi là block trống, còn lại + [] -> 0. Tuy nhiên trong code expression thường là "[object Object]")
    ** Giải thích: "5" + 3 cho ra "53" vì toán tử + được ưu tiên làm toán tử nối chuỗi nếu có một toán hạng là chuỗi. Ngược lại, toán tử - không dùng cho chuỗi nên JS ép kiểu chuỗi "5" về số để tính toán
    - "5" + 3 và "5" - 3 cho kết quả khác nhau vì "5" + 3 cho ra "53" do toán tử + được ưu tiên làm toán tử nối chuỗi nếu có một toán hạng là chuỗi. Ngược lại, toán tử - không dùng cho chuỗi nên JS ép kiểu chuỗi "5" về số để tính toán

    Câu A3 — So sánh == vs === 
    5 == "5": true (Ép kiểu)
    5 === "5": false (Khác kiểu dữ liệu)
    null == undefined: true
    null === undefined: false
    NaN == NaN: false (NaN không bao giờ bằng chính nó)
    0 == false: true
    0 === false: false
    "" == false: true
    - Nên dùng === (Strict Equality) vì để tránh các lỗi logic tiềm ẩn do cơ chế tự động ép kiểu (type coercion) của JS. === kiểm tra cả giá trị và kiểu dữ liệu

    Câu A4 — Truthy & Falsy
    if ("0") console.log("A");: In "A" (Chuỗi không rỗng là Truthy)
    if ("") console.log("B");: Không in (Falsy)
    if ([]) console.log("C");: In "C" (Mảng là object, luôn Truthy)
    if ({}) console.log("D");: In "D" (Object luôn Truthy)
    if (null) console.log("E");: Không in (Falsy)
    if (0) console.log("F");: Không in (Falsy)
    if (-1) console.log("G");: In "G" (Số khác 0 là Truthy)
    if (" ") console.log("H");: In "H" (Chuỗi có khoảng trắng không phải rỗng)

    Câu A5 — Template Literals
    Cách 1: var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
    Cách 2: var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
    Cách 3: var html = `
            <div class="card">
                <h2>${title}</h2>
                <p>${description}</p>
                <span>Giá: ${price}đ</span>
            </div>
            `;
            