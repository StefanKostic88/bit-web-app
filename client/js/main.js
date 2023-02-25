"use strict";
const postsEl = document.querySelector(".postos-list");
const func = async () => {
  const res = await fetch("http://127.0.0.1:5050");
  const data = await res.json();

  render(data);
};

func();

const render = (arr) => {
  const html = arr
    .map((user) => {
      return renderCard(user);
    })
    .join("");
  postsEl.insertAdjacentHTML("beforeend", html);
};

const renderCard = (obj) => {
  return `<li id="${obj.id}"><div class="post-item">
    <h3>${obj.title}</h3>
    <p>${obj.intro}</p>
    <h5>Published by: ${obj.user}</h5>
    </div></li>`;
};
