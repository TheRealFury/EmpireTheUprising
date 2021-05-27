function WriteVal(){
    if(gameEnd == 0){
        textSize(20);
        text("Economic Stats",60,140);
        text("Population Stats",60,390);
        text("Property Stats",460,140);
        text("Upgrade Level",1060,140);
        text("Cycles",1060,390);
        text("Money",60,190);
        text(money,260,190);
        text("Taxes",60,255);
        text(taxes,260,255);
        text("Returns",60,320);
        text(returns,260,320);
        text("People",60,440);
        text(people,260,440);
        text("Level",60,505);
        text(level,260,505);
        text("Stage",60,570);
        text(stage,260,570);
        text("Houses",460,190);
        text(houses,640,190);
        text("Hotels",460,255);
        text(hotels,640,255);
        text("Factories",460,320);
        text(factories,640,320);
        text("Apartments",460,385);
        text(apartments,640,385);
        text("Commoditites",460,450);
        text(commodities,640,450);
        text("Power-plants",460,515);
        text(powerplants,640,515);
        text("Total Properties",460,580);
        totalProperties = parseInt(houses) + parseInt(hotels) + parseInt(factories) + parseInt(apartments) + parseInt(commodities) + parseInt(powerplants);
        text(totalProperties,640,580);
        if(level < 5){
            text(level,1095,200);
            text(level*20000,1245,200);
        }
        else{
            buyLevel.position(1000,1000);
        }
        text(200*(level/2),770,190);
        text(2000*(level/2),770,255);
        text(500*(level/2),770,320);
        text(1000*(level/2),770,385);
        text(700*(level/2),770,450);
        text(5000*(level/2),770,515);
        text(200*(level/4),880,190);
        text(2000*(level/4),880,255);
        text(500*(level/4),880,320);
        text(1000*(level/4),880,385);
        text(700*(level/4),880,450);
        text(5000*(level/4),880,515);
        text(cycles,1110,460);
        text(totalCycles,1255,460);

        textSize(10);
        text("*Please know that this action cannot be reversed.",1085,500);
        text("No. of Properties",610,160);
        text("Buy Price",770,160);
        text("Sell Price",880,160);
        text("Total Cycles Passed",1070,425);
        text("Total Cycles Left",1215,425);
        if(level < 5){
            text("*Please know that this action is non-refundable.",1085,250);
            text("Current Level",1070,170);
            text("Upgrade Cost",1240,170);
        }
    }
    else if(gameEnd == 1){
        text("You have chosen to end the game. Your game will start from the very beginning next time.",200,200)
        text("Level - " + level + "/5",200,230);
        text("Houses - " + houses + "/100",200,250);
        text("Hotels - " + hotels + "/10",200,270);
        text("Factories - " + factories + "/15",200,290);
        text("Apartments - " + apartments + "/25",200,310);
        text("Commodities - " + commodities + "/20",200,330);
        text("Powerplants - " + powerplants + "/5",200,350);
        text("Cycles - " + cycles + "/100",200,370);
        var totalScore = ((parseInt(houses) + parseInt(hotels) + parseInt(factories) + parseInt(apartments) + parseInt(commodities) + parseInt(powerplants) + parseInt(cycles))/280)*100;
        text("Your total score is - " + totalScore + "%",200,400);
    }
}