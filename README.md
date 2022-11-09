- Đẩy n vào mảng (cứ mỗi lần bấm nút thêm hoặc enter thì mảng sẽ được thêm vào số vừa nhập)
- Kiểm tra nếu ô nhập không phải là số thì mặc định là 0
- Xuất mảng ra ô kết quả sau mỗi lần bấm nút


Bài 1: tính tổng số dương
 - Tạo biến sum = 0
 - Lập qua mảng, số nào trong mảng > 0 thì cộng vào biến sum
 - Xuất kết quả của phép tính cộng
 Bài 2: Đếm số dương
 - Dùng hàm của bài 1, thêm biến count vào, mỗi lần lặp là đếm tăng lên 1
 - Dùng return để trả kết quả biến đếm của hàm bài 1
 - Gọi lại hàm của bài 1
 - Xuất kết quả của biến đếm bằng DOM ra html
 Bài 3: Tìm số nhỏ nhất
 - Gán biến min mặc định là mảng đầu tiên (min = a[0]), 
 - Lặp tới cuối mảng, nếu số hiện tại (a[i]) nhỏ hơn biến min thì gán số hiện tại vào min ( min =  a[i] )
 - DOM tới html và xuất kết quả ra màn hình
 Bài 4: Tìm số dương nhỏ nhất
 - Tạo thêm minPS = a[0] vào hàm bài 3
 - Thêm điều kiện a[i] > 0 
 - Trong hàm if xét giá trị của a[i]. Nếu a[i] < minPS thì gán minPS = a[i]
 - Dùng return trả kết quả minPS 
 - Gọi lại hàm bài 3 và DOM kết quả ra màn hình
 Bài 5: Tìm số chẵn cuối cùng
 - Tạo 1 biến result để lưu dữ liệu.
 - Lặp ngược từ cuối mảng (length - 1), cho bước nhảy lớn hơn hoặc bằng 0 
 - nếu số nào chia hết cho 2 thì gán số đó vào biến result
 - Dừng vòng lặp do đã tìm ra số cuối cùng
 Bài 6: Đổi chỗ 2 giá trị
 - Dùng hàm array.includes(x) để tìm xem trong mảng có giá trị x hay không
 - X là giá trị mà người dùng nhập
 - Nếu có thì tạo 1 biến tạm (temp) để lưu trữ số đó ở trong mảng
 - Đổi chỗ biến Y thay thế biến X  mà người dùng muốn đổi thành bằng cách như sau: 
        temp = Y
        Y = X
        X = temp
 - Xuất kết quả của mảng ra ngoài html
 Bài 7: Sắp xếp tăng dần
 - Dùng thuật toán sắp xếp chọn
 - Tạo 2 vòng lặp lòng nhau. Vòng lặp đầu tiên cho lặp đến gần cuối mảng, vòng lặp thứ 2 lặp đến cuối mảng.
 - so sánh mảng thứ a[i] và mảng thứ a[j]
 - Nếu mà mảng a[j] < a[i]
 - Dùng biến tạm như bài 6 để đổi chỗ cho mảng
 - Xuất kết quả cuối cùng của mảng mới ra html
 Bài 8:Tìm số nguyên tố đầu tiên
 - Số nguyên tố là số chia hết cho 1 và cho chính nó
 - Tạo 1 hàm kiểm tra số nguyên tố duyệt từ 2 tới căn bật 2 của số cần xét
 - Nếu số nào chia hết cho các số nhỏ hơn chính nó thì trả về false
 - Ngược lại trả về true
 - Tạo 1 hàm thứ 2 để xét những số đang nằm ở trong mảng, gọi tới hàm kiểm tra số nguyên tố ở trên
 - Tạo 1 biến result để lưu dữ liệu
 - Nếu tìm được số nguyên tố thì  gán giá trị đó vào biến và dừng vòng lặp.
 Bài 9: Đếm số nguyên
  - Tạo biến result để lưu dữ liệu
  - Cho vòng lặp chạy tới cuối mảng
  - Dùng hàm Number.isInterger để kiểm tra số ở trong mảng có phải số nguyên hay không
 - Mỗi lần thấy số nguyên thì tăng biến result lên 1
 - Dom ra html kết quả cuối cùng của result
 Bài 10: So sánh số lượng số âm và số dương
 - Tạo biến Luni đại diện cho số âm, biến solar đại diện cho số dương
 - Cho vòng lặp chạy đến cuối mảng
 - Mỗi lần gặp số nào < 0 thì Luni tăng 1 ngược lại Solar tăng 1
 - Nếu Luni < Solar thì xuất số lượng số Âm < số dương
 - Nếu Lumi > Solar thì xuất số lượng số Âm > Số dương
 - ngược lại thì số âm = số dương
