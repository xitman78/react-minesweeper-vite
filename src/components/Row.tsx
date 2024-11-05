import * as React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export interface RowProps {
  rowLength: number;
  rowIndex: number;
}

export const Row: React.FC<RowProps> = ({ rowLength, rowIndex }) => {
  const cells: number[] = new Array(rowLength).fill(1).map((_, i) => i);
  return (
    <RowWrapper>
      {cells.map(cellIndex => (
        <Cell key={cellIndex} rowIndex={rowIndex} colIndex={cellIndex} />
      ))}
    </RowWrapper>
  );
};

