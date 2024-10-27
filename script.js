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
      <a href="${participant.instagramUrl}" target="_blank">Instagramm videosini ko'rish</a>
    </div>
    <div class="participant-score">
      <div>Soni: ${participant.score}</div>
      <div>Aniqlik: ${participant.accuracy}</div>
    </div>
  `;

  participantsContainer.appendChild(participantElement);
});
