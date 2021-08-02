import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadCells from './LoadCells';
import SolutionMatrices from './SolutionMatrices';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
let paths = [];
function calculatePathsUtil(matrix, visited, i, j, rows, columns, currentpath) {
    // console.log("i", i, "j", j);
    if (i < 0 || i >= rows || j < 0 || j >= columns) return;
    if (matrix[i][j] === 1 || visited[i][j] === 1) return;
    if (i === rows - 1 && j === columns - 1) {
        //pathCount++;
        //   console.log("found a path");
        paths.push([...currentpath]);
        visited[i][j] = 0;
        return;
    }
    visited[i][j] = 1;
    //up
    /*currentpath.push([i - 1, j]);
    calculatePathsUtil(matrix, visited, i - 1, j, rows, columns, currentpath);
    currentpath.pop();*/

    //down
    currentpath.push([i + 1, j]);
    calculatePathsUtil(matrix, visited, i + 1, j, rows, columns, currentpath);
    currentpath.pop();
    //right
    currentpath.push([i, j + 1]);
    calculatePathsUtil(matrix, visited, i, j + 1, rows, columns, currentpath);
    currentpath.pop();
    //left
    /*currentpath.push([i, j - 1]);
    calculatePathsUtil(matrix, visited, i, j - 1, rows, columns, currentpath);
    currentpath.pop();*/

    visited[i][j] = 0;

    return;
}
function calculatePaths(matrix, i, j, rows, columns) {

    let visited = Array(rows)
        .fill()
        .map(() => Array(columns).fill(0));
    calculatePathsUtil(matrix, visited, i, j, rows, columns, []);
    //   console.log("pathCount", pathCount);
    return paths;

}
const Maze = () => {
    const classes = useStyles();
    let rows = 4;
    let columns = 4;
    let matrix = Array(rows).fill().map(() => Array(columns).fill(0));
    matrix[2][0] = 1;
    matrix[2][1] = 1;
    //matrix[2][2] = 1;
    matrix[1][0] = 1;
    //matrix[1][1] = 1;
    //matrix[1][2] = 1;
    //matrix[2][3] = 1;

    let paths = calculatePaths(matrix, 0, 0, rows, columns);

    return (
        <div className={classes.root} >
            <Grid container spacing={1}>

                <Grid
                    style={{ backgroundColor: "orange" }}
                    container
                    justify="center"
                >
                    <Grid
                        key="0"
                        style={{ backgroundColor: "black" }, { marginTop: '20px' }}
                        container
                        direction="row"
                        spacing={0}
                        item
                        sm={3}
                    >
                        <LoadCells mat={matrix} rows={rows} columns={columns} gindex={0} path={[]} />
                    </Grid>
                </Grid>
                <Grid
                    style={{ backgroundColor: "orange" }}
                    container
                    justify="center"
                >
                    <Typography gutterBottom variant="subtitle1">
                        Initial Maze
                    </Typography>
                </Grid>

                <Grid style={{ backgroundColor: "orange" }} container justify="center">
                    <Typography gutterBottom variant="subtitle1">
                        Total Paths = {paths.length}
                    </Typography>
                </Grid>

                <SolutionMatrices paths={paths} matrix={matrix} rows={rows} columns={columns} />
            </Grid>
        </div>
    );
}

export default Maze;