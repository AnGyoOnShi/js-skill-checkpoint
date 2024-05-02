// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let newUser = [];
async function addNewUser() {
  let getuser = async () =>
    await fetch("https://jsonplaceholder.typicode.com/users");
  let response = async (response) => await response.json();
  let success = async (data) => await data;

  let user = await getuser().then(response).then(success);
  for (let key in user) {
    newUser[key] = user[key].name;
  }
  console.log(newUser);
}
addNewUser();
