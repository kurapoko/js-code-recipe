// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// JSONパース
const app299 = document.getElementById("app229");
const parseJsonString = `
  {
    "students": 40,
    "grade": 3,
    "name": "法学部"
  }
`;
const parseDate = JSON.parse(parseJsonString);
app299.innerHTML = `
<ul>
  <li>${parseDate.students}</li>
  <li>${parseDate.grade}</li>
  <li>${parseDate.name}</li>
</ul>
`;

// オブジェクトをJSONに変換
const app230 = document.getElementById("app230");
const objectToJson = { a: 100, b: "私の名前" };
const objectToJsonString = JSON.stringify(objectToJson);
const objectToJsonStringIndent = JSON.stringify(objectToJson, null, " ");
app230.innerHTML = `
<pre>${objectToJsonString}</pre>
<pre>${objectToJsonStringIndent}</pre>
`;

// JSON変換ルールのカスタマイズ
const app232 = document.getElementById("app232");

const jsonReplacer = (key, value) => {
  if (typeof value === "number") {
    return undefined;
  }
  return value;
};

const jsonReplacerObject = {
  country: "アメリカ",
  state: 47,
  flag: true,
  strong: 1
};

const jsonReplacerString = JSON.stringify(
  jsonReplacerObject,
  jsonReplacer,
  " "
);
app232.innerHTML = `
<pre>${jsonReplacerString}</pre>
`;
