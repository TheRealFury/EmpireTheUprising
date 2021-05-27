function Data(){
    if(localStorage.length !== 0){
        if(localStorage.getItem("EmpireName") !== null){
            name = localStorage.getItem("EmpireName");
        }
        if(localStorage.getItem("Money") !== null){
            money = localStorage.getItem("Money");
        }
        if(localStorage.getItem("Taxes") !== null){
            taxes = localStorage.getItem("Taxes");
        }
        if(localStorage.getItem("Returns") !== null){
            returns = localStorage.getItem("Returns");
        }
        if(localStorage.getItem("Username") !== null){
            Username = localStorage.getItem("Username");
        }
        if(localStorage.getItem("People") !== null){
            people = localStorage.getItem("People");
        }
        if(localStorage.getItem("Level") !== null){
            level = localStorage.getItem("Level");
        }
        if(localStorage.getItem("Stage") !== null){
            stage = localStorage.getItem("Stage");
        }
        if(localStorage.getItem("Houses") !== null){
            houses = localStorage.getItem("Houses");
        }
        if(localStorage.getItem("Hotels") !== null){
            hotels = localStorage.getItem("Hotels");
        }
        if(localStorage.getItem("Factories") !== null){
            factories = localStorage.getItem("Factories");
        }
        if(localStorage.getItem("Apartments") !== null){
            apartments = localStorage.getItem("Apartments");
        }
        if(localStorage.getItem("Commodities") !== null){
            commodities = localStorage.getItem("Commodities");
        }
        if(localStorage.getItem("Powerplants") !== null){
            powerplants = localStorage.getItem("Powerplants");
        }
        if(localStorage.getItem("Cycles") !== null){
            cycles = localStorage.getItem("Cycles");
        }
        if(localStorage.getItem("skippedCycles") !== null){
            skippedCycles = localStorage.getItem("skippedCycles");
        }
    }
}