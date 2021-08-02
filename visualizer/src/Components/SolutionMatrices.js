import React from 'react';
import Grid from '@material-ui/core/Grid';
import LoadCells from './LoadCells';

const SolutionMatrices = (props) =>{

    let cells = props.paths.map((path, index) => {
        return (
            <Grid
                key={(index + 1).toString()}
                style={{ backgroundColor: "black" }}
                container
                direction="row"
                spacing={0}
                item
                sm={3}
            >
                <LoadCells mat={props.matrix} rows={props.rows} columns={props.columns} gindex={index+1} path={path}/>
            </Grid>
        );
    })
    return cells;

}

export default SolutionMatrices;