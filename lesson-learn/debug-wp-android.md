# HƯỚNG DẪN DEBUG WORDPRESS SITE TRÊN ĐIỆN THOẠI

### 1. Cấu hình domain về localhost

- Mở `Local` Wp → chọn Project → click vào avatar → chọn `Preferences`

  ![localhost](/images/lesson/setting.png)

- Màn hình Preferences xuất hiện → chọn tab Advanced.
    ![localhost](/images/lesson/domain.png)

- Tại Router mode chọn `localhost` → click `Apply` 

    ![localhost](/images/lesson/domain_apply.png)

- Click X để đóng lại popup setting, khi đó App Local sẽ warning như sau:
    ![localhost](/images/lesson/fixit.png)

- Mạnh dạn click vào `Fix it` và đợi cho đến khi hoàn tất.
- Chú ý rằng địa chỉ hiện tại được show trên App là `localhost:10009`.

### 2. Xác định ipv4 và truy cập
- Bạn chỉ cần xác định được ipv4 là có thể truy cập được website thông qua địa chỉ ip.
- Với Windows, gõ `ipconfig` trên terminal.
- Với MacOS, bạn chỉ cần Click vào icon Apple → System Preferences → Network. IP Address sẽ hiện thị ở Tab Wifi.

    ![localhost](/images/lesson/ip.png)

- Mở browser trên điện thoại nhập đúng host và post theo format sau: `http://{ip}:{port}`
- Với ip hiện tại `10.10.10.78` và port `10009` ta truy cập URL như sau: `http://10.10.10.78:10009`
- Tuy nhiên, hiện tại resource ở device đang sai đường dẫn nên không load được assets (js, css, image). Chúng ta cần cấu hình trong database ở bước tiếp theo.

### 3. Thay đổi cấu hình trong database
- Vào LocalWp App → Chọn Tab `Database` → Click `Open Adminer`

    ![localhost](/images/lesson/db_1.png)

- Ở panel bên trái chọn `wp_options` → Click vào `Select data`

    ![localhost](/images/lesson/db_2.png)
    ![localhost](/images/lesson/db_3.png)

- Dữ liệu hiện ra, chúng ta cần update lại value cho 2 fields sau thành: `http://{ip}:{port} (http://10.10.10.78:10009)`

Before:

    ![localhost](/images/lesson/db_4.png)

After:

    ![localhost](/images/lesson/db_5.png)

- Reload lại site trên device → work fine 😜

***
Hết