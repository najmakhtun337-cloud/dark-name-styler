const out = document.getElementById("out");
const out2 = document.getElementById("out2");

document.getElementById("name").addEventListener("input", e=>{
  let t = e.target.value.replace(/ /g,"-");
  out.textContent = t.split("").join(" ");
  out2.textContent = t + " ︻デ═一";
});

function copy(){
  navigator.clipboard.writeText(out.textContent);
  alert("COPIED");
}
function copy2(){
  navigator.clipboard.writeText(out2.textContent);
  alert("COPIED");
}
