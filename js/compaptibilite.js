const users = {
    "Maxime": ["Brown", 148, "Brown", 175, "right", "sport", "M"],
    "Youness": ["Brown", 256, "Brown", 184, "right", "sport", "M"],
    "Vincent": ["Brown", 80, "Black", 180, "right", "sleep", "M"],
    "Leanna": ["Brown", 136, "Multicolor", 173, "right", "music", "F"],
    "Martin": ["Green", 246, "Brown", 178, "left", "games", "M"],
    "Damien": ["Brown", 0, "Black", 180, "right", "sport", "M"],
    "Melissa": ["Brown", 125, "Black", 161, "right", "sleep", "F"],
    "Charles": ["Brown", 95, "Brown", 175, "right", "work", "M"],
    "Audrey": ["Bicolor", 250, "Multicolor", 163, "right", "eat", "F"],
    "Mathieu": ["Green", 260, "Black", 173, "left", "sport", "M"],
    "Tony": ["Brown", 0, "Brown", 173, "right", "games", "M"],
    "Vianney": ["Brown", 37, "Grey", 183, "right", "games", "M"],
    "Romain": ["Green", 0, "Brown", 171, "Right", "sport", "M"],
    "Mathis": ["Brown", 168, "Brown", 168, "right", "sport", "M"],
    "Eyfeline": ["Brown", 1, "Blond", 160, "right", "games", "F"],
    "Kevin": ["Brown", 270, "Brown", 155, "right", "games", "M"],
}



var inputs = document.querySelectorAll('select');
var slider = document.getElementById("myRange");
var size = document.getElementById("size");
var rank = document.getElementById("Ranking");
var rank_value = document.getElementById("rank");
inputs.forEach(Element => {
    Element.addEventListener('change', () => {
        Element.style.color = "#ffa31a";
    })
})


slider.oninput = function () {
    size.innerHTML = this.value;
}

rank.oninput = function () {
    rank_value.innerHTML = this.value;
}





function switchSexe(key) {
    var masculin = document.getElementById("masculin");
    var feminin = document.getElementById("feminin");
    if (key == "M") {
        masculin.checked = true;
        masculin.style.color = "#ffa31a";
        feminin.style.color = "white";

    } else {
        feminin.checked = true;
        feminin.style.color = "#ffa31a";
        masculin.style.color = "white";
    }
}



function switchHand(key) {
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    if (key == "L") {
        left.checked = true;
        left.style.color = "#ffa31a";
        right.style.color = "white";

    } else {
        right.checked = true;
        right.style.color = "#ffa31a";
        left.style.color = "white";
    }
}

function findmatch() {
    var form = document.getElementById("form");
    var eyes = document.getElementById("eyes");
    var hair = document.getElementById("hair");
    var height = document.getElementById("myRange");
    var sexe_m = document.getElementById("masculin");
    var sexe_f = document.getElementById("feminin");
    var hobby = document.getElementById("hobby");
    var gamer = document.getElementById("gamer");
    var rank = document.getElementById("Ranking");
    var hand_l = document.getElementById("left");
    var hand_r = document.getElementById("right");

    if (!hand_l.checked && !hand_r.checked) {
        alert("Please select a hand");
        hand_l.style.color = "red";
        hand_r.style.color = "red";
        return;
    }
    if (!sexe_m.checked && !sexe_f.checked) {
        alert("Please select a sexe");
        sexe_m.style.color = "red";
        sexe_f.style.color = "red";
        return;
    }
    var matrix = [];

    var users_list = Object.keys(users);

    users_list.forEach(element => {
        user = users[element];
        var score = 0;
        if (user[0] == eyes.value) {/*eyes*/
            score += 20;
        }
        if (user[2] == hair.value) {/*hair*/
            score += 5;
        }
        score += 40 - Math.abs(user[3] - height.value);/*size*/
        if (user[5] == hobby.value) {/*hobby*/
            score += 25;
        }
        /*score += 2 * (5 - Math.abs(user[7] - gamer.value));/*gamer*/
        score += 0.5 * (400 - Math.abs(user[1] - rank.value));/*rank*/
        if (user[4] == "left" && hand_l.checked) {/*hand*/
            score += 20;
        }
        if (user[4] == "right" && hand_r.checked) {
            score += 20;
        }
        if (user[6] == "M" && sexe_m.checked) {/*sexe*/
            score += 20;
        }
        if (user[6] == "F" && sexe_f.checked) {
            score += 20;
        }
        console.log(user[1] + " " + score);
        matrix.push( score);
    }
    );
    //find the index of the 3 best score and put the index and the score in a list
    var result = [];
    for (var i = 0; i < 3; i++) {
        var max = Math.max(...matrix);
        var index = matrix.indexOf(max);
        result.push([users_list[index], max]);
        matrix[index] = -1;
    }

    
    
    var div = document.getElementById("result");
    div.innerHTML = "";
    result.forEach(Element => {
        var p = document.createElement("h3");
        p.innerHTML = "Name : " + Element[0] + " Score : " + Element[1];
        div.appendChild(p);
    }
    );
    var match = document.getElementById("match");
    match.style.display = "none";
}
