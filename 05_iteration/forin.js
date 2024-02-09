const myObj = {
    js :"javascrip",
    cpp:"c++",
    rb :"ruby"
}

for (const key in myObj) {
  // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = [ "js","rb","py","java","cpp"]

for (const key in object) {
    console.log(`${key} and ${programming[key]}`);
}