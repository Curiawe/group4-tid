import { COLORS } from '../../values/colors';

// Formatted Tile
const colorMap = {
    // this first part is used for availability
    Unavailable: COLORS.Red300,
    Available: COLORS.Green400,
    Returned: COLORS.Green600,
    Rented: COLORS.Blue300,
    Transfer: COLORS.Purple300,
    Service: COLORS.Yellow400,
};

export function StatusTile(props) {
    let bgColor;
    switch (props.car.Status) {
        case "Rented":
            bgColor = colorMap.Rented;
            break;

        case "Returned":
            bgColor = colorMap.Returned;
            break;

        case "Transfer":
            bgColor = colorMap.Transfer;
            break;

        case "Unavailable":
            bgColor = colorMap.Unavailable;
            break;

        default:
            break;
    }
    return (
        <td style={{ backgroundColor: bgColor }} />
    );
}
