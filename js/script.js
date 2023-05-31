const users = {
    "Maxime": ["Brown", 148, "Brown", 175, "right", "sport", "M", 4],
    "Youness": ["Brown", 258, "Brown", 184, "right", "sport", "M", 1],
    "Vincent": ["Brown", 80, "Black", 180, "right", "sleep", "M", 3],
    "Leanna": ["Brown", 140, "Multicolor", 173, "right", "music", "F", 4],
    "Martin": ["Green", 246, "Brown", 178, "left", "games", "M", 5],
    "Damien": ["Brown", 102, "Black", 180, "right", "sport", "M", 2],
    "Melissa": ["Brown", 125, "Black", 161, "right", "sleep", "F", 4],
    "Charles": ["Brown", 95, "Brown", 175, "right", "work", "M", 3],
    "Audrey": ["Bicolor", 254, "Multicolor", 163, "right", "eat", "F", 1],
    "Mathieu": ["Green", 265, "Black", 173, "left", "sport", "M", 4],
    "Tony": ["Brown", 0, "Brown", 173, "right", "games", "M", 5],
    "Vianney": ["Brown", 37, "Grey", 183, "right", "games", "M", 4],
    "Romain": ["Green", 0, "Brown", 171, "right", "sport", "M", 4],
    "Mathis": ["Brown", 225, "Brown", 168, "right", "sport", "M", 1],
    "Eyfeline": ["Brown", 1, "Blond", 160, "right", "games", "F", 5],
    "Kevin": ["Brown", 277, "Brown", 155, "right", "games", "M", 5],
    "Farès": ["Green", 158, "Brown", 180, "right", "sport", "M", 2],
}

var tryes = 0;
document.addEventListener("DOMContentLoaded", function () {
    var datalist = document.getElementById("names");
    var users_list = Object.keys(users);

    users_list.forEach(function (element) {
        datalist.appendChild(new Option(element, element));
    });
});
const green = "rgb(0, 255, 0)";

var names = Object.keys(users);
var Choice_user = names[Math.floor(Math.random() * names.length)];

console.log(Choice_user);
var Choice_user_data = users[Choice_user];
function makeaguess() {
    var name = document.getElementById("name");
    var table_body = document.getElementsByTagName("tbody");
    if (name.value == "") {
        alert("Type a name before");
        return;
    }
    if (users[name.value] == undefined) {
        alert("This name doesn't exist");
        return;
    }
    var user = users[name.value];
    var row = document.createElement("tr");
    var td_eyes = document.createElement("td");
    var td_rank = document.createElement("td");
    var td_hair = document.createElement("td");
    var td_height = document.createElement("td");
    var td_gamer = document.createElement("td");
    var td_hand = document.createElement("td");
    var td_hobby = document.createElement("td");
    var td_sex = document.createElement("td");
    var td_name = document.createElement("td");

    td_eyes.innerHTML = user[0];
    if (user[0] == Choice_user_data[0]) {
        td_eyes.style.backgroundColor = green;
    }
    else {
        td_eyes.style.backgroundColor = "red";
    }

    td_rank.innerHTML = user[1];
    if (user[1] == Choice_user_data[1]) {
        td_rank.style.backgroundColor = green;
    }
    else {

        td_rank.style.backgroundColor = "red";
        if (user[1] > Choice_user_data[1]) {
            td_rank.style.backgroundImage = "url('../img/up.png')";
        }
        else{
        td_rank.style.backgroundImage = "url('../img/down.png')";}
        td_rank.style.backgroundSize = "contain";
        td_rank.style.backgroundRepeat = "no-repeat";
        td_rank.style.backgroundPosition = "center";
    }

    td_hair.innerHTML = user[2];
    if (user[2] == Choice_user_data[2]) {
        td_hair.style.backgroundColor = green;
    }
    else if (user[2] == "Multicolor") {
        var gradientColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        ;

        var gradient = 'radial-gradient(circle, ';
        for (var j = 0; j < gradientColors.length; j++) {
            gradient += gradientColors[j] + ' ' + (j * (100 / (gradientColors.length - 1))) + '%';
            if (j !== gradientColors.length - 1) {
                gradient += ', ';
            }
        }
        gradient += ')';
        td_hair.style.backgroundImage = gradient;
    }
    else {
        td_hair.style.backgroundColor = "red";
    }
    //here we want to make the color change if the user is right or wrong
    td_height.innerHTML = user[3];
    if (user[3] == Choice_user_data[3]) {
        td_height.style.backgroundColor = green;
    }
    else {
        td_height.style.backgroundColor = "red";
        if (user[3] > Choice_user_data[3]) {
            td_height.style.backgroundImage = "url('../img/down.png')";
        }
        else{
        td_height.style.backgroundImage = "url('../img/up.png')";}
        td_height.style.backgroundSize = "contain";
        td_height.style.backgroundRepeat = "no-repeat";
        td_height.style.backgroundPosition = "center";
    }

    td_gamer.innerHTML = user[7];
    if (user[7] == Choice_user_data[7]) {
        td_gamer.style.backgroundColor = green;
    }
    else {
        td_gamer.style.backgroundColor = "red";
        if (user[7] > Choice_user_data[7]) {
            td_gamer.style.backgroundImage = "url('../img/down.png')";
        }
        else{
        td_gamer.style.backgroundImage = "url('../img/up.png')";}
        td_gamer.style.backgroundSize = "contain";
        td_gamer.style.backgroundRepeat = "no-repeat";
        td_gamer.style.backgroundPosition = "center";
    }

    td_hand.innerHTML = user[4];
    if (user[4] == Choice_user_data[4]) {
        td_hand.style.backgroundColor = green;
    }
    else {
        td_hand.style.backgroundColor = "red";
    }

    td_hobby.innerHTML = user[5];
    if (user[5] == Choice_user_data[5]) {
        td_hobby.style.backgroundColor = green;
    }
    else {
        td_hobby.style.backgroundColor = "red";
    }

    td_sex.innerHTML = user[6];
    if (user[6] == Choice_user_data[6]) {
        td_sex.style.backgroundColor = green;
    }
    else {
        td_sex.style.backgroundColor = "red";
    }
    td_name.innerHTML = name.value;
    if (name.value == Choice_user) {
        td_name.style.backgroundColor = green;
    }
    else {
        td_name.style.backgroundColor = "red";
    }
    row.append(td_name, td_eyes, td_rank, td_hair, td_height, td_gamer, td_hand, td_hobby, td_sex);
    table_body[0].append(row);
    console.log(user);
    console.log(Choice_user);

    //reset the input
    name.value = "";








    var title = document.getElementById("title_end");
    tryes++;
    title.innerHTML = tryes;
    if (user == Choice_user_data) {
        alert("You win");
        var btn=document.getElementsByTagName("input");
        for(var i=0;i<btn.length;i++){
            btn[i].disabled=true;
        }
    }
}


