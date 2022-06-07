# t3h-reactjs


### Kịch bản conflict git

**Bước 1:**

- Clone project về: git clone git@github.com:truongnat/t3h-reactjs.git
- Mở VScode, sửa code trong file index.html ( thống nhất là sửa dòng nào, ví dụ sửa dòng h1 trong body )
- Thêm những file code đã sửa vào index của git ở local: git add .
- Commit ( cam kết ) code: git commit -m "đã sửa ở thẻ h1"
- Đưa code lên git remote:
   + Đối với nhánh mới tạo: git push --set-upstream origin ten_nhanh_moi
   + Đối với nhánh đã được đưa lên git remote rồi : git push.

**Bước 2:**
- Vào github repository click vào file index.html
![image](https://user-images.githubusercontent.com/87919564/171207221-3dced97e-7458-412a-b47a-f1aee9bf6c30.png)
- Click vào nút edit
![image](https://user-images.githubusercontent.com/87919564/171207410-f331b37c-832d-4cc8-bdf0-4ad8621f7176.png)

- Sửa code ở trong file index.html ( sửa cùng với dòng đã sửa ở dưới local ) => sau đó bấm commit
![image](https://user-images.githubusercontent.com/87919564/171207819-ccab132f-bfe6-40c7-8636-c7f6e74a099b.png)

**Bước 3:**

- Mở lại VScode, sửa lại file index.html khác với những gì đã sửa ở trên git remote.
- Thêm file code đã sửa vào index của git ở local: git add .
- Commit code: git commit -m 'test conflict'
- Lấy code từ remote về: git pull origin main => chúng ta sẽ thấy conflict xuất hiện.

![image](https://user-images.githubusercontent.com/87919564/171208363-9726194c-fc7a-41fa-b533-acb98f46cbf4.png)
