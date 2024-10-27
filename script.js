
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
    document.getElementById("timer").innerHTML = "Deadline has passed!";
  }
}


setInterval(updateTimer, 1000);


const participants = [
  {
    name: "Rahmatolloh Oktyabirov",
    instagramUrl: "https://www.instagram.com/johndoe/",
    score: 98,
    imageUrl: "https://via.placeholder.com/50"
  },

];


const participantsContainer = document.getElementById('participants');

participants.forEach(participant => {
  const participantElement = document.createElement('div');
  participantElement.classList.add('participant');

  participantElement.innerHTML = `
    <img src="${participant.imageUrl}" alt="${participant.name}" />
    <div class="participant-info">
      <h3>${participant.name}</h3>
      <a href="${participant.instagramUrl}" target="_blank">View on Instagram</a>
    </div>
    <div class="participant-score">${participant.score}</div>
  `;

  participantsContainer.appendChild(participantElement);
});
