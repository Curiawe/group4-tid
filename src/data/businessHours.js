export default function dataSetBusinessHours (input) {

    if (input === "Pickup" || input === "Transfer") {
        return (
        <datalist id="businessHourBlocks">
            <option value="08:00"/>
            <option value="10:00"/>
            <option value="12:00"/>
            <option value="14:00"/>
            <option value="16:00"/>
            <option value="18:00"/>
        </datalist>
    
        )
    } else if (input === "Return") {
        return (
        <datalist>
            <option value="10:00"/>
            <option value="12:00"/>
            <option value="14:00"/>
            <option value="16:00"/>
            <option value="18:00"/>
            <option value="20:00"/>
        </datalist>
        )
    } else 
    alert("No valid datalist selected. Valid lists are 'Pickup', 'Return' and 'Transfer'.")
    return (
        null    )
}