const url = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("userList");
const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
let users = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    users = data;
    displayUsers(users);

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      displayUsers(filteredUsers);
    });
  })
  .catch((error) => {
    console.log("Error fetching users", error);
  });

function displayUsers(users) {
  userList2.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    li.addEventListener("click", () => displayUserDetails(user));
    userList2.append(li);
  });
}

function displayUserDetails(user) {
  userDetailsDiv.innerHTML = "";
  const nameHeading = document.createElement("h2");
  nameHeading.innerText = user.name;
  const nickName = document.createElement("p");
  nickName.innerHTML = `<strong>Username: </strong>${user.username}`;
  const email = document.createElement("p");
  email.innerHTML = `<strong>Email: </strong>${user.email}`;
  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Phone: </strong>${user.phone}`;
  userDetailsDiv.append(nameHeading, nickName, email, phone);
}

userList2.addEventListener("click", (event) => {
  const li = event.target;
  const index = Array.from(li.parentNode.children).indexOf(li);
  const user = users[index];
  displayUserDetails(user);
});