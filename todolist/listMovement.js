function just() {
  const parent = document.getElementById("place");
  const content = document.getElementById("textvalue").value;
  const day = document.getElementById("dailyvalue").value;
  let create = document.createElement("li");
  create.setAttribute("id", "list");
  create.innerHTML = `${content} ${day}까지`;
  parent.appendChild(create);
}

let remove = () => {
  let remo = document.getElementById("list");
  remo.remove();
};

const allremove = () => {
  let all = document.getElementById("place");
  all.innerHTML = "";
};
