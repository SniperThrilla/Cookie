var cookieCount = 0;
var clickerAmount = 0;
var clickerCost = 10;
var GrandmaAmount = 0;
var GrandmaCost = 100;
var FarmAmount = 0;
var FarmCost = 1000;
var MineAmount = 0;
var MineCost = 10000;
var currentCPS = 0;
var time = 1000;
var clickedCookies = 0;
var superClick = 1;
var chance = 0;
var xpos = "50%";
var ypos = "50%";

function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function addCookie() {
    if(superClick != 1) {
        cookieCount = cookieCount + clickMultiply() * superClick;
        document.getElementById("ClickPower").innerHTML = "Click Power: " + clickMultiply()*superClick + "x";
    }
    else {
        cookieCount = cookieCount + clickMultiply();
        document.getElementById("ClickPower").innerHTML = "Click Power: " + clickMultiply() + "x";
    }
    document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
    clickedCookies = clickedCookies + 1;
    document.getElementById("TotalClicks").innerHTML = "Total Clicks: " + clickedCookies;
}

function buyClicker() {
    if(cookieCount >= clickerCost) {
        cookieCount = cookieCount - clickerCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        clickerAmount = clickerAmount + 1;
        clickerCost = clickerAmount*clickerAmount + 10;
        currentCPS = currentCPS + 0.1;
        clickerCost = Math.round(clickerCost);
        currentCPS = Math.round(currentCPS*100);
        currentCPS = currentCPS/100;
        document.getElementById("ClickerAmount").innerHTML = clickerAmount;
        document.getElementById("ClickerCost").innerHTML = clickerCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

function buyGrandma() {
    if(cookieCount >= GrandmaCost) {
        cookieCount = cookieCount - GrandmaCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        GrandmaAmount = GrandmaAmount + 1;
        GrandmaCost = Math.round((100*GrandmaAmount*GrandmaAmount - 100*GrandmaAmount+180)/1.3);
        currentCPS = currentCPS + 1;
        GrandmaCost = Math.round(GrandmaCost);
        currentCPS = Math.round(currentCPS*100);
        currentCPS = currentCPS/100;
        document.getElementById("GrandmaAmount").innerHTML = GrandmaAmount;
        document.getElementById("GrandmaCost").innerHTML = GrandmaCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

function buyFarm() {
    if(cookieCount >= FarmCost) {
        cookieCount = cookieCount - FarmCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        FarmAmount = FarmAmount + 1;
        FarmCost = Math.round((1000*FarmAmount*FarmAmount - 1000*FarmAmount+1800)/1.3);
        currentCPS = currentCPS + 10;
        FarmCost = Math.round(FarmCost);
        currentCPS = Math.round(currentCPS*100);
        currentCPS = currentCPS/100;
        document.getElementById("FarmAmount").innerHTML = FarmAmount;
        document.getElementById("FarmCost").innerHTML = FarmCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + cookieCount;
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

function buyMine() {
    if(cookieCount >= MineCost) {
        cookieCount = cookieCount - MineCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        MineAmount = MineAmount + 1;
        MineCost = Math.round((10000*MineAmount*MineAmount - 10000*MineAmount+25000)/1.3);
        currentCPS = currentCPS + 100;
        MineCost = Math.round(MineCost);
        currentCPS = Math.round(currentCPS*100);
        currentCPS = currentCPS/100;
        document.getElementById("MineAmount").innerHTML = MineAmount;
        document.getElementById("MineCost").innerHTML = MineCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + cookieCount;
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

function earnCookies(amount) {
    cookieCount = cookieCount + amount;
    document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function clickMultiply() {
    if(clickedCookies == 0) {
        return Math.pow(2, 0);
    }
    var multiply = getBaseLog(10, clickedCookies);
    return Math.pow(2, Math.floor(multiply));
}

function goldCookie() {
    superClick = Math.floor(Math.random()*750);
    document.getElementById("GoldenCookie").style.display = "none";
    document.getElementById("GoldenText").style.display = "block";
    document.getElementById("GoldenText").innerHTML = "CLICK FRENZY!";
    document.getElementById("ClickPower").innerHTML = "Click Power: " + clickMultiply()*superClick + "x";
    document.getElementById("ClickPower").style.color = "aquamarine";
    setTimeout(function hideCookie() {
        superClick = 1;
        document.getElementById("GoldenText").style.display = "none";
        document.getElementById("ClickPower").innerHTML = "Click Power: " + clickMultiply()*superClick + "x";
        document.getElementById("ClickPower").style.color = "whitesmoke";
    }, 10000);
}

setInterval(function showGoldenCookie() {
    chance = Math.floor(Math.random() * 8);
    console.log(chance);
    if(chance == 5) {
        document.getElementById("GoldenCookie").style.display = "block";
        console.log("Yes");
        xpos = Math.floor(Math.random()*90);
        ypos = Math.floor(Math.random()*90);
        console.log(xpos);
        console.log(ypos);
        document.getElementById("GoldenCookie").style.left = xpos+"%";
        document.getElementById("GoldenCookie").style.top = ypos+"%";
        setTimeout(function hideCookie() {
            document.getElementById("GoldenCookie").style.display = "none";
        }, 10000);
    }
}, 60000)

setInterval(function addCPS() {
    cookieCount = cookieCount + currentCPS;
    cookieCount = Math.round(cookieCount*100);
    cookieCount = cookieCount/100;
    document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
    document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
}, time);
