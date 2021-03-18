import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        "& > *": {
            marginTop: "1rem"
        }
    },
    fixedWidth: {
        minWidth: 200,
        maxWidth: 300
    },
    tableTextField: {
        maxWidth: 200,
        display: "table-cell"
    }
})

export default useStyles;