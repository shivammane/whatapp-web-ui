const scroll = document.querySelector(".messeges");
scroll.scrollTop = scroll.scrollHeight;

const selectedUser = [];

document.querySelector(".menu").addEventListener("click", (e) => {
    document.querySelector(".left").classList.toggle("add");
});
document.querySelector(".users").addEventListener("click", (e) => {
    const user = e.target;
    if (user.classList.contains("user")) {
        selectedUser.pop()?.classList.remove("selected-user");
        selectedUser.push(user);
        user.classList.add("selected-user");
        document.querySelector(".left").classList.toggle("add");
    }
});
