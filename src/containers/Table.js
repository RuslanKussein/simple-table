import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiTable from "@material-ui/core/Table";
import {headerData} from "../constants/tableHeaderData";
import useStyles from "../styles";

const Table = ({
    rowData,
    editIndex,
    onChangeTableCell,
    onClickSaveButton,
    onClickEditButton,
    onClickDeleteButton
}) => {
    const classes = useStyles();

    return (
        <MuiTable>
            <TableHead>
                <TableRow>
                    {headerData.map(header => (
                        <TableCell key={header.key}>{header.title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rowData && rowData.map((row, rowIndex) => (
                        <TableRow key={row.name}>
                            {
                                headerData.map(header => editIndex !== rowIndex ? (
                                        <TableCell className={classes.fixedWidth}>{row[header.key]}</TableCell>
                                    ) : <TextField
                                        value={row[header.key]}
                                        className={classes.tableTextField}
                                        onChange={e => onChangeTableCell(e, rowIndex, header.key)}
                                    />
                                )
                            }
                            {
                                editIndex === rowIndex ? (
                                    <IconButton color="primary" onClick={onClickSaveButton}>
                                        <SaveIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton color="primary" onClick={onClickEditButton.bind(null, rowIndex)}>
                                        <EditIcon />
                                    </IconButton>
                                )
                            }
                            <IconButton color="primary">
                                <DeleteIcon onClick={onClickDeleteButton.bind(null, rowIndex)}/>
                            </IconButton>
                        </TableRow>
                    ))
                }
            </TableBody>
        </MuiTable>
    )
}

export default Table;