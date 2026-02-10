let open = false;

function openCard(){
  let name = document.getElementById("guestName").value.trim();
  if(!name) return alert("Please enter your name");

  document.getElementById("nameBox").style.display="none";
  document.getElementById("card").style.display="block";

  document.querySelector(".guest").innerText = "," + name;

  document.getElementById("bgm").play();
  confetti();
}

document.addEventListener("click", e=>{
  const card = document.querySelector(".card");
  if(!card || e.target.closest(".name-box")) return;

  open = !open;
  card.style.transform = open ? "rotateY(180deg)" : "rotateY(0deg)";
});

function confetti(){
  for(let i=0;i<100;i++){
    let c = document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.animationDuration=2+Math.random()*3+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}

const weddingDate = new Date("March 29, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 Today is the Wedding Day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days} days ${hours} hrs ${mins} mins ${secs} secs remaining`;
}, 1000);


