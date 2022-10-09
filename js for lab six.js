var clockInterval;

function q1() {
    clockInterval = setInterval(Clock, 1000)
}

function Clock() {
    let d = new Date();
    var time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    // var time = d.toTimeString(d.getTime());
    document.getElementById('clock').innerHTML = time;
    document.getElementById('stop').innerHTML = "<button class=\"btn btn-danger \" onclick = \"q1Stop()\">Stop</button>";
}

function q1Stop() {
    clearInterval(clockInterval);
    document.getElementById('clock').innerHTML = "";
    document.getElementById('stop').innerHTML = "";
}

function q2() {
    changebg = setInterval(q2bg, 500);
}

function q2bg() {

    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    var colr = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementById('rect2').style = "background-color:" + colr;

}

function q3inc() {
    document.getElementById('para').style = "font-size:70px;";
}

function q3dec() {
    document.getElementById('para').style = "font-size:50px;";
}


var interval;

function q4Start() {
    car = document.getElementById('chevy67');

    interval = setInterval(q4Move, 20);
}

function q4Stop() {
    clearInterval(interval);
}

function q4Move() {
    car.style.right = parseInt(car.style.right) + 2 + "px";
    console.log(parseInt(car.style.right) > parseInt(screen.width))
    if (parseInt(car.style.right) > parseInt(screen.width)) {
        car.style.right = "0px";
    }
}

function q5() {
    document.getElementById('bfr').innerHTML = "<u>Students Born Before 2000</u>";
    document.getElementById('aft').innerHTML = '<u>Students Born After 2000</u>';
    let students = [{ name: 'Alvin Richard', regno: 'URK20CS1001', dob: '21-MAR-1999' }, { name: 'Melvin Richard', regno: 'URK20CS1022', dob: '31-JAN-2003' }, { name: 'Meghana Ray', regno: 'URK20CS3023', dob: '06-JUL-1998' }, { name: 'Siddarth Hugh', regno: 'URK20CS3020', dob: '26-MAY-2001' },
        { name: 'Nancy Bright', regno: 'URK20CS2030', dob: '16-AUG-2002' }
    ];

    for (let i = 0; i < students.length; i++) {
        if (parseInt(students[i].dob.split('-')[2]) < 2000) {
            document.getElementById("before").innerHTML += "<span style='color:black'>" + students[i].name + "\'s </span>" +
                "Register Number is <span style='color:red'>" + students[i].regno + "</span> and the DOB : " + "<span style='color:blue'>" + students[i].dob + "</span>" +
                "<br><br>";
        } else {
            document.getElementById("after").innerHTML += "<span style='color:black'>" + students[i].name + "\'s </span>" +
                "Register Number is <span style='color:red'>" + students[i].regno + "</span> and the DOB : " + "<span style='color:blue'>" + students[i].dob + "</span>" +
                "<br><br>";
        }
    }
}