var cookieCount = 0;
var clickerAmount = 0;
var clickerCost = 10;
var GrandmaAmount = 0;
var GrandmaCost = 100;
var FarmAmount = 0;
var FarmCost = 1000;
var MineAmount = 0;
var MineCost = 10000;
var FactoryAmount = 0;
var FactoryCost = 100000;
var currentCPS = 0;
var time = 1000;
var clickedCookies = 0;
var superClick = 1;
var chance = 0;
var xpos = "50%";
var ypos = "50%";
var clickerBonus = 1;
var grandmaBonus = 1;
var farmBonus = 1;
var mineBonus = 1;
var factoryBonus = 1;
var speedBoolean = false;

function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function CPS() {
    current = (clickerAmount*clickerBonus*0.1) + (GrandmaAmount*grandmaBonus*1) + (FarmAmount*farmBonus*10) + (MineAmount*mineBonus*50) + (FactoryAmount*factoryBonus*150);
    current = Math.round(current*100);
    current = current/100;
    return current;
}

//Easter egg

function speed() {
    console.log("Yes");
    if(speedBoolean == false) {
        speedBoolean = true;
        document.getElementById("CookieImage").style.animation = "rotation 0.1s infinite linear";
    }
    else {
        speedBoolean = false;
        document.getElementById("CookieImage").style.animation = "rotation 15s infinite linear";
    }
}

//Click cookie

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

//Purchase Upgrades

function buyClicker() {
    if(cookieCount >= clickerCost) {
        cookieCount = cookieCount - clickerCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        clickerAmount = clickerAmount + 1;
        clickerCost = clickerAmount*clickerAmount + 10;
        clickerCost = Math.round(clickerCost);
        currentCPS = CPS();
        showMultiClicker();
        document.getElementById("ClickerAmount").innerHTML = clickerAmount;
        document.getElementById("ClickerCost").innerHTML = clickerCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS
    }
}

function buyGrandma() {
    if(cookieCount >= GrandmaCost) {
        cookieCount = cookieCount - GrandmaCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        GrandmaAmount = GrandmaAmount + 1;
        GrandmaCost = Math.round((100*GrandmaAmount*GrandmaAmount - 100*GrandmaAmount+180)/1.3);
        GrandmaCost = Math.round(GrandmaCost);
        currentCPS = CPS();
        showMultiGrandma();
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
        FarmCost = Math.round(FarmCost);
        currentCPS = CPS();
        showMultiFarm();
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
        MineCost = Math.round(MineCost);
        currentCPS = CPS();
        showMultiMine();
        document.getElementById("MineAmount").innerHTML = MineAmount;
        document.getElementById("MineCost").innerHTML = MineCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + cookieCount;
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

function buyFactory() {
    if(cookieCount >= FactoryCost) {
        cookieCount = cookieCount - FactoryCost;
        cookieCount = Math.round(cookieCount*100);
        cookieCount = cookieCount/100;
        FactoryAmount = FactoryAmount + 1;
        FactoryCost = Math.round((100000*FactoryAmount*FactoryAmount - 100000*FactoryAmount+230000)/1.3);
        FactoryCost = Math.round(FactoryCost);
        currentCPS = CPS();
        showMultiFactory();
        document.getElementById("FactoryAmount").innerHTML = FactoryAmount;
        document.getElementById("FactoryCost").innerHTML = FactoryCost;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + cookieCount;
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
    }
}

//Give cookies via console

function earnCookies(amount) {
    cookieCount = cookieCount + amount;
    document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
}

//Click multiplier

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

//Swap tabs

function upgradesTab() {
    document.getElementById("Upgrades").style.display = "block";
    document.getElementById("Multipliers").style.display = "none";
}

function multiplierTab() {
    document.getElementById("Upgrades").style.display = "none";
    document.getElementById("Multipliers").style.display = "block";
}

//Remove Multipliers from shop

function remove(givenID) {
    document.getElementById(givenID).style.display = "none";
}

//Buy Multipliers

function buyMultiClicker(number) {
    required = required = 500*number*3;
    if(cookieCount >= required) {
        cookieCount = cookieCount - required;
        clickerBonus = clickerBonus * 2;
        currentCPS = CPS();
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.round(cookieCount);
    }
}

function buyMultiGrandma(number) {
    required = 5000*number*3;
    if(cookieCount >= required) {
        cookieCount = cookieCount - required;
        grandmaBonus = grandmaBonus * 2;
        currentCPS = CPS();
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.round(cookieCount);
    }
}

function buyMultiFarm(number) {
    required = 50000*number*3;
    if(cookieCount >= required) {
        cookieCount = cookieCount - required;
        farmBonus = farmBonus * 2;
        currentCPS = CPS();
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.round(cookieCount);
    }
}

function buyMultiMine(number) {
    required = 500000*number*3;
    if(cookieCount >= required) {
        cookieCount = cookieCount - required;
        mineBonus = mineBonus * 2;
        currentCPS = CPS();
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.round(cookieCount);
    }
}

function buyMultiFactory(number) {
    required = 5000000*number*3;
    if(cookieCount >= required) {
        cookieCount = cookieCount - required;
        factoryBonus = factoryBonus * 2;
        currentCPS = CPS();
        document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.round(cookieCount);
    }
}

//Show Multipliers

function showMultiClicker() {
    if(clickerAmount == 10) {
        document.getElementById("Clicker1").style.display = "table-row";
    }
    if(clickerAmount == 25) {
        document.getElementById("Clicker2").style.display = "table-row";
    }
}

function showMultiGrandma() {
    if(GrandmaAmount == 10) {
        document.getElementById("Grandma1").style.display = "table-row";
    }
    if(GrandmaAmount == 25) {
        document.getElementById("Grandma2").style.display = "table-row";
    }
}

function showMultiFarm() {
    if(FarmAmount == 10) {
        document.getElementById("Farm1").style.display = "table-row";
    }
    if(FarmAmount == 25) {
        document.getElementById("Farm2").style.display = "table-row";
    }
}

function showMultiMine() {
    if(MineAmount == 10) {
        document.getElementById("Mine1").style.display = "table-row";
    }
    if(MineAmount == 25) {
        document.getElementById("Mine2").style.display = "table-row";
    }
}

function showMultiFactory() {
    if(FactoryAmount == 10) {
        document.getElementById("Factory1").style.display = "table-row";
    }
    if(FactoryAmount == 25) {
        document.getElementById("Factory2").style.display = "table-row";
    }
}

//Golden Cookies

function goldCookie() {
    option = Math.floor(Math.random()*2);
    if(option == 0) {
        superClick = Math.floor(Math.random()*100);
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
    else {
        bonus = currentCPS*Math.floor(Math.random()*5000)+500;
        bonus = Math.floor(bonus);
        document.getElementById("GoldenCookie").style.display = "none";
        document.getElementById("GoldenText").style.display = "block";
        document.getElementById("GoldenText").innerHTML = "INSTANT BONUS! (" + bonus + " COOKIES)!";
        cookieCount = cookieCount + bonus;
        cookieCount = Math.floor(cookieCount);
        document.getElementById("CookieCount").innerHTML = "Current Cookies: " + cookieCount;
        setTimeout(function hideText() {
            document.getElementById("GoldenText").style.display = "none";
        }, 5000)
    }
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


//Give CPS each second

setInterval(function addCPS() {
    currentCPS = CPS()
    cookieCount = cookieCount + currentCPS;
    cookieCount = Math.round(cookieCount*100);
    cookieCount = cookieCount/100;
    document.getElementById("CookieCount").innerHTML = "Current Cookies: " + Math.ceil(cookieCount);
    document.getElementById("CookieCPS").innerHTML = "Current CPS: " + currentCPS;
}, time);