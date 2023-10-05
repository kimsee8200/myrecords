function just() {
  const parent = document.getElementById("place");
  const content = document.getElementById("textvalue").value;
  const day = document.getElementById("dailyvalue").value;
  if (check(content)) {
    alert("값을 입력을 하셔야지요!");
  } else {
    let create = document.createElement("li");
    create.setAttribute("id", "list");
    if (check(day)) {
      create.innerHTML = `${content}`;
    } else create.innerHTML = `${content} ${day}까지`;
    parent.appendChild(create);
    forInput();
  }
}

const allremove = () => {
  let all = document.getElementById("place");
  if (all.innerHTML == "") {
    alert("음... 펑! 이제 됐나요?");
  } else all.innerHTML = "";
};

function removeli() {
  const liValues = document.getElementById("place");
  const datas = liValues.getElementsByTagName("li");
  const i = document.getElementById("choice").value;
  let num = parseInt(i);
  if (datas.length > 0 && datas.length >= num) {
    datas[num - 1].remove();
  } else if (datas.length == 0) {
    alert("저기... 정말인가요?");
  } else {
    alert(`잘못된 값을 입력하셨습니다. (1부터 ${datas.length}까지)`);
  }
}

function forInput() {
  let input1 = document.getElementById("textvalue");
  let input2 = document.getElementById("dailyvalue");
  input1.value = null;
  input2.value = null;
}

function check(checking) {
  return checking == "";
}
