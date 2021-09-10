import React from 'react';
import * as S from './Button.style';

const Button = (props) => {
  return (
    <S.Button
      onClick={props.onAdd}
      btnColor={props.btnColor}
      btnBgColor={props.btnBgColor}
      hoverBtnColor={props.hoverBtnColor}
      hoverBtnBgColor={props.hoverBtnBgColor}
    >
      {props.btnText}
    </S.Button>
  );
};

export default Button;
