import React from "react";

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Giải pháp Tư vấn Chuyển đổi số & Website chuyên nghiệp</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Tăng trưởng doanh số, xây dựng thương hiệu, tối ưu chuyển đổi cho doanh nghiệp của bạn với chuyên gia tư vấn giàu kinh nghiệm.</p>
        <a href="/projects" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">Khám phá dự án thực tế</a>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Về chúng tôi</h2>
        <p className="text-base md:text-lg text-gray-700">Chúng tôi cung cấp dịch vụ tư vấn thiết kế website, tối ưu chuyển đổi, xây dựng thương hiệu số cho doanh nghiệp vừa và nhỏ. Cam kết mang lại giải pháp hiệu quả, chuyên nghiệp, phù hợp từng ngành nghề.</p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Dịch vụ nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <div className="mb-4 text-blue-600">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tư vấn thiết kế website</h3>
            <p className="text-gray-600">Thiết kế website chuẩn UX/UI, tối ưu chuyển đổi, phù hợp mọi thiết bị.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <div className="mb-4 text-blue-600">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H7V5h10v14z"/></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tối ưu chuyển đổi</h3>
            <p className="text-gray-600">Phân tích hành vi khách hàng, tối ưu quy trình bán hàng online.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <div className="mb-4 text-blue-600">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"/></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Xây dựng thương hiệu số</h3>
            <p className="text-gray-600">Định vị thương hiệu, phát triển nội dung số, tăng nhận diện online.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Liên hệ tư vấn</h2>
        <p className="mb-4 text-gray-700">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí cho bạn.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Họ và tên" className="border rounded-lg px-4 py-2" />
          <input type="email" placeholder="Email" className="border rounded-lg px-4 py-2" />
          <input type="text" placeholder="Số điện thoại" className="border rounded-lg px-4 py-2" />
          <button type="submit" className="bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition">Gửi yêu cầu tư vấn</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t mt-auto">
        © 2026 CHUNG HIẾN KHANG. All rights reserved.
      </footer>
    </div>
  );
}
