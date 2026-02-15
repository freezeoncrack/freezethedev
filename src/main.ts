// Grab a container in your HTML to display the info
const container = document.getElementById("lanyard-container") as HTMLDivElement;

// Function to fetch and display Lanyard data
async function updateLanyard() {
  try {
    const res = await fetch("https://lanyard.cnrad.dev/api/1184257409531793469");
    if (!res.ok) throw new Error("Failed to fetch Lanyard data");

    const data = await res.json();

    // Example: render user status, username, and avatar
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${data.discord_user.avatar_url}" alt="avatar" width="50" height="50" style="border-radius:50%;">
        <div>
          <strong>${data.discord_user.username}</strong><br>
          Status: ${data.discord_status || "offline"}
        </div>
      </div>
    `;
  } catch (err) {
    console.error(err);
    container.innerHTML = "Error loading Lanyard data.";
  }
}

// Update every second
setInterval(updateLanyard, 1000);
updateLanyard(); // initial call
