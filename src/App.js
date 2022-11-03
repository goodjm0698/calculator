import React, { useState } from "react";
import {
  MainContainer,
  ButtonContainer,
  Button,
  CalButton,
  ZeroButton,
  InputBar,
} from "./styled.js";

function App() {
  const [calc, setCalc] = useState("");

  const getNum = (event) => {
    setCalc(calc + event.target.value);
  };
  const getOper = (event) => {
    setCalc(calc + event.target.value);
  };

  const getResult = () => {
    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) === Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc(String(eval(replace_str)));
    }
  };

  const allClear = () => {
    setCalc("");
  };

  const delCalc = () => {
    let str = String(calc.slice(0, -1));
    setCalc(str);
  };

  return (
    <MainContainer>
      <InputBar readOnly value={calc}></InputBar>
      <ButtonContainer>
        <Button onClick={allClear}>AC</Button>
        <Button onClick={delCalc}>DEL</Button>
        <CalButton value="%" onClick={getOper}>
          %
        </CalButton>
        <CalButton value="÷" onClick={getOper}>
          ÷
        </CalButton>
        <Button value={7} onClick={getNum}>
          7
        </Button>
        <Button value={8} onClick={getNum}>
          8
        </Button>
        <Button value={9} onClick={getNum}>
          9
        </Button>
        <CalButton value="×" onClick={getOper}>
          ×
        </CalButton>
        <Button value={4} onClick={getNum}>
          4
        </Button>
        <Button value={5} onClick={getNum}>
          5
        </Button>
        <Button value={6} onClick={getNum}>
          6
        </Button>
        <CalButton value="-" onClick={getOper}>
          -
        </CalButton>
        <Button value={1} onClick={getNum}>
          1
        </Button>
        <Button value={2} onClick={getNum}>
          2
        </Button>
        <Button value={3} onClick={getNum}>
          3
        </Button>
        <CalButton value="+" onClick={getOper}>
          +
        </CalButton>
        <ZeroButton value={0} onClick={getNum}>
          0
        </ZeroButton>
        <Button value=".">.</Button>
        <CalButton onClick={getResult}>=</CalButton>
      </ButtonContainer>
    </MainContainer>
  );
}

export default App;
