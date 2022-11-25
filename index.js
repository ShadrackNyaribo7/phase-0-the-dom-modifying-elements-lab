// Write your code here!
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
//adjusted
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.append(ul);
