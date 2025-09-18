// Array of 100 gifts (customize as needed)
const gifts = [
    { title: 'Plant', desc: 'A beautiful plant to brighten your day!', img: 'https://via.placeholder.com/200x120.png?text=Plant', unlocked: true },
    { title: 'A hug', desc: 'A big, warm hug from me to you!', img: 'https://via.placeholder.com/200x120.png?text=Hug', unlocked: false },
    { title: 'Card', desc: 'A heartfelt card with all my love.', img: 'https://via.placeholder.com/200x120.png?text=Card', unlocked: false },
    { title: 'Movie tickets home theatre', desc: 'Movie night at home with tickets and popcorn!', img: 'https://via.placeholder.com/200x120.png?text=Movie', unlocked: false },
    { title: 'Lunch', desc: 'A special lunch made just for you.', img: 'https://via.placeholder.com/200x120.png?text=Lunch', unlocked: false },
    { title: 'Breakfast', desc: 'Breakfast in bed, your favorite way!', img: 'https://via.placeholder.com/200x120.png?text=Breakfast', unlocked: false },
    { title: 'Champa', desc: 'A sweet surprise from Champa.', img: 'https://via.placeholder.com/200x120.png?text=Champa', unlocked: false },
    { title: 'A poem', desc: 'A poem written just for you.', img: 'https://via.placeholder.com/200x120.png?text=Poem', unlocked: false },
    { title: 'Snacks', desc: 'A basket of your favorite snacks.', img: 'https://via.placeholder.com/200x120.png?text=Snacks', unlocked: false },
    { title: 'Cake', desc: 'A delicious cake to celebrate you!', img: 'https://via.placeholder.com/200x120.png?text=Cake', unlocked: false },
    { title: 'Shilpi aunty', desc: 'A special message from Shilpi aunty.', img: 'https://via.placeholder.com/200x120.png?text=Shilpi', unlocked: false },
    { title: 'Hiya', desc: 'A surprise from Hiya!', img: 'https://via.placeholder.com/200x120.png?text=Hiya', unlocked: false },
    { title: 'Bouquete', desc: 'A bouquet of fresh flowers.', img: 'https://via.placeholder.com/200x120.png?text=Bouquet', unlocked: false },
    { title: 'Bday intro card', desc: 'A special birthday introduction card.', img: 'https://via.placeholder.com/200x120.png?text=Intro+Card', unlocked: false },
    { title: 'Spa + Nap', desc: 'A relaxing spa session and a nap.', img: 'https://via.placeholder.com/200x120.png?text=Spa+Nap', unlocked: false },
    { title: 'Origami', desc: 'Handmade origami art.', img: 'https://via.placeholder.com/200x120.png?text=Origami', unlocked: false },
    { title: 'Photo Album', desc: 'A photo album of our best memories.', img: 'https://via.placeholder.com/200x120.png?text=Album', unlocked: false },
    { title: 'Hall room setup', desc: 'A decorated hall room for your birthday.', img: 'https://via.placeholder.com/200x120.png?text=Hall+Setup', unlocked: false },
    { title: 'This Awesome Website', desc: 'A custom website made just for you!', img: 'https://via.placeholder.com/200x120.png?text=Website', unlocked: false },
    { title: 'Emergency Chocolate kit', desc: 'A kit for chocolate emergencies.', img: 'https://via.placeholder.com/200x120.png?text=Chocolate', unlocked: false },
    { title: 'Scratch Url', desc: 'A fun Scratch project for you.', img: 'https://via.placeholder.com/200x120.png?text=Scratch', unlocked: false },
    { title: 'A perfume', desc: 'A lovely perfume picked just for you.', img: 'https://via.placeholder.com/200x120.png?text=Perfume', unlocked: false },
    { title: 'Custom Phonecase', desc: 'A phonecase designed for you.', img: 'https://via.placeholder.com/200x120.png?text=Phonecase', unlocked: false },
    { title: 'Cake', desc: 'Another cake, because you deserve two!', img: 'https://via.placeholder.com/200x120.png?text=Cake', unlocked: false },
    { title: 'Fortune', desc: 'A fortune for your bright future.', img: 'https://via.placeholder.com/200x120.png?text=Fortune', unlocked: false },
    { title: 'Pic frame', desc: 'A custom picture frame.', img: 'https://via.placeholder.com/200x120.png?text=Frame', unlocked: false },
    { title: 'Fake award', desc: 'A fake award for the best mom!', img: 'https://via.placeholder.com/200x120.png?text=Award', unlocked: false },
    { title: 'Envelope', desc: 'A surprise envelope.', img: 'https://via.placeholder.com/200x120.png?text=Envelope', unlocked: false },
    { title: 'Test Paper', desc: 'A fun test paper for you.', img: 'https://via.placeholder.com/200x120.png?text=Test+Paper', unlocked: false },
    { title: 'Spotify Card', desc: 'A Spotify card with your favorite songs.', img: 'https://via.placeholder.com/200x120.png?text=Spotify', unlocked: false },
    { title: 'Necklace', desc: 'A beautiful necklace.', img: 'https://via.placeholder.com/200x120.png?text=Necklace', unlocked: false },
    { title: 'Aarathi pinnis gift', desc: 'Aarathi pinni’s special gift.', img: 'https://via.placeholder.com/200x120.png?text=Aarathi', unlocked: false },
    { title: 'Meghaansh\'s Gift', desc: 'A surprise from Meghaansh.', img: 'https://via.placeholder.com/200x120.png?text=Meghaansh', unlocked: false },
    { title: 'Shilpi Aunty and Hiyas gift', desc: 'A joint gift from Shilpi aunty and Hiya.', img: 'https://via.placeholder.com/200x120.png?text=Shilpi+Hiya', unlocked: false },
    { title: 'Custom Pen', desc: 'A pen customized for you.', img: 'https://via.placeholder.com/200x120.png?text=Pen', unlocked: false },
    { title: 'Therapy Card', desc: 'A card for instant therapy.', img: 'https://via.placeholder.com/200x120.png?text=Therapy', unlocked: false },
    { title: 'Diy Camera', desc: 'A DIY camera project.', img: 'https://via.placeholder.com/200x120.png?text=Camera', unlocked: false },
    { title: 'Fridge Megnets', desc: 'Cute fridge magnets.', img: 'https://via.placeholder.com/200x120.png?text=Magnets', unlocked: false },
    { title: 'Mihiraamsh\'s food', desc: 'A delicious treat from Mihiraamsh.', img: 'https://via.placeholder.com/200x120.png?text=Food', unlocked: false }
];
// Fill up to 100 gifts with placeholders
while (gifts.length < 100) {
    gifts.push({
        title: `Gift #${gifts.length+1}`,
        desc: `This is a description for gift #${gifts.length+1}.`,
        img: `https://via.placeholder.com/200x120.png?text=Gift+${gifts.length+1}`,
        unlocked: false
    });
}

const grid = document.getElementById('gifts-grid');
const modal = document.getElementById('postcard-modal');
const closeBtn = document.getElementById('close-postcard');
const giftImg = document.getElementById('gift-img');
const giftTitle = document.getElementById('gift-title');
const giftDesc = document.getElementById('gift-desc');

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('giftsProgress');
    if (saved) {
        const unlockedArr = JSON.parse(saved);
        gifts.forEach((gift, i) => gift.unlocked = !!unlockedArr[i]);
    }
}

// Save progress to localStorage
function saveProgress() {
    const unlockedArr = gifts.map(g => g.unlocked);
    localStorage.setItem('giftsProgress', JSON.stringify(unlockedArr));
}

function renderGifts() {
    grid.innerHTML = '';
    gifts.forEach((gift, i) => {
        const btn = document.createElement('button');
        btn.className = 'gift-square';
        if (gift.unlocked && localStorage.getItem('lastOpenedGift') >= i) {
            btn.classList.add('opened');
        }
        btn.innerHTML = gift.unlocked ? (i+1) : '<span style="font-size:1.3em">🔒</span>';
        btn.disabled = !gift.unlocked;
        btn.style.cursor = gift.unlocked ? 'pointer' : 'not-allowed';
        btn.addEventListener('click', () => openGift(i));
        grid.appendChild(btn);
    });
}

function openGift(i) {
    giftImg.src = gifts[i].img;
    giftTitle.textContent = gifts[i].title;
    giftDesc.textContent = gifts[i].desc;
    modal.style.display = 'flex';
    // Mark as opened
    localStorage.setItem('lastOpenedGift', i);
    // Unlock next gift
    if (i+1 < gifts.length && !gifts[i+1].unlocked) {
        gifts[i+1].unlocked = true;
        saveProgress();
        renderGifts();
    } else {
        saveProgress();
        renderGifts();
        // If 100th gift is opened, show bill
        if (i === 99) {
            setTimeout(() => {
                const bill = document.createElement('div');
                bill.className = 'invoice-modal';
                bill.innerHTML = `<div class="invoice-content">
                    <span class="invoice-close">&times;</span>
                    <h3>🎉 100 Gifts Celebration Bill</h3>
                    <ul style='list-style:none;padding:0;'>
                        <li>Brought to you by Hershies Handmade Delights!</li>
                        <li>100 Gifts: $900</li>
                        <li>Love Tax: $65</li>
                        <li>Joy Surcharge: $20</li>
                        <li>Happiness Handling Fee: $15</li>
                    </ul>
                    <strong>Total Amount (incl. all taxes): $1000</strong>
                    <p style='margin-top:12px;'>Thank you for being the most priceless mom, Amma! <br> But I'm sorry today was a bit pricy... <br> Now, please pay the bill and also leave a tip, that will be very helpfull! 😊❤️<br>— Harshini</p>
                </div>`;
                document.body.appendChild(bill);
                bill.querySelector('.invoice-close').onclick = () => bill.remove();
                bill.onclick = e => { if (e.target === bill) bill.remove(); };
            }, 600);
        }
    }
}

// Reset progress
function resetGifts() {
    gifts.forEach((gift, i) => gift.unlocked = i === 0);
    localStorage.removeItem('lastOpenedGift');
    saveProgress();
    renderGifts();
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === modal) modal.style.display = 'none';
};

// Add reset button
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Start from the First Gift';
resetBtn.className = 'reset-gifts-btn';
resetBtn.onclick = resetGifts;
if (grid.parentNode) {
    grid.parentNode.insertBefore(resetBtn, grid);
}

// Confetti explosion when typing "Amita"
let confettiActive = false;
let confettiTimeout;

function launchConfetti() {
    if (confettiActive) return;
    confettiActive = true;
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    // Generate confetti pieces
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `hsl(${Math.random()*360},80%,70%)`;
        confetti.style.animationDelay = (Math.random()*0.7) + 's';
        confettiContainer.appendChild(confetti);
    }
    // Remove confetti after 2.5s
    confettiTimeout = setTimeout(() => {
        confettiContainer.remove();
        confettiActive = false;
    }, 2500);
}

let amitaBuffer = '';
document.addEventListener('keydown', function(e) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    amitaBuffer += e.key.toLowerCase();
    if (amitaBuffer.length > 5) amitaBuffer = amitaBuffer.slice(-5);
    if (amitaBuffer === 'amita') {
        launchConfetti();
        amitaBuffer = '';
    }
});

// --- Easter Eggs ---
// 1. Clickable top-left corner: confetti + message
const cornerEgg = document.createElement('div');
cornerEgg.className = 'corner-egg';
document.body.appendChild(cornerEgg);
cornerEgg.addEventListener('click', function() {
    launchConfetti();
    setTimeout(() => {
        const msg = document.createElement('div');
        msg.textContent = "You’re the Queen of Everything!";
        msg.style.position = 'fixed';
        msg.style.top = '40px';
        msg.style.left = '40px';
        msg.style.background = '#7c43bd';
        msg.style.color = '#fff';
        msg.style.padding = '14px 28px';
        msg.style.borderRadius = '18px';
        msg.style.fontSize = '1.3em';
        msg.style.zIndex = 3100;
        msg.style.fontFamily = "'Dancing Script', cursive";
        document.body.appendChild(msg);
        setTimeout(()=>msg.remove(), 2200);
    }, 400);
});

// 2. Photo hover caption
const ovalFrame = document.querySelector('.oval-frame');
if (ovalFrame) {
    const caption = document.createElement('div');
    caption.className = 'photo-caption';
    caption.textContent = "She’s beauty, she’s sass";
    ovalFrame.appendChild(caption);
}

// 3. Type 'LOVE' → heart explosion
let loveBuffer = '';
function launchHearts() {
    if (document.querySelector('.heart-container')) return;
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    document.body.appendChild(heartContainer);
    for (let i = 0; i < 60; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💜';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = (Math.random()*0.7) + 's';
        heartContainer.appendChild(heart);
    }
    setTimeout(() => heartContainer.remove(), 2200);
}
document.addEventListener('keydown', function(e) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    loveBuffer += e.key.toUpperCase();
    if (loveBuffer.length > 4) loveBuffer = loveBuffer.slice(-4);
    if (loveBuffer === 'LOVE') {
        launchHearts();
        loveBuffer = '';
    }
});

// 4. Click footer → fake invoice
const footer = document.querySelector('footer');
if (footer) {
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', function() {
        if (document.querySelector('.invoice-modal')) return;
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content">
            <span class="invoice-close">&times;</span>
            <h3>Invoice</h3>
            <ul>
                <li>100 hugs</li>
                <li>1 million laughs</li>
                <li>Unlimited love</li>
            </ul>
            <strong>Total Due: 0 (Paid in full by Amita’s awesomeness)</strong>
        </div>`;
        document.body.appendChild(modal);
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// --- More Easter Eggs ---
// 5. Click the 'M' in Mom for compliment scroll
const momM = document.getElementById('mom-m');
if (momM) {
    momM.style.cursor = 'pointer';
    momM.title = 'Click me!';
    momM.addEventListener('click', function() {
        const compliments = [
            "You make chaos look graceful.",
            "Your hugs fix everything.",
            "You’re 90% caffeine, 10% magic.",
            "You raised a rebel and survived. That’s power.",
            "You’re the Wi-Fi of my soul—everything works better when you’re around."
        ];
        let idx = 0;
        const scroll = document.createElement('div');
        scroll.style.position = 'fixed';
        scroll.style.left = '50%';
        scroll.style.top = '60px';
        scroll.style.transform = 'translateX(-50%)';
        scroll.style.background = '#7c43bd';
        scroll.style.color = '#fff';
        scroll.style.padding = '18px 32px';
        scroll.style.borderRadius = '18px';
        scroll.style.fontSize = '1.2em';
        scroll.style.zIndex = 3200;
        scroll.style.fontFamily = "'Dancing Script', cursive";
        scroll.textContent = compliments[idx];
        document.body.appendChild(scroll);
        const interval = setInterval(() => {
            idx++;
            if (idx < compliments.length) {
                scroll.textContent = compliments[idx];
            } else {
                clearInterval(interval);
                setTimeout(()=>scroll.remove(), 1200);
            }
        }, 1400);
    });
}

// 6. Click tiny dot for mini gift animation
const tinyDot = document.getElementById('tiny-dot');
if (tinyDot) {
    tinyDot.addEventListener('click', function() {
        const gift = document.createElement('div');
        gift.style.position = 'fixed';
        gift.style.right = '30px';
        gift.style.bottom = '30px';
        gift.style.zIndex = 3600;
        gift.style.fontSize = '2.5em';
        gift.textContent = '🎁';
        document.body.appendChild(gift);
        setTimeout(()=>{
            gift.style.transition = 'transform 1.2s cubic-bezier(.62,.01,.36,1), opacity 1.2s';
            gift.style.transform = 'translateY(-180px) scale(1.7)';
            gift.style.opacity = '0';
        }, 100);
        setTimeout(()=>gift.remove(), 1400);
    });
}

// 7. Click favicon to change title
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
    favicon.addEventListener('click', function() {
        document.title = "Harshini’s Hero";
    });
}

// 8. Hover over a gift box for a joke
// (Feature removed as per user request)

// 9. Hover over the word 'birthday' for animation/sound
const birthdayWord = Array.from(document.querySelectorAll('h1,h2,h3,p,span')).find(el=>el.textContent.toLowerCase().includes('birthday'));
if (birthdayWord) {
    birthdayWord.style.cursor = 'pointer';
    birthdayWord.addEventListener('mouseenter', function() {
        const audio = document.getElementById('birthday-audio');
        if (audio) audio.play();
        birthdayWord.style.textShadow = '0 0 18px #b39ddb, 0 0 8px #fff';
    });
    birthdayWord.addEventListener('mouseleave', function() {
        const audio = document.getElementById('birthday-audio');
        if (audio) { audio.pause(); audio.currentTime = 0; }
        birthdayWord.style.textShadow = '';
    });
}

// 10. Keyboard: 100, SASS, HUG, LEGEND
let eggBuffer = '';
document.addEventListener('keydown', function(e) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    eggBuffer += e.key.toUpperCase();
    if (eggBuffer.length > 6) eggBuffer = eggBuffer.slice(-6);
    if (eggBuffer.endsWith('100')) {
        // Open a random gift
        const unlocked = gifts.filter(g=>g.unlocked);
        if (unlocked.length) {
            const idx = Math.floor(Math.random()*unlocked.length);
            openGift(idx);
        }
        eggBuffer = '';
    } else if (eggBuffer.endsWith('SASS')) {
        const msg = document.createElement('div');
        msg.textContent = 'Your sarcasm is a national treasure.';
        msg.style.position = 'fixed';
        msg.style.left = '50%';
        msg.style.top = '80px';
        msg.style.transform = 'translateX(-50%)';
        msg.style.background = '#7c43bd';
        msg.style.color = '#fff';
        msg.style.padding = '18px 32px';
        msg.style.borderRadius = '18px';
        msg.style.fontSize = '1.2em';
        msg.style.zIndex = 3400;
        msg.style.fontFamily = "'Dancing Script', cursive";
        document.body.appendChild(msg);
        setTimeout(()=>msg.remove(), 1800);
        eggBuffer = '';
    } else if (eggBuffer.endsWith('HUG')) {
        const hug = document.createElement('img');
        hug.src = 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif';
        hug.style.position = 'fixed';
        hug.style.left = '50%';
        hug.style.top = '50%';
        hug.style.transform = 'translate(-50%,-50%)';
        hug.style.zIndex = 3500;
        hug.style.width = '180px';
        hug.style.borderRadius = '18px';
        document.body.appendChild(hug);
        setTimeout(()=>hug.remove(), 2200);
        eggBuffer = '';
    } else if (eggBuffer.endsWith('LEGEND')) {
        window.open('https://www.fontspace.com/crown-font-f19136', '_blank');
        eggBuffer = '';
    }
});

loadProgress();
renderGifts();

// --- Interactive Zone Features ---
// NOTE: The following features are now on separate pages.
// The code is kept here for reference but is not active.

// 2. Scene Reenactment
const sceneBtn = document.getElementById('scene-reenact');
if (sceneBtn) {
    sceneBtn.addEventListener('click', function() {
        const script = [
            'Harshini enters the kitchen dramatically.',
            'Harshini: “Mom, I need emotional support and snacks.”',
            'Mom: “You need to clean your room and drink water.”',
            'Cue dramatic music. Fade to black.'
        ];
        let idx = 0;
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>🎭 Scene Reenactment</h3><div id="scene-script" style="min-height:80px;"></div></div>`;
        document.body.appendChild(modal);
        const scriptDiv = modal.querySelector('#scene-script');
        function nextLine() {
            if (idx < script.length) {
                scriptDiv.textContent = script[idx++];
            } else {
                modal.remove();
            }
        }
        nextLine();
        scriptDiv.onclick = nextLine;
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// 3. Mom’s Oscar Ceremony
const oscarBtn = document.getElementById('oscar-ceremony');
if (oscarBtn) {
    oscarBtn.addEventListener('click', function() {
        const awards = [
            'Best Supporting Role in Harshini’s Life',
            'Lifetime Achievement in Sass',
            'Best Improvised Lecture',
            'Most Iconic Eye Roll',
            'Best Use of “Because I Said So”'
        ];
        const award = awards[Math.floor(Math.random()*awards.length)];
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>🏆 Mom’s Oscar Ceremony</h3><p>${award}</p><p><em>Take a screenshot for your trophy shelf!</em></p></div>`;
        document.body.appendChild(modal);
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// 6. Open When… Digital Cards
const openWhenBtn = document.getElementById('open-when');
if (openWhenBtn) {
    openWhenBtn.addEventListener('click', function() {
        const cards = [
            {title: 'Open when you’re tired', msg: 'You’ve done enough. Rest like royalty.'},
            {title: 'Open when you miss me', msg: 'I’m probably annoying someone else right now. But I love you.'},
            {title: 'Open when you feel unappreciated', msg: 'You’re the reason I’m awesome. That’s a full-time job.'}
        ];
        let idx = 0;
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>💌 Open When…</h3><div id='open-card' style='min-height:60px;'></div><button id='next-card' style='margin-top:12px;padding:6px 18px;border-radius:8px;border:none;background:#b39ddb;color:#fff;font-size:1em;'>Next</button></div>`;
        document.body.appendChild(modal);
        const cardDiv = modal.querySelector('#open-card');
        const nextBtn = modal.querySelector('#next-card');
        function showCard() {
            cardDiv.innerHTML = `<strong>${cards[idx].title}</strong><br>${cards[idx].msg}`;
        }
        showCard();
        nextBtn.onclick = function() {
            idx = (idx+1)%cards.length;
            showCard();
        };
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// 7. Compliment Generator
const complimentBtn = document.getElementById('compliment-gen');
if (complimentBtn) {
    complimentBtn.addEventListener('click', function() {
        const compliments = [
            'You make chaos look graceful.',
            'Your hugs fix everything.',
            'You’re 90% caffeine, 10% magic.',
            'You raised a rebel and survived. That’s power.',
            'You’re the Wi-Fi of my soul—everything works better when you’re around.'
        ];
        const compliment = compliments[Math.floor(Math.random()*compliments.length)];
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>🧠 Compliment Generator</h3><p>${compliment}</p></div>`;
        document.body.appendChild(modal);
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// 8. Legacy Timeline
const legacyBtn = document.getElementById('legacy-timeline');
if (legacyBtn) {
    legacyBtn.addEventListener('click', function() {
        const milestones = [
            '197X: Born. World upgraded.',
            '199X: Became the most stylish person in the family.',
            '200X: Raised Harshini. Survived.',
            '201X: Mastered the art of multitasking and sarcasm.',
            '202X: Became a legend. Officially.'
        ];
        let idx = 0;
        const modal = document.createElement('div');
        modal.className = 'invoice-modal';
        modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>📜 Legacy Timeline</h3><div id='timeline-milestone' style='min-height:60px;'></div><button id='next-milestone' style='margin-top:12px;padding:6px 18px;border-radius:8px;border:none;background:#b39ddb;color:#fff;font-size:1em;'>Next</button></div>`;
        document.body.appendChild(modal);
        const mileDiv = modal.querySelector('#timeline-milestone');
        const nextBtn = modal.querySelector('#next-milestone');
        function showMilestone() {
            mileDiv.innerHTML = milestones[idx];
        }
        showMilestone();
        nextBtn.onclick = function() {
            idx = (idx+1)%milestones.length;
            showMilestone();
        };
        modal.querySelector('.invoice-close').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
}

// --- Memory Lane Timeline ---
const memoryLane = document.querySelector('.memory-lane');
if (memoryLane) {
    memoryLane.innerHTML = `
        <h2>📸 Memory Lane</h2>
        <div class="timeline-chapter" data-chapter="1">
            <div class="chapter-title">📍 Chapter 1: “Before I Existed”</div>
            <div class="chapter-content" style="display:none;">
                <img src="https://via.placeholder.com/220x140.png?text=Childhood" alt="Childhood" style="border-radius:12px;margin:10px 0;">
                <div class="caption">The legend begins…</div>
                <div class="fake-diary">Dear Diary, Today I aced my spelling test. Obviously. — Amita</div>
                <div class="report-card">Report Card: <strong>Amita is the best at everything. A++</strong></div>
                <img src="https://via.placeholder.com/220x140.png?text=Wedding+Day" alt="Wedding" style="border-radius:12px;margin:10px 0;">
                <div class="caption">She said yes. The world changed.</div>
            </div>
        </div>
        <div class="timeline-chapter" data-chapter="2">
            <div class="chapter-title">📍 Chapter 2: “The Harshini Era Begins”</div>
            <div class="chapter-content" style="display:none;">
                <img src="https://via.placeholder.com/220x140.png?text=Baby+Harshini" alt="Baby" style="border-radius:12px;margin:10px 0;">
                <div class="caption">Her reaction: “How is she so cute and so loud?”</div>
                <ul class="moms-firsts">
                    <li>First diaper disaster</li>
                    <li>First tantrum</li>
                    <li>First laugh</li>
                </ul>
                <div class="comic-strip">[Comic: Mom tries to teach shoelaces, Harshini ties knots everywhere]</div>
                <div class="voice-note">You survived me. Respect.</div>
            </div>
        </div>
        <div class="timeline-chapter" data-chapter="3">
            <div class="chapter-title">📍 Chapter 3: “The Chaos Years”</div>
            <div class="chapter-content" style="display:none;">
                <img src="https://via.placeholder.com/220x140.png?text=School+Event" alt="School Event" style="border-radius:12px;margin:10px 0;">
                <img src="https://via.placeholder.com/220x140.png?text=Vacation" alt="Vacation" style="border-radius:12px;margin:10px 0;">
                <div class="caption">Random kitchen disasters included.</div>
                <div class="scoreboard">Mom vs. Homework: <strong>Mom 10 - Homework 0</strong></div>
                <div class="headline">Fake News: Mom Saves Family From Burnt Pasta</div>
                <div class="gallery">[Gallery of iconic reactions]</div>
            </div>
        </div>
        <div class="timeline-chapter" data-chapter="4">
            <div class="chapter-title">📍 Chapter 4: “The Sass Chronicles”</div>
            <div class="chapter-content" style="display:none;">
                <ul class="savage-comebacks">
                    <li>“Because I said so.”</li>
                    <li>“You’ll understand when you’re older.”</li>
                    <li>“I brought you into this world…”</li>
                </ul>
                <div class="mom-dictionary">“5 more minutes” = “I’ll be there in 30”</div>
                <div class="reenactment">[Video/animation: Harshini reenacts mom’s sass]</div>
                <div class="badge">🏅 Certified Sass Queen</div>
            </div>
        </div>
        <div class="timeline-chapter" data-chapter="5">
            <div class="chapter-title">📍 Chapter 5: “The Quiet Hero”</div>
            <div class="chapter-content" style="display:none;">
                <div class="letter">Letter: “Things you did that I never thanked you for…”</div>
                <img src="https://via.placeholder.com/220x140.png?text=Mundane+Hero" alt="Mundane" style="border-radius:12px;margin:10px 0;">
                <div class="caption">She made it look easy</div>
                <div class="superpowers">Mom’s Superpowers: <ul><li>Multitasking</li><li>Patience</li><li>Love</li></ul></div>
                <button class="interactive-card" id="hidden-compliment">Hidden Compliment Generator</button>
            </div>
        </div>
        <div class="timeline-chapter" data-chapter="6">
            <div class="chapter-title">📍 Chapter 6: “The Legacy Log”</div>
            <div class="chapter-content" style="display:none;">
                <ul class="achievements">
                    <li>197X: Born. World upgraded.</li>
                    <li>199X: Became the most stylish person in the family.</li>
                    <li>200X: Raised Harshini. Survived.</li>
                    <li>201X: Mastered the art of multitasking and sarcasm.</li>
                    <li>202X: Became a legend. Officially.</li>
                </ul>
                <div class="family-tree">Family Tree: CEO of Snacks, Minister of Guilt Trips</div>
                <div class="lessons">Lessons You Taught Me: <ul><li>Kindness</li><li>Resilience</li><li>How to laugh at myself</li></ul></div>
                <div class="future-vision">Future Vision: “Travel the world, write a book, and keep being awesome!”</div>
            </div>
        </div>
    `;
    // Toggle chapters open/close
    memoryLane.querySelectorAll('.chapter-title').forEach(title => {
        title.style.cursor = 'pointer';
        title.onclick = function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        };
    });
    // Hidden compliment generator
    const complimentBtn = memoryLane.querySelector('#hidden-compliment');
    if (complimentBtn) {
        complimentBtn.onclick = function() {
            const compliments = [
                'You make chaos look graceful.',
                'Your hugs fix everything.',
                'You’re 90% caffeine, 10% magic.',
                'You raised a rebel and survived. That’s power.',
                'You’re the Wi-Fi of my soul—everything works better when you’re around.'
            ];
            const compliment = compliments[Math.floor(Math.random()*compliments.length)];
            const modal = document.createElement('div');
            modal.className = 'invoice-modal';
            modal.innerHTML = `<div class="invoice-content"><span class="invoice-close">&times;</span><h3>Hidden Compliment</h3><p>${compliment}</p></div>`;
            document.body.appendChild(modal);
            modal.querySelector('.invoice-close').onclick = () => modal.remove();
            modal.onclick = e => { if (e.target === modal) modal.remove(); };
        };
    }
}

// Falling birthday emojis
const birthdayEmojis = ['🎂', '🎉', '🎈', '🎁', '🎊', '🎇', '🎆', '🍰', '🍭', '🍬'];
function launchBirthdayEmojis() {
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);
    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'falling-emoji';
        emoji.textContent = birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        emojiContainer.appendChild(emoji);
    }
    setTimeout(() => emojiContainer.remove(), 5000);
}

let birthdayBuffer = '';
document.addEventListener('keydown', function(e) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    birthdayBuffer += e.key.toLowerCase();
    if (birthdayBuffer.length > 8) birthdayBuffer = birthdayBuffer.slice(-8);
    if (birthdayBuffer === 'birthday') {
        launchBirthdayEmojis();
        birthdayBuffer = '';
    }
});

// Add CSS for falling emojis
const style = document.createElement('style');
style.textContent = `
    .emoji-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    }
    .falling-emoji {
        position: absolute;
        top: -50px;
        font-size: 2em;
        animation: fall 4s linear infinite;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
