var cities = [
  { label: "Taipei", value: "台北市" },
  { label: "Tainan", value: "台南市" },
  { label: "Yunlin", value: "雲林縣" }
];
// 取得datalist的dom
var ss = document.getElementById("cities");
// 載入資料到datalist
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  var op = document.createElement("option");
  op.setAttribute("label", city.label);
  op.setAttribute("value", city.value);
  ss.appendChild(op);
}
