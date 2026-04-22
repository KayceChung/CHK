# 🚀 HƯỚNG DẪN CHẠY DATABASE MIGRATIONS

## ✅ Đã Hoàn Thành
- [x] Cấu hình `.env` với Supabase anon key
- [x] Test kết nối thành công
- [x] **Sửa SQL syntax errors (apostrophe escaping)**

## 📝 Bước Tiếp Theo: Tạo Database Tables

### Cách 1: Sử Dụng Supabase SQL Editor (Khuyến Nghị)

#### Bước 0: Test SQL Syntax (Optional - Khuyến Nghị)
Để đảm bảo SQL syntax hoàn toàn đúng trước khi chạy migrations:
1. Vào **SQL Editor**
2. Copy toàn bộ `supabase/migrations/000_test_syntax.sql` → Paste → Run
3. Phải thấy 3 kết quả test pass
4. Nếu pass → Tiếp tục Bước 1

#### Bước 1: Mở Supabase Dashboard
1. Vào: https://supabase.com/dashboard
2. Đăng nhập nếu cần
3. Chọn project của bạn (zuqwohycmkynlknobwuv)

#### Bước 2: Chạy Schema Migration
1. Click **SQL Editor** ở sidebar bên trái
2. Click nút **New Query** (màu xanh)
3. **Mở file trong VS Code**: `supabase/migrations/001_initial_schema.sql`
4. **Copy toàn bộ** nội dung file (Ctrl+A, Ctrl+C)
   - ⚠️ **Quan trọng**: File đã được sửa SQL syntax errors (apostrophe escaping)
   - ✅ Tất cả dấu `'` trong text đã được escape thành `''` (2 dấu ngoặc đơn)
5. **Paste** vào Supabase SQL Editor
6. Click nút **Run** (hoặc Ctrl+Enter)
7. Đợi ~5 giây, sẽ thấy message: ✅ **Success. No rows returned**

**Kết quả**: Sẽ tạo 6 tables:
- ✅ projects
- ✅ translations  
- ✅ services
- ✅ experiences
- ✅ tech_skills
- ✅ contact_submissions

#### Bước 3: Chạy Seed Data Migration
1. Vẫn trong **SQL Editor**, click **New Query** lần nữa
2. **Mở file**: `supabase/migrations/002_seed_data.sql`
3. **Copy toàn bộ** nội dung (Ctrl+A, Ctrl+C)
4. **Paste** vào Supabase SQL Editor
5. Click **Run**
6. Đợi ~5 giây, sẽ thấy: ✅ **Success. No rows returned**

**Kết quả**: Sẽ insert data:
- 2 projects (Real-Time Data Collection, CTD Portfolio)
- 50+ translations (nav, hero, about, services, etc.)
- 3 services (Interpretation, E-Commerce, Technology)
- 3 experiences (HK Buslines, HSU, Student Room)
- 15 tech skills (SQL, AppSheet, Python, etc.)

#### Bước 4: Verify Data
1. Click **Table Editor** ở sidebar
2. Kiểm tra từng table:
   - **projects**: Phải có 2 rows
   - **translations**: Phải có 50+ rows
   - **services**: Phải có 3 rows
   - **experiences**: Phải có 3 rows
   - **tech_skills**: Phải có 15 rows
   - **contact_submissions**: 0 rows (chưa có ai submit form)

**Nếu thấy data → ✅ Thành công!**

---

### Cách 2: Sử Dụng Supabase CLI (Advanced)

```powershell
# Bước 1: Install Supabase CLI (nếu chưa có)
npm install -g supabase

# Bước 2: Login
supabase login

# Bước 3: Link project
supabase link --project-ref zuqwohycmkynlknobwuv

# Bước 4: Run migrations
supabase db push
```

---

## 🧪 Test Sau Khi Chạy Migrations

Sau khi hoàn tất 2 migrations, chạy lại test script:

```powershell
node test-supabase.js
```

**Kết quả mong đợi**:
```
🔍 Testing Supabase connection...
✅ Supabase client initialized
✅ Connection successful!
   Tables exist and are accessible
```

---

## 🚨 Troubleshooting

### Lỗi: "permission denied for schema public"
**Giải pháp**: 
- Đảm bảo bạn đã đăng nhập đúng account Supabase
- Kiểm tra bạn có quyền admin trên project

### Lỗi: "syntax error near..."
**Giải pháp**:
- Đảm bảo copy **toàn bộ** file SQL (từ dòng 1 đến cuối)
- Không sửa đổi gì trong SQL

### Lỗi: "duplicate key value violates unique constraint"
**Giải pháp**:
- Data đã tồn tại, có thể bỏ qua
- Hoặc xóa table và chạy lại:
  ```sql
  DROP TABLE IF EXISTS projects CASCADE;
  DROP TABLE IF EXISTS translations CASCADE;
  DROP TABLE IF EXISTS services CASCADE;
  DROP TABLE IF EXISTS experiences CASCADE;
  DROP TABLE IF EXISTS tech_skills CASCADE;
  DROP TABLE IF EXISTS contact_submissions CASCADE;
  ```
  Sau đó chạy lại migration 001, rồi 002

---

## ✅ Checklist Hoàn Tất

- [ ] Đã mở Supabase Dashboard
- [ ] Đã vào SQL Editor
- [ ] Đã run `001_initial_schema.sql` thành công
- [ ] Đã run `002_seed_data.sql` thành công
- [ ] Đã verify data trong Table Editor
- [ ] Test script `node test-supabase.js` pass

**Khi hoàn tất tất cả → Báo lại để tôi tiếp tục bước tiếp theo!** 🎉
