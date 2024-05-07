import React from "react";

export const Tooltip = ({ hoveredValue, mousePosition, labelX, labelY }) => {
    if (!hoveredValue) {
      return <div id="tooltip-container" style={{ visibility: "hidden" }}></div>;
    } else {
      const xPosition = mousePosition.x;
      const yPosition = mousePosition.y;
      return (
        <div
          id="tooltip-container"
          style={{ left: `${xPosition + 25}px`, top: `${yPosition - 25}px` }}
        >
          <div>
            <div id="tooltip-name">
              {hoveredValue.playerName} ({hoveredValue.season})
            </div>
            <hr />
            <div id="tooltip" data-year={hoveredValue.Year}>
              <div>{labelX}(x): {hoveredValue.stat1}</div>
              <div>{labelY}(y): {hoveredValue.stat2}</div>
            </div>
          </div>
        </div>
      );
    }
};