function saveReset(){
    save.mousePressed(()=>{
        name = empireName.value();
        localStorage.setItem("EmpireName",name);
        name = userName.value();
        localStorage.setItem("Username",Username);
        localStorage.setItem("Money",money);
        localStorage.setItem("Taxes",taxes);
        localStorage.setItem("Returns",returns);
        localStorage.setItem("People",people);
        localStorage.setItem("Level",level);
        localStorage.setItem("Stage",stage);
        localStorage.setItem("Houses",houses);
        localStorage.setItem("Hotels",hotels);
        localStorage.setItem("Factories",factories);
        localStorage.setItem("Apartments",apartments);
        localStorage.setItem("Commodities",commodities);
        localStorage.setItem("Powerplants",powerplants);
        localStorage.setItem("Cycles",cycles);
        localStorage.setItem("skippedCycles",skippedCycles);
      });
      reset.mousePressed(()=>{
        var money = 1000;
        var taxes = 0;
        var returns = 0;
        var houses = 0;
        var hotels = 0;
        var factories = 0;
        var apartments = 0;
        var commodities = 0;
        var powerplants = 0;
        var people = 0;
        var level = 1;
        var cycles = 0;
        var skippedCycles = 0;
        var stage = "Village";
        var name = "Empire";
        var Username = "Username";
        localStorage.setItem("EmpireName",name);
        localStorage.setItem("Username",Username);
        localStorage.setItem("Money",money);
        localStorage.setItem("Taxes",taxes);
        localStorage.setItem("Returns",returns);
        localStorage.setItem("People",people);
        localStorage.setItem("Level",level);
        localStorage.setItem("Stage",stage);
        localStorage.setItem("Houses",houses);
        localStorage.setItem("Hotels",hotels);
        localStorage.setItem("Factories",factories);
        localStorage.setItem("Apartments",apartments);
        localStorage.setItem("Commodities",commodities);
        localStorage.setItem("Powerplants",powerplants);
        localStorage.setItem("Cycles",cycles);
        localStorage.setItem("skippedCycles",skippedCycles);
      });
      End.mousePressed(()=>{
        w1.destroy();
        w2.destroy();
        w3.destroy();
        w4.destroy();
        w5.destroy();
        w6.destroy();
        w7.destroy();
        w8.destroy();
        w9.destroy();
        w10.destroy();
        w11.destroy();
        w12.destroy();
        w13.destroy();
        w14.destroy();
        w15.destroy();
        w16.destroy();
        w17.destroy();
        w18.destroy();
        w19.destroy();
        w20.destroy();
        buyHouse.position(1000,1000);
        buyHotel.position(1000,1000);
        buyFactory.position(1000,1000);
        buyApartment.position(1000,1000);
        buyCommodity.position(1000,1000);
        buyPowerplant.position(1000,1000);
        loseHouse.position(1000,1000);
        loseHotel.position(1000,1000);
        loseFactory.position(1000,1000);
        loseApartment.position(1000,1000);
        loseCommodity.position(1000,1000);
        losePowerplant.position(1000,1000);
        End.position(1000,1000);
        skipCycle.position(1000,1000);
        save.position(1000,1000);
        reset.position(1000,1000);
        buyLevel.position(1000,1000);
        userName.position(1000,1000);
        empireName.position(1000,1000);
        var money = 1000;
        var taxes = 0;
        var returns = 0;
        var houses = 0;
        var hotels = 0;
        var factories = 0;
        var apartments = 0;
        var commodities = 0;
        var powerplants = 0;
        var people = 0;
        var level = 1;
        var cycles = 0;
        var skippedCycles = 0;
        var stage = "Village";
        var name = "Empire";
        var Username = "Username";
        localStorage.setItem("EmpireName",name);
        localStorage.setItem("Username",Username);
        localStorage.setItem("Money",money);
        localStorage.setItem("Taxes",taxes);
        localStorage.setItem("Returns",returns);
        localStorage.setItem("People",people);
        localStorage.setItem("Level",level);
        localStorage.setItem("Stage",stage);
        localStorage.setItem("Houses",houses);
        localStorage.setItem("Hotels",hotels);
        localStorage.setItem("Factories",factories);
        localStorage.setItem("Apartments",apartments);
        localStorage.setItem("Commodities",commodities);
        localStorage.setItem("Powerplants",powerplants);
        localStorage.setItem("Cycles",cycles);
        localStorage.setItem("skippedCycles",skippedCycles);
        gameEnd = 1;
      });
}