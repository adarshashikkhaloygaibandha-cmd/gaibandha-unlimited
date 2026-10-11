/*
  Gaibandha Unlimited — frontend starter
  This demo intentionally does not send or save real applicant data.
  Connect a trusted backend before collecting real registrations.
*/
const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');
const statusButton = document.getElementById('statusButton');
const statusMessage = document.getElementById('statusMessage');
document.getElementById('year').textContent = new Date().getFullYear();

// Set to your deployed Google Apps Script Web App URL after backend setup.
const API_URL = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  formMessage.textContent = '';
  if (document.getElementById('website').value) return; // basic honeypot
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  delete data.website;
  delete data.consent;

  if (!API_URL) {
    formMessage.textContent = 'এটি এখন ডেমো। বাস্তব আবেদন নেওয়ার আগে README ফাইল অনুযায়ী ব্যাকএন্ড সংযুক্ত করতে হবে। এখন কোনো তথ্য জমা হয়নি।';
    formMessage.style.color = '#f7c85b';
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'register', ...data })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || 'আবেদন জমা হয়নি।');
    formMessage.textContent = `আবেদন গ্রহণ করা হয়েছে। তোমার আবেদন নম্বর: ${result.applicationId}`;
    formMessage.style.color = '#9be4cb';
    form.reset();
  } catch (error) {
    formMessage.textContent = 'এই মুহূর্তে আবেদন পাঠানো যায়নি। পরে আবার চেষ্টা করো অথবা আয়োজকদের সঙ্গে যোগাযোগ করো।';
    formMessage.style.color = '#ff9aab';
  }
});

statusButton.addEventListener('click', async () => {
  const id = document.getElementById('applicationId').value.trim();
  statusMessage.textContent = '';
  if (!id) {
    statusMessage.textContent = 'আবেদন নম্বর লিখো।';
    return;
  }
  if (!API_URL) {
    statusMessage.textContent = 'স্ট্যাটাস চেকিং এখন ডেমো মোডে আছে। ব্যাকএন্ড চালু হলে এটি কাজ করবে।';
    return;
  }
  statusMessage.textContent = 'স্ট্যাটাস দেখা হচ্ছে…';
  try {
    const response = await fetch(`${API_URL}?action=status&id=${encodeURIComponent(id)}`);
    const result = await response.json();
    statusMessage.textContent = result.ok ? `বর্তমান অবস্থা: ${result.status}` : 'এই আবেদন নম্বর পাওয়া যায়নি।';
  } catch (_) {
    statusMessage.textContent = 'স্ট্যাটাস দেখা যায়নি। পরে আবার চেষ্টা করো।';
  }
});
