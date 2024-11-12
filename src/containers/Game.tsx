import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import { resetGame } from "../store/action";
import { GridState } from "../store/types";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-left: 10px;
  padding: 3px 10px;
  font-size: 14px;
  width: 50px;
`;

const Label = styled.label`
  margin-left: 40px;
  font-size: 12px;
  padding-top: 6px;
`;

export interface GameProps {
  rows: number;
  cols: number;
  mines: number;
  resetGame: typeof resetGame;
}

const Game: React.FC<GameProps> = ({ resetGame, rows, cols, mines }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let num = parseInt(event.target.value, 10);
    if (isNaN(num) || num <= 0) {
      num = 1;
    }

    switch (event.target.name) {
      case "rows":
        resetGame(num, cols, mines);
        break;
      case "cols":
        resetGame(rows, num, mines);
        break;
      case "mines":
        resetGame(rows, cols, num);
        break;
    }
  };

  return (
    <div>
      <InputsContainer>
        <Label htmlFor="rowsInput">Rows:</Label>
        <Input
          id="rowsInput"
          type="number"
          name="rows"
          value={rows}
          onChange={handleInputChange}
        />
        <Label htmlFor="colsInput">Columns:</Label>
        <Input
          id="colsInput"
          type="number"
          name="cols"
          value={cols}
          onChange={handleInputChange}
        />
        <Label htmlFor="minesInput">Mines:</Label>
        <Input
          id="minesInput"
          type="number"
          name="mines"
          value={mines}
          onChange={handleInputChange}
        />
      </InputsContainer>
      <MainContainer>
        <Grid />
      </MainContainer>
    </div>
  );
};

const mapStateToProps = (state: GridState) => ({
  rows: state.rows.length,
  cols: state.rows[0].length,
  mines: state.mines,
});

export default connect(mapStateToProps, { resetGame })(Game);
