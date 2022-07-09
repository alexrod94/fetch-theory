const button = document.querySelector("button");
const create = document.querySelector("#create");
const posts = document.querySelector(".posts");

button.addEventListener("click", getPosts);
create.addEventListener("click", createPost);

async function getPosts() {
  const res = await fetch("http://localhost:3000/");
  const finalRes = await res.json();
  finalRes.forEach(
    (el) =>
      (posts.innerHTML += `<h2>${el.title}</h2>
  <p>${el.shortDesc}</p>`)
  );
}

async function createPost() {
  const res = await fetch("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: "Título nuevo",
      description: "Esta es mi descripción",
    }),
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

async function updatePost() {
  const res = await fetch("http://localhost:3000/1", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      title: "Título nuevo",
      description: "Esta es mi descripción",
    }),
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

async function createPost() {
  const res = await fetch("http://localhost:3000/1", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

const myJson = {
  id: 1,
  title: "asdfasdfasd",
};

const array = [];
