const heading = () => {
  const title = document.createElement("h2");
  title.setAttribute("id", "title");
  title.textContent = `Kanye Rest Quotes`;
  return title;
};

const ideaContent = () => {
  const ideaContainer = document.createElement("div");
  ideaContainer.setAttribute("id", "idea-container");
  ideaContainer.textContent = "";
  return ideaContainer;
};

const getIdeaButton = () => {
  const ideaBtn = document.createElement("button");
  ideaBtn.setAttribute("id", "btn");
  const ideaBtnFront = document.createElement("span");
  ideaBtnFront.setAttribute("id", "front");
  ideaBtnFront.textContent = "CLICK FOR QUOTES";
  ideaBtn.appendChild(ideaBtnFront);
  return {
    ideaBtn,
    ideaBtnFront,
  };
};

const footer = () => {
  const footerLink = document.createElement("a");
  footerLink.setAttribute("class", "footer");
  footerLink.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=KauRmlffjqc"
  );
  footerLink.textContent = "Inspiration: Build Dumb Shit";

  const footerText = document.createElement("a");
  footerText.setAttribute("class", "footer");
  footerText.setAttribute("href", "https://github.com/ts-oh/kwquotes");
  footerText.textContent = "Github Repo";

  return {
    footerLink,
    footerText,
  };
};

const fetchData = () => {
  return document.querySelector("#btn").addEventListener("click", function () {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#idea-container").innerHTML = `"${data.quote}"`;
      });
  });
};

const mainContainer = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "content");
  document.body.appendChild(container);
  container.appendChild(heading());
  container.appendChild(ideaContent());
  container.appendChild(getIdeaButton().ideaBtn);
  container.appendChild(footer().footerLink);
  container.appendChild(footer().footerText);
  fetchData();
};

mainContainer();
