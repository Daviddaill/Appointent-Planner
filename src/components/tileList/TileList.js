import React from "react";
import { Tile } from "../tile/Tile";

//this component is use by both contactPage and AppoitnmentPage
export const TileList = ({ tiles }) => {
  if (!tiles) {
    return;
  }


  return (
    <div>
      {
        tiles.map((tile, index) => {
          const { name, ...description } = tile;         
          return (
           
          <Tile
            name={name}
            description={description}
            key={index}
          >
          </Tile>
          )

        })}


    </div>
  );
};
