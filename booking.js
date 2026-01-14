// الحصول على التاريخ الحالي لتحديد الحد الأدنى للتاريخ
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);

// معالجة إرسال النموذج
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع البيانات
    const formData = {
        car: document.getElementById('car').value,
        carText: document.getElementById('car').options[document.getElementById('car').selectedIndex].text,
        service: document.getElementById('service').value,
        serviceText: document.getElementById('service').options[document.getElementById('service').selectedIndex].text,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        notes: document.getElementById('notes').value
    };
    
    // توليد رقم حجز عشوائي
    const bookingNumber = 'BK-' + Math.floor(Math.random() * 10000);
    
    // محاكاة إرسال البيانات (في التطبيق الحقيقي ترسل للسيرفر)
    console.log('Booking Data:', formData);
    
    // إخفاء النموذج وإظهار رسالة النجاح
    document.getElementById('bookingForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('bookingNumber').textContent = bookingNumber;
    
    // حفظ في localStorage (اختياري)
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
        ...formData,
        bookingNumber: bookingNumber,
        status: 'pending',
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // إعادة التوجيه بعد 3 ثوان (اختياري)
    setTimeout(() => {
        window.location.href = 'my-bookings.html';
    }, 3000);
});
