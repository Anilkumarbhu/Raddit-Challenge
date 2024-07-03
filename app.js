const container = document.getElementById("container");
const secondDiv = document.createElement("div");
const heading = document.createElement("h1");
heading.innerHTML = "Reddit JSON DATA";
secondDiv.appendChild(heading);
secondDiv.classList.add("secondContainer");
container.appendChild(secondDiv);

function fectchingData() {
  fetch("https://www.reddit.com/r/reactjs.json")
    .then((response) => response.json())
    .then((result) => displayingData(result))
    .catch((Error) => {
      console.log("Error fetching data", Error);
    });
}
function displayingData(result) {
  const incomeData = result.data.children;
  incomeData.forEach((element) => {
    const data1 = element.data.title;
    const data2 = element.data.selftext_html;
    const data3 = element.data.url;
    const data4 = element.data.score;

    const title = document.createElement("p");
    title.innerHTML = data1;
    const text = document.createElement("p");
    text.innerHTML = data2 || "No Self-text";
    const url = document.createElement("a");
    url.href = data3;
    url.textContent = data3;
    url.target = "blank";
    const score = document.createElement("p");
    score.innerHTML = `Score :${data4}`;

    secondDiv.appendChild(title);
    secondDiv.appendChild(text);
    secondDiv.appendChild(url);
    secondDiv.appendChild(score);
  });
}
fectchingData();
