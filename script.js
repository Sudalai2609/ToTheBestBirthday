// Switch screens
function nextScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  if (id === 'final') {
    startTyping();
  }
}

// Typing effect for final screen
const text = `Okayy so Anjanaa, have a WONDERFUL year ahead and....
and.....
and ....
remember that dhoni is a thatha now, i.e., grandpa dhoni, then rcb is >> csk, then csk got a 2 year ban, then you're short, chalant 😇 thennnn dhoni is conserving his energy by being a finisher 🤗🤗
okayyy anyways truths aside.okayy okayy sorryy 😇😇 Happyyyy Birthdayyyyyyyy ANAIANAAAAA!!!!!! 🎀😋`;

let started = false;

function startTyping() {
  if (started) return;
  started = true;

  const target = document.getElementById('typing-text');
  let i = 0;

  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

// Reasons array and random display
const reasons = [
  "ITS YOU DUHHH 🙄💅🏻 WHAT OTHER REASON DO YOU EXPECT 😇",
  "You're lowkenuinenly SHORT.",
  "You are the most chalant person",
  "TODDLER.",
  "OKAY JOKES ASIDE",
  "Nah like u genuinely made things better ykk not gonna explain cos yk",
  "its js sooo fun and relaxing talking to youuu 😋😋",
  "cos you're a tomatoe duhh.",
  "rcb >> csk",
  "yk how we came to know each other? u js gave req on december 25 and life has been great since 😋😋",
  "alsooo my fav moments would be us talking on calls while my awkward dumbahh js freezes up 😭🙏🏻",
  "i love the 4+ messages",
  "your dumb short demure ahh somehow makes life better"
];

function showReason() {
  const card = document.getElementById('reason-card');
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  card.innerText = random;
}

// Heart animation
const button = document.getElementById('heart-btn');

button.addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🎀';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight - 50 + 'px';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
});
