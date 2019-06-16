import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default function CharCard(props) {
  return (
    <GridListTile 
      style={props.style}
      onClick={props.onClick}
    >
      <img src={props.image} alt={props.name} />
      <GridListTileBar
        title={props.name}
      />
    </GridListTile>
  );
}