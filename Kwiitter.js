function addUser()
{
    User_Name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",User_Name);
    window.location="Kwitter_room.html";
}