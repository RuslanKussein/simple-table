import React, {useCallback, useMemo, useState} from "react";
import Form from "./containers/Form";
import useEventValue from "./hooks/useEventValue";
import Typography from "@material-ui/core/Typography";
import Table from "./containers/Table";

function App() {
    /**Данные по таблице*/
    const [rowData, setRowData] = useState([
        {
            name: "Hyperx Alloy FPS1",
            count: "1000",
            price: "50000"
        },
        {
            name: "Hyperx Alloy FPS2",
            count: "15000",
            price: "40000"
        },
        {
            name: "Hyperx Alloy FPS",
            count: "123",
            price: "70000"
        },
    ]);
    /**Форма*/
    const name = useEventValue("");
    const count = useEventValue("");
    const price = useEventValue("");

    const handleClickAddButton = useCallback(
        () => {
            setRowData([
                ...rowData,
                {
                    name: name.value,
                    count: count.value,
                    price: price.value
                }
            ]);
        },
        [
            name.value,
            count.value,
            price.value,
            rowData
        ]
    )

    const handleClickDeleteButton = useCallback(
        indexThatWouldBeDeleted => {
            setRowData(rowData.filter((row, indexOfRow) => indexOfRow !== indexThatWouldBeDeleted));
        },
        [
            name.value,
            count.value,
            price.value,
            rowData
        ]
    )

    const [editIndex, setEditIndex] = useState(null);
    const handleClickEditButton = useCallback(
        newEditIndex => {
            setEditIndex(newEditIndex);
        },
        []
    );

    const handleClickSaveButton = useCallback(
        () => {
            setEditIndex(null);
        },
        [setEditIndex]
    );

    const handleChangeTableCell = useCallback(
        (e, editRowIndex, key) => {
            const newRowData = rowData.map(
                (row, rowIndex) => rowIndex === editRowIndex ? ({
                    ...row,
                    [key]: e.target.value
                }) : row
            );

            setRowData(newRowData)
        },
        [rowData]
    );

    /**Общая стоимость*/
    const sum = useMemo(
        () => rowData.reduce((prevSum, currRow) => prevSum + +currRow.price, 0),
        [rowData]
    )

    return (
        <div>
            <Form
                count={count}
                name={name}
                price={price}
                onClickAddButton={handleClickAddButton}
            />
            <Typography variant="h5" color="primary" align="center">
                Общая стоимость {sum}
            </Typography>
            <Table
                rowData={rowData}
                editIndex={editIndex}
                onChangeTableCell={handleChangeTableCell}
                onClickSaveButton={handleClickSaveButton}
                onClickEditButton={handleClickEditButton}
                onClickDeleteButton={handleClickDeleteButton}
            />
        </div>
    );
}

export default App;
