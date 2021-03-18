import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import useStyles from "../styles";

const Form = ({
    name,
    count,
    price,
    onClickAddButton
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <TextField
                value={name.value}
                onChange={name.onChange}
                label="Название"
                className={classes.fixedWidth}
            />
            <TextField
                value={count.value}
                onChange={count.onChange}
                label="количество"
                className={classes.fixedWidth}
            />
            <TextField
                value={price.value}
                onChange={price.onChange}
                label="стоимость"
                className={classes.fixedWidth}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.fixedWidth}
                onClick={onClickAddButton}
            >
                Добавить
            </Button>
        </Card>
    )
}

export default Form;