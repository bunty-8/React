import React from 'react';
import Cell from './Cell';
import Box from '@material-ui/core/Box';

const LoadCells = (props) => {

    let matrix = Array(props.rows).fill().map(() => Array(props.columns).fill(0));
    for (let i = 0; i < props.mat.length; i++) {
        for (let j = 0; j < props.mat[0].length; j++) {
            matrix[i][j] = props.mat[i][j];
        }
    }
    props.path.forEach((cordinate) => {
        // console.log(cordinate[0], cordinate[1]);
        matrix[cordinate[0]][cordinate[1]] = 2;
    });
    //   console.log(matrix);

    let cells = [];
    matrix.forEach((rowEle, rindex) => {
        rowEle.forEach((cval, cindex) => {
            if (cval === 1) {
                cells.push(
                    <Cell
                        key={props.gindex.toString() + rindex.toString() + cindex.toString()}
                        color="red"
                    >
                        <Box height="50px"></Box>
                    </Cell>
                );
            } else {
                if (rindex === 0 && cindex === 0) {
                    cells.push(
                        <Cell
                            key={props.gindex.toString() + rindex.toString() + cindex.toString()}
                            color="white"
                        >
                            <Box height="50px">
                                <span>Start</span>
                            </Box>{" "}
                        </Cell>
                    );
                } else if (rindex === props.rows - 1 && cindex === props.columns - 1) {
                    cells.push(
                        <Cell
                            key={props.gindex.toString() + rindex.toString() + cindex.toString()}
                            color="white"
                        >
                            <Box height="50px">
                                <span>End</span>
                            </Box>
                        </Cell>
                    );
                } else if (matrix[rindex][cindex] === 2) {
                    cells.push(
                        <Cell
                            key={props.gindex.toString() + rindex.toString() + cindex.toString()}
                            color="green"
                        >
                            <Box height="50px" >
                            </Box>
                        </Cell>
                    );
                } else {
                    cells.push(
                        <Cell
                            key={props.gindex.toString() + rindex.toString() + cindex.toString()}
                            color="white"
                        >
                            <Box height="50px" />
                        </Cell>
                    );
                }
            }
        });
    });

    return cells;

}

export default LoadCells;