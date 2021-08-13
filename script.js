const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, videoSecs) => total + videoSecs);

let leftSeconds = seconds;

const hour = Math.floor(leftSeconds / 3600);
leftSeconds = leftSeconds % 3600;

const min = Math.floor(leftSeconds / 60);
leftSeconds = leftSeconds % 60;
console.log(
  `The total video time is ${hour} hour ${min} minutes and ${leftSeconds} seconds. `
);
