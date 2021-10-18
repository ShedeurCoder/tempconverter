function toCelsius() {
    var temp = document.getElementById("temp").value;
    temp = (temp - 32) * (5 / 9);
    document.getElementById("result").innerHTML = temp + "℃";
}
function toFahrenheit() {
    var temp = document.getElementById("temp").value;
    temp = (temp * (9 / 5)) + 32;
    document.getElementById("result").innerHTML = temp + "℉";
}
function imAGeneralWeee() {
    var numberig = Math.random();
    numberig = numberig * 10;
    numberig = Math.round(numberig);
    var body = document.body;
    // 0 = gay
    // 1 = bi
    // 2 = ace
    // 3 = lesbian
    // 4 = nb
    // 5 = pan
    // 6 = totallynotrussia
    // 7 = genderqueer
    // 8 = germanycuzwhynot
    // 9 = darkmode
    // 10 = regular
    if (numberig == 0) {
        body.id = "gay";
    }
    if (numberig == 1) {
        body.id = "bi";
    }
    if (numberig == 2) {
        body.id = "ace";
    }
    if (numberig == 3) {
        body.id = "lesbian";
    }
    if (numberig == 4) {
        body.id = "nb";
    }
    if (numberig == 5) {
        body.id = "pan";
    }
    if (numberig == 6) {
        body.id = "totallynotrussia";
    }
    if (numberig == 7) {
        body.id = "genderqueer";
    }
    if (numberig == 8) {
        body.id = "germanycuzwhynot";
    }
    if (numberig == 9) {
        body.id = "darkmode";
    }
    if (numberig == 10){
        body.id = "";
    }
}