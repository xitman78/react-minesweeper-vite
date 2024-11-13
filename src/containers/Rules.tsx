import * as React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RulesContainer = styled.div`
  max-width: 500px;
  min-width: 400px;
`;

export interface RulesProps {}

const Rules: React.FC<RulesProps> = () => {
  return (
    <PageContainer>
      <RulesContainer>
        <h2>How to Play Minesweeper</h2>
        <p>
          Welcome to the web version of the classic{" "}
          <a
            href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)"
            target="_blank"
          >
            Minesweeper puzzle
          </a>
          ! Your mission is to identify all the hidden mines on the field
          without setting any off. Good luck!
        </p>

        <h3>Objective</h3>
        <p>Mark all the mines on the field to win the game!</p>

        <h3>Controls</h3>
        <p>
          <strong>Left Click</strong>: Reveal a cell.
        </p>
        <p>
          <strong>Right Click</strong>: Mark a cell as containing a mine.
        </p>
        <p>
          <strong>Double Click</strong>: Smart Move. Double-click on an opened
          cell with a number to reveal all neighboring cells. This works only if
          the number of marked mines around matches the number in the cell.
        </p>

        <hr />

        <p>
          Check out the source code on{" "}
          <a
            href="https://github.com/xitman78/react-minesweeper-vite"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Developed by{" "}
          <a href="https://alexander-cherepnya.netlify.com" target="_blank">
            Alexander Cherepnya
          </a>
        </p>
      </RulesContainer>
    </PageContainer>
  );
};

export default Rules;
