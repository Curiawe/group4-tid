import Parse from "parse";    
    
    /**
     * 
     * @param {String} groupName 
     * @param {int} groupBaggage 
     * @param {double} groupSeats 
     * @param {int} groupPrice 
     */
export default async function addCarGroup(groupName, groupBaggage, groupSeats, groupPrice) {
        const carGroup = new Parse.Object("CarGroups"); // give us the blueprint for CarGroup Objects

        // Setting our values
        carGroup.set("name", groupName);
        carGroup.set("seats", groupSeats);
        carGroup.set("baggage", groupBaggage)
        carGroup.set("price", groupPrice)
        
        try { // please try to do the things in curly bracket.
            let result = await carGroup.save()
            alert('New object created with objectId: ' + result.id);
            } catch(error) { // but if any of this happens...
                alert('Failed to create new object, with error code: ' + error.message); // do this instead
            } finally { // no matter what, do that when you're done
                console.log("Tried to update CarGroups. Did it work?")
            }
    }

  
  //Reading your First Data Object from Back4App
/*   async function retrievePerson() {
    const query = new Parse.Query("Person");
    
    try {
      const person = await query.get("mhPFDlCahj");
      const name = person.get("name");
      const age = person.get("age");
    
      alert(`Name: ${name} age: ${age}`);
    } catch (error) {
      alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
  }   */