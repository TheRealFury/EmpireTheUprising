function checkBuy(){
    buyHouse.mousePressed(()=>{
        if(money > 200*(level/2) && houses < level*20){
            money = money - 200*(level/2);
            houses = parseInt(houses) + 1;
        }
        else{
            if(houses == level*20 && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(houses == level*20 && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 200*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyHotel.mousePressed(()=>{
        if(money > 2000*(level/2) && hotels < level*2){
            money = money - 2000*(level/2);
            hotels = parseInt(hotels) + 1;
        }
        else{
            if(hotels == level*2 && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(hotels == level*2 && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 2000*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyFactory.mousePressed(()=>{
        if(money > 500*(level/2) && factories < level*3){
            money = money - 500*(level/2);
            factories = parseInt(factories) + 1;
        }
        else{
            if(factories == level*3 && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(factories == level*3 && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 500*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyApartment.mousePressed(()=>{
        if(money > 1000*(level/2) && apartments < level*5){
            money = money - 1000*(level/2);
            apartments = parseInt(apartments) + 1;
        }
        else{
            if(apartments == level*5 && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(apartments == level*5 && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 1000*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyCommodity.mousePressed(()=>{
        if(money > 700*(level/2) && commodities < level*4){
            money = money - 700*(level/2);
            commodities = parseInt(commodities) + 1;
        }
        else{
            if(commodities == level*4 && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(commodities == level*4 && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 700*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyPowerplant.mousePressed(()=>{
        if(money > 5000*(level/2) && powerplants < level){
            money = money - 5000*(level/2);
            powerplants = parseInt(powerplants) + 1;
        }
        else{
            if(powerplants == level && level < 4){
                window.prompt("You cannot purchase this item anymore until you upgrade your level.")
            }
            else if(powerplants == level && level == 5){
                window.prompt("You cannot purchase this item anymore because you have reached the maximum limit.")
            }
            if(money < 5000*(level/2)){
                window.prompt("You do not have enough money to purchase this item.");
            }
        }
    });
    buyLevel.mousePressed(()=>{
        if(money > 20000*level && level < 5){
            money-= 20000*level;
            level = parseInt(level) + 1;
            if(stage == "Village"){
                stage = "Town";
            }
            else if(stage == "Town"){
                stage = "City";
            }
            else if(stage == "City"){
                stage = "Kingdom";
            }
            else if(stage == "Kingdom"){
                stage = "Empire";
            }
        }
    });
}