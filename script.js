"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const utcTime = new Date().toUTCString().split(" ")[4];
    const dayOfWeek = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    document.getElementById(
      "currentTime"
    ).textContent = `Current Time (UTC): ${utcTime}`;
    document.getElementById(
      "currentDay"
    ).textContent = `Current Day: ${dayOfWeek}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
