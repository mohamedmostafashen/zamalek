const playersGrid = document.getElementById('playersGrid');
const playerModal = document.getElementById('playerModal');
const playerNameElem = document.getElementById('playerName');
const startDateElem = document.getElementById('startDate');
const durationElem = document.getElementById('duration');
const endDateElem = document.getElementById('endDate');
const remainingTimeElem = document.getElementById('remainingTime');

// بيانات لاعبي نادي الزمالك
const zamalekPlayers = [
    {
        name: "محمود عبد الرازق (شيكابالا)",
        img: "https://i.postimg.cc/02bPWRHP/20240613101601161.webp",
        startDate: "2023-07-01",
        duration: 2
    },
    {
        name: "أحمد سيد (زيزو)",
        img: "https://i.postimg.cc/zvwW4HfH/220203.jpg",
        startDate: "2022-08-15",
        duration: 3
    },
    {
        name: "محمود حمدي (الونش)",
        img: "https://i.postimg.cc/KjYxhdG7/308526-1619019529.webp",
        startDate: "2023-01-10",
        duration: 4
    },
    {
        name: "أشرف بنشرقي",
        img: "https://www.transfermarkt.com/images/portrait/small/274215-1571063928.jpg",
        startDate: "2021-07-01",
        duration: 3
    },
    {
        name: "سيف الدين الجزيري",
        img: "https://www.transfermarkt.com/images/portrait/small/330820-1571063928.jpg",
        startDate: "2022-01-01",
        duration: 4
    },
    {
        name: "محمد أبو جبل",
        img: "https://www.transfermarkt.com/images/portrait/small/169172-1571063928.jpg",
        startDate: "2020-07-01",
        duration: 2
    },
    {
        name: "محمد عواد",
        img: "https://img.a.transfermarkt.technology/portrait/header/184818-1526311768.jpg?lm=1",
        startDate: "2019-07-31",
        duration: 8
    },
    {
        name: "محمد صبحي",
        img: "https://img.a.transfermarkt.technology/portrait/header/583889-1615125839.jpg?lm=1",
        startDate: "2022-08-31",
        duration: 6
    }
];


// حساب تاريخ انتهاء العقد
function calculateEndDate(startDate, duration) {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setFullYear(end.getFullYear() + duration);
    return end.toISOString().split('T')[0];
}

// حساب الوقت المتبقي لانتهاء العقد
function calculateRemainingTime(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff <= 0) return "انتهى العقد";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    return `${years} سنة، ${months} شهر، ${remainingDays} يوم`;
}

// عرض مربعات اللاعبين
function displayPlayers(players) {
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.img}" alt="${player.name}">
            <h3>${player.name}</h3>
        `;
        card.onclick = () => showPlayerDetails(player);
        playersGrid.appendChild(card);
    });
}

// عرض نافذة التفاصيل
function showPlayerDetails(player) {
    const endDate = calculateEndDate(player.startDate, player.duration);
    const remainingTime = calculateRemainingTime(endDate);

    playerNameElem.textContent = player.name;
    startDateElem.textContent = player.startDate;
    durationElem.textContent = player.duration;
    endDateElem.textContent = endDate;
    remainingTimeElem.textContent = remainingTime;

    playerModal.style.display = 'block';
}

// إغلاق النافذة
function closeModal() {
    playerModal.style.display = 'none';
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayPlayers(zamalekPlayers);
});
