function passCycle(){
    skipCycle.mousePressed(()=>{
        if(cycles !== 100){
            for(i = 1; i < (parseInt(houses) + 1); i++){
                money = money + round(random(-10,11));
            }
            for(i = 1; i < (parseInt(hotels) + 1); i++){
                money = money + round(random(-70,71));
            }
            for(i = 1; i < (parseInt(factories) + 1); i++){
                money = money + round(random(-20,21));
            }
            for(i = 1; i < (parseInt(apartments) + 1); i++){
                money = money + round(random(-35,36));
            }
            for(i = 1; i < (parseInt(commodities) + 1); i++){
                money = money + round(random(-25,26));
            }
            for(i = 1; i < (parseInt(powerplants) + 1); i++){
                money = money + round(random(-175,176));
            }
            cycles = parseInt(cycles) + 1;
            totalCycles -= 1;
        }
    });
}