


function getTime() {
  const myDate = new Date()
  let hour = myDate.getHours();
  let minute = myDate.getMinutes();
  let seconds = myDate.getSeconds();

  const hourEle = document.querySelector(".hour");
  const minEle = document.querySelector(".minute");
  const secEle = document.querySelector(".second");

  hourEle.innerHTML = "";
  minEle.innerHTML = "";
  secEle.innerHTML = "";

  if (hour < 10) {
    hour = "0" + hour.toString(); 
  }
  if (minute < 10) {
    minute = "0" + minute.toString(); 
  }
  if (seconds < 10) {
    seconds = "0" + seconds.toString(); 
  }
  
  hourEle.append(hour);
  minEle.append(minute);
  secEle.append(seconds);
}

setInterval(getTime, 1000);
