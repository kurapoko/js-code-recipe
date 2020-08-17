// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const jsonString = `
{
  "students": 40,
  "grade": 4,
  "name": "c組"
}
`;

const data = JSON.parse(jsonString);
appDiv.innerHTML+=data.name;
appDiv.innerHTML+=data.grade;

const myArray = ['鈴木', '田中', '高橋', '後藤'];

const targetUser = myArray.find((element) => element === '田中');

appDiv.innerHTML+=targetUser;

const array6 = [
  {id: 1, name: '佐藤'},
  {id: 2, name: '鈴木'}
]

console.log(array6[0].name);
console.log(array6.length);

array6.forEach((value, index) => {
  // インデックスと値を順に出力
  console.log(value.name, index);
});

[1,2,3,4,5,6,7,8,9]
.filter((value) => value % 2 === 0)
.forEach((value) => {
  console.log(value);
});

const userList = [
  {id: 1, name: '田中', address: '東京'},
  {id: 2, name: '鈴木', address: '宮城'},
  {id: 3, name: '高橋', address: '福岡'}
]

const container = document.querySelector('.container');

userList.forEach((userData) => {
  container.innerHTML += `
    <div class="card">
      <h2>${userData.name}</h2>
      <p>出身地：${userData.address}</p>
    </div>
  `
})

const array = ['いちご', 'みかん', 'りんご'];

for (const value of array) {
  console.log(value);
}

const arrayLength = array.length

for (let i = 0; i < arrayLength; i++) {
  console.log(array[i]);
}

const arrayUnshift = ['りんご', 'みかん'];
arrayUnshift.unshift('ばなな');
console.log(arrayUnshift);
arrayUnshift.shift();
console.log(arrayUnshift);

const pushShift = ['りんご', 'ぶどう'];
pushShift.push('レモン', 'いちご');
console.log(pushShift);
pushShift.pop();
console.log(pushShift);

const arraySplice = ['りんご', 'みかん'];
arraySplice.splice(1, 0, 'ばなな');
console.log(arraySplice);

const arraySplice2 = ['りんご', 'みかん'];
arraySplice2.splice(0, 2, 'ばなな', 'いちご');
// インデックス1の位置で、1個取り除きつつ'ばなな', 'いちご'を追加する
console.log(arraySplice2);

const concatArray1 = ['アイウエオ', 'かきくけこ'];
const concatArray2 = ['アイウエオ', 'かきくけこ'];
const concatArray3 = ['アイウエオ', 'かきくけこ'];

const concatArray4 = concatArray1.concat(concatArray2);

console.log(concatArray4);

const joinArray1 = [2, 4, 10];
console.log(joinArray1.join());
console.log(joinArray1.join(''));


const indexOfArray = ['りんご', 'ばなな', 'みかん'];

if (indexOfArray.indexOf('りんご') !== -1) {
  console.log('りんごはある');
} else {
  console.log('りんごはない');
}

if (!indexOfArray.includes('りんご')) {
  console.log('りんごはある');
} else {
  console.log('りんごはない');
}
