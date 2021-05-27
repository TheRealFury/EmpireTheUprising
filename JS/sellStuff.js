function checkSell(){
    loseHouse.mousePressed(()=>{
        if(houses == 0){
            window.prompt("You do not have any houses to sell.");
        }
        else{
            houses -= 1;
            money = money + 200*(level/4);
        }
    });
    loseHotel.mousePressed(()=>{
        if(hotels == 0){
            window.prompt("You do not have any hotels to sell.");
        }
        else{
            hotels -= 1;
            money = money + 2000*(level/4);
        }
    });
    loseFactory.mousePressed(()=>{
        if(factories == 0){
            window.prompt("You do not have any factories to sell.");
        }
        else{
            factories -= 1;
            money = money + 500*(level/4);
        }
    });
    loseApartment.mousePressed(()=>{
        if(apartments == 0){
            window.prompt("You do not have any apartments to sell.");
        }
        else{
            apartments -= 1;
            money = money + 1000*(level/4);
        }
    });
    loseCommodity.mousePressed(()=>{
        if(commodities == 0){
            window.prompt("You do not have any commodities to sell.");
        }
        else{
            commodities -= 1;
            money = money + 700*(level/4);
        }
    });
    losePowerplant.mousePressed(()=>{
        if(powerplants == 0){
            window.prompt("You do not have any powerplants to sell.");
        }
        else{
            powerplants -= 1;
            money = money + 5000*(level/4);
        }
    });
}