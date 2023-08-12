// import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Player = ({ item, playerType, onDropPlayer, index }) => {

  const [{ isDragging }, dragRef] = useDrag({

    type: playerType,

    item: () => ({ ...item, index }),

    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),

  });

  return (
    <div className="square"
      ref={dragRef}
    >
      {item.name}
    </div>
  );
};

export default Player;