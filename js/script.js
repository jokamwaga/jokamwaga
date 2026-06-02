/* ====== DATA ====== */
const DEFAULT_MEMBERS = [
  { name: "Felix Odhiambo", role: "Member", initials: "FO", active: true },
  { name: "Lilian Onudi", role: "Member", initials: "LO", active: true },
  { name: "Sharon Achieng", role: "Member", initials: "SA", active: true },
  { name: "Sylvia Kasandi", role: "Member", initials: "SK", active: true },
  { name: "Monica Onudi", role: "Member", initials: "MOn", active: true },
  { name: "Benard Ooko", role: "Member", initials: "BO", active: true },
  { name: "Lightness Peter", role: "Member", initials: "LP", active: true },
  { name: "Elsa Anyango", role: "Member", initials: "EAn", active: true },
  { name: "Stephen Omondi", role: "Member", initials: "SO", active: true },
  { name: "Catherine Masitsa", role: "Member", initials: "CM", active: true },
  { name: "Maurice Otieno", role: "Member", initials: "MOt", active: true },
  { name: "Jacklyne Jakoyo", role: "Member", initials: "JJ", active: true },
  { name: "John Ondiek", role: "Member", initials: "JO", active: true },
  { name: "Molly Otieno", role: "Member", initials: "MOl", active: true },
  { name: "Wyckliffe Otieno", role: "Member", initials: "WO", active: true },
  { name: "Esther Otieno", role: "Member", initials: "EO", active: true },
  { name: "Patricia Anyango", role: "Member", initials: "PA", active: true },
  { name: "Millicent Ndinya", role: "Member", initials: "MN", active: true },
  { name: "Evans Adwar", role: "Member", initials: "EAd", active: true },
  { name: "Collins Adwar", role: "Member", initials: "CA", active: true },
  { name: "Irine Awuor", role: "Member", initials: "IA", active: true },
];

const STORAGE_KEY_MEMBERS = 'jokaMwaga_members';
const STORAGE_KEY_CONTRIBS = 'jokaMwaga_contribs';

function loadMembers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_MEMBERS);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
}

function saveMembers(data) {
  localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(data));
}

let members = loadMembers();

// Per-member contribution records (KES)
const monthLabels = ['may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const monthDisplay = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DEFAULT_CONTRIBS = [
  { no: 1,  name: "Felix Odhiambo",   reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 2,  name: "Lilian Onudi",     reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 3,  name: "Sharon Achieng",   reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 4,  name: "Sylvia Kasandi",   reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 5,  name: "Monica Onudi",     reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 6,  name: "Benard Ooko",      reg: 50, may: 200, jun: 200, jul: 200, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 7,  name: "Lightness Peter",  reg: 50, may: 200, jun: 200, jul: 200, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 8,  name: "Elsa Anyango",     reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 9,  name: "Stephen Omondi",   reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 10, name: "Catherine Masitsa", reg: 50, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 11, name: "Maurice Otieno",   reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 12, name: "Jacklyne Jakoyo",  reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 13, name: "John Ondiek",      reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 14, name: "Molly Otieno",     reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 15, name: "Wyckliffe Otieno", reg: 50, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 16, name: "Esther Otieno",    reg: 50, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 17, name: "Patricia Anyango", reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 18, name: "Millicent Ndinya", reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 19, name: "Evans Adwar",      reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 20, name: "Collins Adwar",    reg: 50, may: 200, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
  { no: 21, name: "Irine Awuor",      reg: 50, may: 150, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 },
];

function loadContribs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_CONTRIBS);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_CONTRIBS));
}

function saveContribs(data) {
  localStorage.setItem(STORAGE_KEY_CONTRIBS, JSON.stringify(data));
}

let memberContribs = loadContribs();
let editMode = false;

let transactions = [];

const announcements = [
  {
    title: "Welcome to Joka Mwaga Self Help Group!",
    date: "June 1, 2026",
    tag: "Welcome",
    urgent: false,
    body: "We are thrilled to officially launch Joka Mwaga Self Help Group! Our first month has been a success with 21 members registered and KES 5,400 collected. Thank you to everyone for your commitment. Let's build a secure future together.",
    author: "Group Leadership"
  },
  {
    title: "Monthly Contribution Reminder",
    date: "June 1, 2026",
    tag: "Finance",
    urgent: false,
    body: "June contributions of KES 200 per member are now due. Please pay by the 10th to avoid any penalties. Members who have not yet paid the registration fee of KES 50 are reminded to clear it. Let's keep up the momentum!",
    author: "Treasurer"
  },
  {
    title: "First Investment Discussion - Save the Date",
    date: "May 28, 2026",
    tag: "Meeting",
    urgent: true,
    body: "Our first investment planning meeting will be held on Sunday, June 8th at 10:00 AM. Agenda includes reviewing our pooled funds and identifying initial investment opportunities. All members are expected to attend.",
    author: "Chairperson"
  },
  {
    title: "Emergency Fund Guidelines",
    date: "May 25, 2026",
    tag: "Policy",
    urgent: false,
    body: "The emergency fund guidelines have been shared with all members. A minimum of 20% of monthly contributions will be set aside for emergencies. Requests must be submitted in writing to the treasurer and approved by at least two executives.",
    author: "Secretary"
  },
];

const galleryItems = [
  { label: "Family Gathering 1", src: "images/f52f3499-5d22-4abe-a57e-aa4bb7b4cbe0.jpg" },
  { label: "Family Gathering 2", src: "images/IMG_3018.jpg" },
  { label: "Family Gathering 3", src: "images/IMG_3019.jpg" },
  { label: "Family Gathering 4", src: "images/IMG_3020.jpg" },
  { label: "Family Gathering 5", src: "images/IMG_3021.jpg" },
  { label: "Family Gathering 6", src: "images/IMG_3022.jpg" },
  { label: "Family Gathering 7", src: "images/IMG_3023.jpg" },
];

/* ====== NAVBAR ====== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) current = section.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ====== INTERSECTION OBSERVER for scroll animations ====== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ====== FINANCIAL DASHBOARD ====== */
function formatKES(amount) {
  return 'KES ' + amount.toLocaleString('en-KE');
}

/* ====== CHARTS ====== */
let contributionsChart, allocationChart, growthChart;

function initCharts() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const fontColor = isDark ? '#aaa' : '#5a5a7a';

  const monthlyData = monthLabels.map(l => memberContribs.reduce((sum, m) => sum + (m[l] || 0), 0));
  const totalSaved = memberContribs.reduce((sum, m) => sum + m.reg + monthLabels.reduce((s, l) => s + (m[l] || 0), 0), 0);

  // Contributions Chart (bar)
  const ctx1 = document.getElementById('contributionsChart');
  if (ctx1) {
    if (contributionsChart) contributionsChart.destroy();
    contributionsChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: monthDisplay,
        datasets: [{
          label: 'Contributions (KES)',
          data: monthlyData,
          backgroundColor: 'rgba(27,94,32,0.7)',
          borderColor: '#1b5e20',
          borderWidth: 2,
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => 'KES ' + v, color: fontColor } },
          x: { grid: { display: false }, ticks: { color: fontColor } }
        }
      }
    });
  }

  // Allocation Chart (doughnut)
  const ctx2 = document.getElementById('allocationChart');
  if (ctx2) {
    if (allocationChart) allocationChart.destroy();
    // Per user: no emergency reserve anymore
    allocationChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Pooled Investments', 'Cash on Hand'],
        datasets: [{
          data: [0, totalSaved],
          backgroundColor: ['#1b5e20', '#2e7d32'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { position: 'bottom', labels: { padding: 16, color: fontColor } }
        },
        cutout: '65%',
      },
      plugins: [{
        id: 'centerText',
        beforeDraw: function(chart) {
          const { width, height, ctx } = chart;
          ctx.save();
          const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const fontSize = Math.min(width, height) * 0.1;
          ctx.font = 'bold ' + fontSize + 'px Inter, sans-serif';
          ctx.fillStyle = fontColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('KES ' + total.toLocaleString('en-KE'), width / 2, height / 2);
          ctx.restore();
        }
      }]
    });
  }

  // Growth Chart (line) - Cumulative
  const ctx3 = document.getElementById('growthChart');
  if (ctx3) {
    if (growthChart) growthChart.destroy();
    let cumulative = 0;
    const growthData = monthlyData.map(v => cumulative += v);
    
    growthChart = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: monthDisplay,
        datasets: [{
          label: 'Cumulative Funds (KES)',
          data: growthData,
          borderColor: '#1b5e20',
          backgroundColor: 'rgba(27,94,32,0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1b5e20',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => 'KES ' + v, color: fontColor } },
          x: { grid: { display: false }, ticks: { color: fontColor } }
        }
      }
    });
  }
}

/* ====== TRANSACTIONS TABLE ====== */
function renderTransactions() {
  const tbody = document.getElementById('transactionsBody');
  if (!tbody) return;
  tbody.innerHTML = transactions.map(t => {
    const isPositive = t.amount > 0;
    const statusClass = {
      'Completed': 'badge-success',
      'Repaying': 'badge-warning',
      'Pending': 'badge-warning',
    }[t.status] || 'badge-info';

    return `<tr>
      <td>${t.date}</td>
      <td><span class="badge badge-${t.type === 'Contribution' ? 'success' : t.type === 'Investment' ? 'info' : t.type === 'Emergency' ? 'danger' : 'warning'}">${t.type}</span></td>
      <td>${t.desc}</td>
      <td style="color:${isPositive ? '#2e7d32' : '#c62828'}; font-weight:600;">${isPositive ? '+' : ''}${t.amount.toLocaleString()}</td>
      <td><span class="badge ${statusClass}">${t.status}</span></td>
    </tr>`;
  }).join('');
}

/* ====== MEMBERS ====== */
function renderMembers(filter = '') {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;
  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(filter.toLowerCase()) ||
    m.role.toLowerCase().includes(filter.toLowerCase())
  );

  grid.innerHTML = filtered.map((m) => {
  const contrib = memberContribs.find(c => c.name === m.name);
  let progress = 0, friendlyStatus = "New Joiner", statusClass = "badge-new", isActive = true;

  if (contrib) {
    const yearlyTarget = 50 + (monthLabels.length * 200);
    const paid = contrib.reg + monthLabels.reduce((s, l) => s + (contrib[l] || 0), 0);
    progress = Math.min(Math.round((paid / yearlyTarget) * 100), 100);

    const status = getMemberStatus(contrib);
    isActive = status.isActive;
    const monthsActiveCount = monthLabels.filter(l => (contrib[l] || 0) > 0).length;

    if (!isActive) { friendlyStatus = "Inactive"; statusClass = "badge-overdue"; }
    else if (status.label === 'Up to Date') { friendlyStatus = "Doing Great"; statusClass = "badge-uptodate"; }
    else if (status.label === 'Ahead') { friendlyStatus = "Super Hero"; statusClass = "badge-ahead"; }
    else if (status.label === 'Overdue') { friendlyStatus = "Needs a Boost"; statusClass = "badge-overdue"; }
    else if (status.label === 'Pending') { friendlyStatus = "Moving Forward"; statusClass = "badge-partial"; }

    return `
      <div class="member-card" id="card-${m.name.replace(/\s+/g, '')}" onclick="showMemberDetails('${m.name}')">
        <div class="card-branding">Joka Mwaga SHG</div>
        <button class="member-share-btn" onclick="shareMemberCard(event, '${m.name}')" title="Share card to WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </button>
        <div class="member-avatar">${m.initials}</div>
        <h4>${m.name}</h4>
        <div class="member-role">${m.role}</div>
        <div class="member-status-line">
          <span class="member-status ${isActive ? 'active' : 'inactive'}">${isActive ? 'Active' : 'Inactive'}</span>
        </div>

        <div class="member-stats-grid">
          <div class="m-stat">
              <span class="m-stat-val">${formatKES(paid).replace('KES ', '')}</span>
              <span class="m-stat-lbl">Total Saved</span>
          </div>
          <div class="m-stat">
              <span class="m-stat-val">${monthsActiveCount}</span>
              <span class="m-stat-lbl">Months Paid</span>
          </div>
        </div>

        <div class="member-progress-wrap">
          <div class="member-progress-header">
            <span>Yearly Progress</span>
            <span>${progress}%</span>
          </div>
          <div class="member-progress-bar">
            <div class="member-progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
        <span class="member-friendly-status ${statusClass}">${friendlyStatus}</span>
        <div class="card-footer-branding">Building a Secure Future</div>
      </div>
    `;
  }
  }).join('');
  }

/* ====== SHARING FUNCTIONS ====== */
async function shareMemberCard(event, name) {
  event.stopPropagation(); // Don't open details modal
  
  const cardId = `card-${name.replace(/\s+/g, '')}`;
  const card = document.getElementById(cardId);
  if (!card) return;

  const btn = card.querySelector('.member-share-btn');
  const originalDisplay = btn.style.display;
  btn.style.display = 'none'; // Hide button for the screenshot

  try {
    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false,
    });
    
    const link = document.createElement('a');
    link.download = `${name.replace(/\s+/g, '_')}_Status_2026.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showToast(`Card for ${name} downloaded! Share it on WhatsApp.`);
  } catch (e) {
    showToast('Failed to generate card image. Try again.');
  }

  btn.style.display = originalDisplay;
}

/* ====== CONTRIBUTION DASHBOARD ====== */
function getCurrentMonthIdx() {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();
  
  if (year < 2026) return -1;
  if (year > 2026) return 7; // Dec 2026

  // Our months start from May (index 4)
  const idx = month - 4;
  return Math.max(-1, Math.min(idx, 7));
}

const currentMonthIdx = getCurrentMonthIdx(); 

function renderContributionDashboard() {
  const tbody = document.getElementById('contribDashboardBody');
  if (!tbody) return;

  let grandTotalReg = 0, grandOverall = 0;
  const monthsTotalArr = [0, 0, 0, 0, 0, 0, 0, 0];

  tbody.innerHTML = memberContribs.map(m => {
    const monthsTotal = monthLabels.reduce((sum, l, i) => {
      const a = m[l] || 0;
      monthsTotalArr[i] += a;
      return sum + a;
    }, 0);
    const memberTotal = m.reg + monthsTotal;
    grandTotalReg += m.reg;
    grandOverall += memberTotal;
    const status = getMemberStatus(m);

    return `<tr data-idx="${m.no - 1}">
      <td>${m.no}</td>
      <td>
        <strong>${m.name}</strong>
        ${editMode ? `<i class="fas fa-trash-alt delete-btn" onclick="deleteMember(${m.no - 1})"></i>` : ''}
      </td>
      <td class="cell-reg" data-field="reg">${renderCell(m.reg, 'reg', -1)}</td>
      ${monthLabels.map((l, idx) => `<td class="cell-month" data-field="${l}">${renderCell(m[l] || 0, l, idx)}</td>`).join('')}
      <td class="cell-total">${memberTotal}</td>
      <td><span class="status-badge ${status.class}">${status.label}</span></td>
    </tr>`;
  }).join('');

  tbody.innerHTML += `<tr class="summary-row">
    <td></td><td><strong>TOTAL</strong></td>
    <td><strong>${grandTotalReg}</strong></td>
    ${monthsTotalArr.map(v => `<td><strong>${v > 0 ? v : '—'}</strong></td>`).join('')}
    <td><strong>${grandOverall}</strong></td>
    <td></td>
  </tr>`;

  if (editMode) attachEditListeners();
}

function renderCell(amount, field, idx) {
  if (amount > 0) return `<span class="cell-paid edit-cell" data-field="${field}">${amount}</span>`;
  if (idx === -1) return `<span class="cell-none edit-cell" data-field="${field}">—</span>`;
  if (idx < currentMonthIdx) return `<span class="cell-overdue edit-cell" data-field="${field}">×</span>`;
  if (idx === currentMonthIdx) return `<span class="cell-due edit-cell" data-field="${field}">Due</span>`;
  return `<span class="cell-pending edit-cell" data-field="${field}">—</span>`;
}

function getMemberStatus(m) {
  let missedMonths = 0;
  // Count missed months BEFORE the current month
  for (let i = 0; i < currentMonthIdx; i++) {
    if ((m[monthLabels[i]] || 0) === 0) missedMonths++;
  }
  
  // Rule: Active if behind by 2 months or less
  const isActive = missedMonths <= 2;
  
  const currentPaid = (m[monthLabels[currentMonthIdx]] || 0) > 0;
  const futurePaid = monthLabels.slice(currentMonthIdx + 1).some(l => (m[l] || 0) > 0);
  
  let label = 'Up to Date';
  let className = 'badge-uptodate';

  if (!isActive) {
    label = 'Inactive';
    className = 'badge-overdue';
  } else if (missedMonths > 0) {
    label = 'Overdue';
    className = 'badge-overdue';
  } else if (currentPaid && futurePaid) {
    label = 'Ahead';
    className = 'badge-ahead';
  } else if (currentPaid) {
    label = 'Up to Date';
    className = 'badge-uptodate';
  } else {
    const anyPaid = monthLabels.some(l => (m[l] || 0) > 0);
    if (!anyPaid) {
      label = 'New';
      className = 'badge-new';
    } else {
      label = 'Pending';
      className = 'badge-partial';
    }
  }

  return { label, class: className, isActive, missedMonths };
}

/* ====== STAT ANIMATION ====== */
function animateStat(elementId, target, isCurrency = false) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  let current = 0;
  const duration = 1000; // 1 second
  const frameRate = 60;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = target / totalFrames;
  
  const update = () => {
    current += increment;
    if (current >= target) {
      el.textContent = isCurrency ? formatKES(target) : target.toLocaleString() + '+';
      return;
    }
    el.textContent = isCurrency ? formatKES(Math.floor(current)) : Math.floor(current).toLocaleString() + '+';
    requestAnimationFrame(update);
  };
  update();
}

function updateFinancialSummaryFromContribs() {
  const total = memberContribs.reduce((sum, m) => {
    return sum + m.reg + monthLabels.reduce((s, l) => s + (m[l] || 0), 0);
  }, 0);
  
  const activeMonths = monthLabels.filter(l => memberContribs.some(m => (m[l] || 0) > 0)).length;

  // Update Finances Section (with animation)
  animateStat('totalContributions', total, true);
  animateStat('emergencyFund', 0, true);

  const activeMembersCount = memberContribs.filter(m => getMemberStatus(m).isActive).length;

  // Update Hero Stats (with animation)
  animateStat('statMembers', activeMembersCount);
  animateStat('statMonths', activeMonths);
  animateStat('statTotalSaved', total);

  // --- FAMILY SNAPSHOT UPDATES ---
  const GOAL = 50000;
  const goalPercent = Math.min(Math.round((total / GOAL) * 100), 100);
  
  const goalBarFill = document.getElementById('goalBarFill');
  const goalPercentText = document.getElementById('goalPercentText');
  const goalImpactDesc = document.getElementById('goalImpactDesc');
  
  if (goalBarFill) goalBarFill.style.width = goalPercent + '%';
  if (goalPercentText) goalPercentText.textContent = goalPercent + '%';
  
  if (goalImpactDesc) {
    if (goalPercent < 10) goalImpactDesc.textContent = "We are just starting our journey! Every contribution builds our family pot.";
    else if (goalPercent < 25) goalImpactDesc.textContent = "Great start! We're building a solid foundation together.";
    else if (goalPercent < 50) goalImpactDesc.textContent = "Almost halfway! Our collective power is growing every month.";
    else goalImpactDesc.textContent = "Over halfway there! Our family's vision is becoming a reality.";
  }

  // Health Summary
  let fullyUpToDate = 0, pendingCount = 0, superSaversCount = 0;
  memberContribs.forEach(m => {
    const status = getMemberStatus(m);
    // Paid current month = Up to Date
    if (status.label === 'Up to Date' || status.label === 'Ahead') fullyUpToDate++;
    
    // Haven't paid current month but paid everything before = Pending
    if (status.label === 'Pending') pendingCount++;
    
    // Specifically track super savers (ahead)
    if (status.label === 'Ahead') superSaversCount++;
  });

  const countUpToDate = document.getElementById('countUpToDate');
  const countNeedsBoost = document.getElementById('countNeedsBoost');
  const countSuperSavers = document.getElementById('countSuperSavers');

  if (countUpToDate) countUpToDate.textContent = `${fullyUpToDate} Member${fullyUpToDate !== 1 ? 's' : ''}`;
  if (countNeedsBoost) countNeedsBoost.textContent = `${pendingCount} Member${pendingCount !== 1 ? 's' : ''}`;
  if (countSuperSavers) countSuperSavers.textContent = `${superSaversCount} Member${superSaversCount !== 1 ? 's' : ''}`;

  // Update Next Deadline Date (End of Month)
  const deadlineDateEl = document.getElementById('deadlineDate');
  if (deadlineDateEl) {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    deadlineDateEl.textContent = lastDay.toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // Impact Statement
  const impactStatement = document.getElementById('impactStatement');
  if (impactStatement) {
    if (total < 5000) impactStatement.textContent = "With our current savings, we're building enough power to support small family milestones!";
    else if (total < 15000) impactStatement.textContent = "We're growing! This pot could soon help us start a small family project together.";
    else impactStatement.textContent = "Our power is real! We are now in a position to discuss our first group investment opportunities.";
  }
}

/* ====== MEMBER MANAGEMENT ====== */
function addMember(name, role) {
  if (!authorizeAdmin()) return;

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 3);
  const newMember = { name, role, initials, active: true };
  members.push(newMember);
  saveMembers(members);

  const newNo = memberContribs.length + 1;
  const newContrib = { no: newNo, name, reg: 0, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0 };
  memberContribs.push(newContrib);
  saveContribs(memberContribs);

  renderMembers();
  renderContributionDashboard();
  updateFinancialSummaryFromContribs();
  updateTransactionsFromContribs();
  initCharts();
  showToast(`${name} added to the group!`);
  closeAllModals();
}

function deleteMember(idx) {
  if (!authorizeAdmin()) return;
  const name = memberContribs[idx].name;
  if (!confirm(`Are you sure you want to remove ${name} from the group? This will delete all their contribution records.`)) return;

  // Remove from members list
  members = members.filter(m => m.name !== name);
  saveMembers(members);

  // Remove from contribs and re-index
  memberContribs.splice(idx, 1);
  memberContribs.forEach((m, i) => m.no = i + 1);
  saveContribs(memberContribs);

  renderMembers();
  renderContributionDashboard();
  updateFinancialSummaryFromContribs();
  updateTransactionsFromContribs();
  initCharts();
  showToast(`${name} has been removed.`);
}

/* ====== MODALS ====== */
const modalOverlay = document.getElementById('modalOverlay');
const addMemberModal = document.getElementById('addMemberModal');
const memberDetailsModal = document.getElementById('memberDetailsModal');

function openModal(modal) {
  modalOverlay.classList.add('active');
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  modal.style.display = 'block';
}

function closeAllModals() {
  modalOverlay.classList.remove('active');
}

function showMemberDetails(name) {
  const contrib = memberContribs.find(c => c.name === name);
  if (!contrib) return;

  document.getElementById('detailsMemberName').textContent = name;
  const status = getMemberStatus(contrib);
  document.getElementById('detailsStatus').textContent = status.label;
  
  const monthsTotal = monthLabels.reduce((sum, l) => sum + (contrib[l] || 0), 0);
  const total = contrib.reg + monthsTotal;
  document.getElementById('detailsTotal').textContent = formatKES(total);

  const tbody = document.getElementById('detailsTableBody');
  tbody.innerHTML = `<tr><td>Registration</td><td>${contrib.reg}</td></tr>` +
    monthLabels.map((l, i) => `<tr><td>${monthDisplay[i]}</td><td>${contrib[l] || 0}</td></tr>`).join('');

  openModal(memberDetailsModal);
}

document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeAllModals));
modalOverlay?.addEventListener('click', (e) => { if (e.target === modalOverlay) closeAllModals(); });

/* ====== ADMIN AUTH ====== */
const ADMIN_PASSWORD = 'IcareAfy@2026';
let isAuthorized = sessionStorage.getItem('jokaAdminAuth') === 'true';

function authorizeAdmin() {
  if (isAuthorized) return true;
  const pwd = prompt('Enter admin password to edit contributions:');
  if (pwd === ADMIN_PASSWORD) {
    isAuthorized = true;
    sessionStorage.setItem('jokaAdminAuth', 'true');
    return true;
  }
  if (pwd !== null) showToast('Incorrect password. Access denied.');
  return false;
}

/* ====== EDIT MODE ====== */
function attachEditListeners() {
  document.querySelectorAll('#contribDashboardBody .edit-cell').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      if (this.tagName === 'INPUT') return;
      const field = this.dataset.field;
      const row = this.closest('tr');
      const idx = parseInt(row.dataset.idx);
      const currentVal = memberContribs[idx][field] || 0;

      const input = document.createElement('input');
      input.type = 'number';
      input.min = 0;
      input.max = 9999;
      input.value = currentVal;
      input.className = 'cell-input';
      input.style.width = '60px';

      const parent = this.parentNode;
      this.replaceWith(input);
      input.focus();
      input.select();

      input.addEventListener('blur', () => finishEdit(idx, field, input, parent));
      input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') input.blur();
        if (ev.key === 'Escape') { input.value = currentVal; input.blur(); }
      });
    });
  });
}

function finishEdit(idx, field, input, parent) {
  let val = parseInt(input.value);
  if (isNaN(val) || val < 0) val = 0;
  memberContribs[idx][field] = val;
  saveContribs(memberContribs);
  renderContributionDashboard();
  updateFinancialSummaryFromContribs();
  updateTransactionsFromContribs();
  initCharts();
}

function toggleEditMode() {
  // If entering edit mode, require admin auth first
  if (!editMode && !authorizeAdmin()) return;

  editMode = !editMode;
  const btn = document.getElementById('editToggleBtn');
  const hint = document.getElementById('editHint');
  if (!btn) return;
  if (editMode) {
    btn.innerHTML = '<i class="fas fa-check"></i> Done';
    btn.classList.add('editing');
    if (hint) hint.style.display = 'inline';
    renderContributionDashboard();
  } else {
    btn.innerHTML = '<i class="fas fa-lock"></i> Edit';
    btn.classList.remove('editing');
    if (hint) hint.style.display = 'none';
    renderContributionDashboard();
  }
}

/* ====== SHARE AS WHATSAPP IMAGE ====== */
async function shareAsImage() {
  const btn = document.getElementById('shareWABtn');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
  btn.disabled = true;

  try {
    const wrap = document.getElementById('contribDashboardWrap');
    const canvas = await html2canvas(wrap, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false,
    });
    const link = document.createElement('a');
    link.download = 'JokaMwaga_Contributions_2026.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Image downloaded! Share it on WhatsApp.');
  } catch (e) {
    showToast('Failed to generate image. Try again.');
  }

  btn.innerHTML = originalHTML;
  btn.disabled = false;
}

/* ====== PRINT PDF ====== */
function printToPDF() {
  const originalTitle = document.title;
  document.title = 'Joka Mwaga - Contributions 2026';
  // Brief flash to ensure table is rendered
  setTimeout(() => {
    window.print();
    document.title = originalTitle;
  }, 100);
}

/* ====== RESET ====== */
function resetContribs() {
  if (!authorizeAdmin()) return;
  if (!confirm('Reset all member and contribution data to defaults? This cannot be undone.')) return;
  
  memberContribs = JSON.parse(JSON.stringify(DEFAULT_CONTRIBS));
  saveContribs(memberContribs);
  
  members = JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
  saveMembers(members);

  renderMembers();
  renderContributionDashboard();
  updateFinancialSummaryFromContribs();
  updateTransactionsFromContribs();
  if (editMode) toggleEditMode();
  showToast('All data reset to defaults.');
}

/* Rebuild transactions from contribs */
function updateTransactionsFromContribs() {
  const regTotal = memberContribs.reduce((s, m) => s + m.reg, 0);
  const mayTotal = memberContribs.reduce((s, m) => s + (m.may || 0), 0);
  const junTotal = memberContribs.reduce((s, m) => s + (m.jun || 0), 0);
  const julTotal = memberContribs.reduce((s, m) => s + (m.jul || 0), 0);
  const mayPayers = memberContribs.filter(m => (m.may || 0) > 0).length;
  const partialMay = memberContribs.some(m => m.may > 0 && m.may < 200);

  transactions = [
    { date: "2026-05-30", type: "Contribution", desc: `Registration fees (${memberContribs.length} members @ KES 50)`, amount: regTotal, status: "Completed" },
    { date: "2026-05-30", type: "Contribution", desc: `May contributions (${mayPayers} members${partialMay ? ', 1 partial' : ''})`, amount: mayTotal, status: "Completed" },
  ];
  if (junTotal > 0) {
    transactions.push({ date: "2026-06-01", type: "Contribution", desc: "June contributions (advance/prepaid)", amount: junTotal, status: "Completed" });
  }
  if (julTotal > 0) {
    transactions.push({ date: "2026-07-01", type: "Contribution", desc: "July contributions (advance/prepaid)", amount: julTotal, status: "Completed" });
  }
  renderTransactions();
}

/* ====== ANNOUNCEMENTS ====== */
function renderAnnouncements() {
  const container = document.getElementById('announcementsContainer');
  if (!container) return;
  container.innerHTML = announcements.map(a => `
    <div class="announcement-card ${a.urgent ? 'urgent' : ''}">
      <div class="announcement-header">
        <span class="announcement-date"><i class="far fa-calendar-alt"></i> ${a.date}</span>
        <span class="announcement-tag">${a.tag}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.body}</p>
      <div class="announcement-author">— ${a.author}</div>
    </div>
  `).join('');
}

/* ====== GALLERY ====== */
let currentGalleryIdx = 0;

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryItems.map((item, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="gallery-label">${item.label}</div>
    </div>
  `).join('');
}

function openLightbox(idx) {
  currentGalleryIdx = idx;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!lb || !img) return;
  img.src = galleryItems[idx].src;
  img.alt = galleryItems[idx].label;
  cap.textContent = galleryItems[idx].label + ' (' + (idx + 1) + '/' + galleryItems.length + ')';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentGalleryIdx += dir;
  if (currentGalleryIdx < 0) currentGalleryIdx = galleryItems.length - 1;
  if (currentGalleryIdx >= galleryItems.length) currentGalleryIdx = 0;
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!img) return;
  img.src = galleryItems[currentGalleryIdx].src;
  img.alt = galleryItems[currentGalleryIdx].label;
  cap.textContent = galleryItems[currentGalleryIdx].label + ' (' + (currentGalleryIdx + 1) + '/' + galleryItems.length + ')';
}

// Lightbox event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
  document.querySelector('.lightbox-next')?.addEventListener('click', () => navigateLightbox(1));
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
});

/* ====== CONTACT FORM ====== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent successfully.');
      form.reset();
    });
  }
});

/* ====== TOAST NOTIFICATION ====== */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ====== INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
  updateFinancialSummaryFromContribs();
  updateTransactionsFromContribs();
  renderMembers();
  renderContributionDashboard();
  renderAnnouncements();
  renderGallery();
  initCharts();

  // Trigger counter animation when hero stats come into view
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(heroStats);
  }

  // Member search
  const searchInput = document.getElementById('memberSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderMembers(e.target.value);
      
      // If searching (text exists), scroll to the members section so results are visible
      if (e.target.value.trim().length > 0) {
        const membersSection = document.getElementById('members');
        if (membersSection) {
          membersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // Edit toggle
  document.getElementById('editToggleBtn')?.addEventListener('click', toggleEditMode);

  // Add Member
  document.getElementById('addMemberBtn')?.addEventListener('click', () => {
    if (authorizeAdmin()) openModal(addMemberModal);
  });
  document.getElementById('addMemberForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newMemberName').value.trim();
    const role = document.getElementById('newMemberRole').value;
    if (name) addMember(name, role);
    e.target.reset();
  });

  // Share
  document.getElementById('shareWABtn')?.addEventListener('click', shareAsImage);

  // Reset
  document.getElementById('resetBtn')?.addEventListener('click', resetContribs);

  // Print PDF
  document.getElementById('printPdfBtn')?.addEventListener('click', printToPDF);
  const printDateEl = document.getElementById('printDate');
  if (printDateEl) printDateEl.textContent = new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' });

  // Back to top
  document.querySelectorAll('.section-header, .about-card, .step-card, .finance-card, .member-card, .announcement-card, .gallery-item, .leadership-contact-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // --- FINANCE TABS LOGIC ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(tabId) {
    // Update buttons
    tabBtns.forEach(b => {
      if (b.dataset.tab === tabId) b.classList.add('active');
      else b.classList.remove('active');
    });
    
    // Update contents
    tabContents.forEach(content => {
      if (content.id === tabId) content.classList.add('active');
      else content.classList.remove('active');
    });

    // Refresh charts
    if (tabId === 'summary-tab' || tabId === 'history-tab') {
      initCharts();
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.dataset.tab);
    });
  });

  // Handle external tab triggers (from Hero or Nav)
  document.querySelectorAll('[data-target-tab]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const targetTab = trigger.dataset.targetTab;
      activateTab(targetTab);
    });
  });
});

/* ====== NEWSLETTER FORM ====== */
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Subscribed! You\'ll receive updates via email.');
  e.target.reset();
});
