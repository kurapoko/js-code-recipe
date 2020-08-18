// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const jsonString = `
// {
//   "students": 40,
//   "grade": 4,
//   "name": "c組"
// }
// `;

// const data = JSON.parse(jsonString);
// appDiv.innerHTML+=data.name;
// appDiv.innerHTML+=data.grade;

// const myArray = ['鈴木', '田中', '高橋', '後藤'];

// const targetUser = myArray.find((element) => element === '田中');

// appDiv.innerHTML+=targetUser;

// const array6 = [
//   {id: 1, name: '佐藤'},
//   {id: 2, name: '鈴木'}
// ]

// console.log(array6[0].name);
// console.log(array6.length);

// array6.forEach((value, index) => {
//   // インデックスと値を順に出力
//   console.log(value.name, index);
// });

// [1,2,3,4,5,6,7,8,9]
// .filter((value) => value % 2 === 0)
// .forEach((value) => {
//   console.log(value);
// });

// const userList = [
//   {id: 1, name: '田中', address: '東京'},
//   {id: 2, name: '鈴木', address: '宮城'},
//   {id: 3, name: '高橋', address: '福岡'}
// ]

// const container = document.querySelector('.container');

// userList.forEach((userData) => {
//   container.innerHTML += `
//     <div class="card">
//       <h2>${userData.name}</h2>
//       <p>出身地：${userData.address}</p>
//     </div>
//   `
// })

// const array = ['いちご', 'みかん', 'りんご'];

// for (const value of array) {
//   console.log(value);
// }

// const arrayLength = array.length

// for (let i = 0; i < arrayLength; i++) {
//   console.log(array[i]);
// }

// const arrayUnshift = ['りんご', 'みかん'];
// arrayUnshift.unshift('ばなな');
// console.log(arrayUnshift);
// arrayUnshift.shift();
// console.log(arrayUnshift);

// const pushShift = ['りんご', 'ぶどう'];
// pushShift.push('レモン', 'いちご');
// console.log(pushShift);
// pushShift.pop();
// console.log(pushShift);

// const arraySplice = ['りんご', 'みかん'];
// arraySplice.splice(1, 0, 'ばなな');
// console.log(arraySplice);

// const arraySplice2 = ['りんご', 'みかん'];
// arraySplice2.splice(0, 2, 'ばなな', 'いちご');
// // インデックス1の位置で、1個取り除きつつ'ばなな', 'いちご'を追加する
// console.log(arraySplice2);

// const concatArray1 = ['アイウエオ', 'かきくけこ'];
// const concatArray2 = ['アイウエオ', 'かきくけこ'];
// const concatArray3 = ['アイウエオ', 'かきくけこ'];

// const concatArray4 = concatArray1.concat(concatArray2);

// console.log(concatArray4);

// const joinArray1 = [2, 4, 10];
// console.log(joinArray1.join());
// console.log(joinArray1.join(''));


// const indexOfArray = ['りんご', 'ばなな', 'みかん'];

// if (indexOfArray.indexOf('りんご') !== -1) {
//   console.log('りんごはある');
// } else {
//   console.log('りんごはない');
// }

// if (!indexOfArray.includes('りんご')) {
//   console.log('りんごはある');
// } else {
//   console.log('りんごはない');
// }

// 配列.find
const findArray = ['鈴木', '田中', '高橋', '後藤'];
const targetFindArray = findArray.find((element) => element === '田中');
console.log(targetFindArray);

const findUserDataList = [
  { id: 123, name: '高橋'},
  { id: 1021, name: '鈴木'},
  { id: 6021, name: '高橋'},
];

// ユーザーID
const findUserSearchIdInput = document.querySelector("#search-id-input");
const findUserSearchResult = document.querySelector("#search-result");


findUserSearchIdInput.addEventListener('keyup', () => {
  console.log(event.target.value);
  const findUserSearchId = Number(event.target.value);
  findUser(findUserSearchId);
});

// ユーザーを探す

function findUser(findUserSearchId) {
  const targetData = findUserDataList.find((d) => d.id === findUserSearchId);

  if (targetData == null) {
    findUserSearchResult.textContent = '該当者なし';
    return;
  }

  findUserSearchResult.textContent = targetData.name;
}

// 配列を逆転
const reverseArray = [1, 3, 5];
reverseArray.reverse();
console.log(reverseArray);

// 配列をソート
const sortArray = [1, 2, 3, 4, 5];

sortArray.sort((a, b) => {
  if (a < b) {
    return 1;
  }

  if (a === b) {
    return 0;
  }

  if (a > b) {
    return -1;
  }

});

console.log(sortArray);

// オブジェクトを含む配列をソート
const userDataList = [
  {id: 2, name: '鈴木'},
  {id: 10, name: '田中'},
  {id: 4, name: '鈴木'},
  {id: 29, name: '高橋'},
  {id: 101, name: '小笠原'},
];

function updateList() {
  let listHtml = '';

  for (const data of userDataList) {
    listHtml += `
    <li>${data.id} : ${data.name}</li>
    `
  }

  document.querySelector('.user_list').innerHTML = listHtml;
}

function sortByAscending() {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });

  updateList();
}

function sortByDescending() {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });

  updateList();
}

document.querySelector('.ascending').addEventListener('click', () => {
  sortByAscending();
});

document.querySelector('.descending').addEventListener('click', () => {
  sortByDescending();
});

sortByAscending();

// Map

const mapIdList = [4, 10, 20];
const mapUserIdList = mapIdList.map((value, index) => `userid_${value}`);
console.log(mapUserIdList);

const mapApiResponseData = [
  { id: 10, name: '鈴木'},
  { id: 21, name: '田中'},
  { id: 31, name: '高橋'},
];


const mapIdList = mapApiResponseData.map((value) => value.id);
console.log(mapIdList);

// Filter
const filterArray = [10, 20, 30, 40, 50];
const newFilterArray = [10, 20, 30, 40].filter((value) => value >= 30);

console.log(newFilterArray);

const fillterUserDataList = [
  { age: 18, name: '鈴木'},
  { age: 27, name: '田中'},
  { age: 32, name: '佐藤'},
  { age: 41, name: '高橋'},
  { age: 56, name: '小笠原'},
];

document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  });
});

function onClickButton(event) {

  const button = event.target;

  const targetAge = button.dataset.age;

  const filterdList = fillterUserDataList.filter((data) => data.age >= targetAge);

  filterUpdateList(filterdList);
}

function filterUpdateList(filterdList) {

  let filterListHtml = '';

  for (const data of filterdList) {
    filterListHtml += `
      <li>${data.name} : ${data.age}歳</li>
    `;
  }

  document.querySelector('.user_filterList').innerHTML = filterListHtml;
}