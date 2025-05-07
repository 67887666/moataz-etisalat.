function shareWhatsApp() {
  const net = document.getElementById("netBalance").value;
  const company = document.getElementById("company").value.toUpperCase();
  const discount = discounts[company.toLowerCase()];
  const percent = (100 - (discount * 100)).toFixed(1);
  const paid = (net / discount).toFixed(2);
  const now = new Date().toLocaleString('ar-EG');
  
  const message = `تم تحويل رصيد صافي بقيمة ${net} جنيه من شركة ${company}. المبلغ المدفوع: ${paid} جنيه. نسبة الخصم: ${percent}%. التاريخ: ${now}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
document.getElementById("whatsappBtn").style.display = "inline-block";
document.getElementById("downloadBtn").style.display = "inline-block";