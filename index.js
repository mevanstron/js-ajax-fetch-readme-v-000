const app = "I don't do much.";
const token = '80361dc6637ad8acf0c05b4b315b3b7b03d0d6b7'
fetch('https://api.com/user/repos', {
  headers: {
    Authorization: `token $token`
  }
}).then(res => res.json()).then(json => console.log(json));
