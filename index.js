const path = require('path');
const fs = require('fs');
const { log } = require('console');

let b = [
    `bg1`,
    `bg2`,
    `bg3`,
    `bg4`,
]

let f = [
    `fg1`,
    `fg2`,
    `fg3`,
    `fg4`,
]

const url1 = './files/1';
const url2 = './files/2';
const url3 = './files/3';

const readysUrl = './ready';

const arr1 = [];
const arr2 = [];
const arr3 = [];

let files1 = fs.readdirSync(url1);
let files2 = fs.readdirSync(url2);
let files3 = fs.readdirSync(url3);

files1.forEach(file => {
    let fileUrl = `${url1}/${file}`;
    let fileContent = fs.readFileSync(fileUrl, {encoding: 'utf8'});
    arr1.push(fileContent);
});

files2.forEach(file => {
    let fileUrl = `${url2}/${file}`;
    let fileContent = fs.readFileSync(fileUrl, {encoding: 'utf8'});
    arr2.push(fileContent);
});

files3.forEach(file => {
    let fileUrl = `${url3}/${file}`;
    let fileContent = fs.readFileSync(fileUrl, {encoding: 'utf8'});
    arr3.push(fileContent);
});


function mixLayers(a, b, c){
    let svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">`;
    let fileName = `merged`;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            for (let k = 0; k < c.length; k++) {
                let result = `${svg}\n${a[i]}\n${b[j]}\n${c[k]}\n</svg>`;
                fs.writeFileSync(`${readysUrl}/${fileName}${i}${j}${k}.svg`, result);
            }
        }    
    }

0}

mixLayers(arr1, arr2, arr3);