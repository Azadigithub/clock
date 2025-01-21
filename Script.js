const hour = document.querySelector(".houre");
const min = document.querySelector(".minute");
const sec = document.querySelector(".secound");

function setDate() {
  const now = new Date();
  const getSecound = now.getSeconds();
  const getMinut = now.getMinutes();
  const getHoure = now.getHours();
  const SecoundDegree = (getSecound / 60) * 360;
  const MinutDegree = (getMinut / 60) * 360;
  const HoureDegree = (getHoure / 12) * 360;

  sec.style.transform = `rotate(${SecoundDegree}deg)`;
  min.style.transform = `rotate(${MinutDegree}deg)`;
  hour.style.transform = `rotate(${HoureDegree}deg)`;

  //   console.log(getHoure);
  //   console.log(getMinut);
  //   console.log(getSecound);

  //   console.log("H" + HoureDegree);
  //   console.log("M" + MinutDegree);
  //   console.log("S" + SecoundDegree);
}

setInterval(setDate, 1000);
