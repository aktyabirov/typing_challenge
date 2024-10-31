// Countdown Timer
const deadline = new Date("2024-11-04T15:00:00Z").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = deadline - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerHTML = "Turnir o'z nihoyasiga yetdi!";
  }
}

setInterval(updateTimer, 1000);


const participants = [
  {
    name: "Muhammad Sadiy Ahmedov",
    instagramUrl: "https://www.instagram.com/reel/DByG6Nko9VK/?igsh=MTJuYnJyMDJ0MTZmcw==",
    score: 132,
    accuracy: "100%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/unknown.png?raw=true"
  },
  {
    name: "Saidumar Alimxanov",
    instagramUrl: "https://www.instagram.com/reel/DBw6kwVt4Z2/?igsh=MXBtNmt0aGlvbHp6cQ==",
    score: 132,
    accuracy: "99%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/saidumar.jpg?raw=true"
  },
  {
    name: "Sa’dullayev Abdulloh Umar",
    instagramUrl: "https://www.instagram.com/reel/DBwfaIaIqDf/?igsh=MWZnbGUycXM2YzZoMA==",
    score: 130,
    accuracy: "99%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/abdulloh.jpg?raw=true"
  },
  
  
  {
    name: "Saitmuminov Shahobiddin",
    instagramUrl: "https://www.instagram.com/reel/DBvho0KoJU3/?igsh=dHdja2NkMzZ6NTV4",
    score: 123,
    accuracy: "89%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/shahobiddin.jpg?raw=true"
  },

  {
    name: "Abdumannon Murodiy",
    instagramUrl: "https://www.instagram.com/reel/DBqSyW-PZnd/?igsh=MTZlNjdkMXg1cWhsNQ==",
    score: 100,
    accuracy: "99%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/unknown.png?raw=true"
  },
  {
    name: "Sattorov Xurshidbek",
    instagramUrl: "https://www.instagram.com/reel/DBqhd5yCnh8/?igsh=MThuMTk0d21xbG5meQ==",
    score: 93,
    accuracy: "96%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/unknown.png?raw=true"
  },
 
  {
    name: "Rahmatolloh Oktyabirov",
    instagramUrl: "https://www.instagram.com/reel/DBov_Y0OA2b/?igsh=b2Ftcjl3Z29oNGIw",
    score: 71,
    accuracy: "89%",
    imageUrl: "https://github.com/aktyabirov/typing_challenge/blob/main/images/rahmatolloh.jpg?raw=true"
  },


];

const participantsContainer = document.getElementById('participants');


participants.forEach((participant, index) => {
  const participantElement = document.createElement('div');
  participantElement.classList.add('participant');

  participantElement.innerHTML = `
    <div class="participant-rank">#${index + 1}</div> <!-- Add rank -->
    <img src="${participant.imageUrl}" alt="${participant.name}" />
    <div class="participant-info">
      <h3>${participant.name}</h3>
      <a href="${participant.instagramUrl}" target="_blank">Videoni ko'rish</a>
    </div>
    <div class="participant-score">
      <div>Soni: ${participant.score}</div>
      <div>Aniqlik: ${participant.accuracy}</div>
    </div>
  `;

  participantsContainer.appendChild(participantElement);
});
