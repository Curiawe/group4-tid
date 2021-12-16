import { COLORS } from "../../values/colors"

export const handleColor = {
    
    handleColor : (fromPubSub, bookingRef) => {
        let bgColor = ""
        if (fromPubSub === bookingRef) {
          bgColor = COLORS.Gray200
        } else {
          bgColor = "white"
        }
        return bgColor
    }
}
