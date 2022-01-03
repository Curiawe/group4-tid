import Parse from "parse";    

const queryCarGroups = {
    
    getGroupFromName : async (groupName) => {
        const CarGroups = Parse.Object.extend("CarGroups")
        const query = new Parse.Query(CarGroups);
        query.include("")
    }
}

async function getTranslation(id) {
    const Translation = Parse.Object.extend("Translation");
    const query = new Parse.Query(Translation);
    query.include("image");
  
    return await query.get(id);
  }