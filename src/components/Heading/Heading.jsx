import React from 'react';
import * as S from './Heading.style';

import Button from '../Button/Button';

const Heading = ({ title, btnText, onAdd, showAdd }) => {
  return (
    <S.HeadingBlock>
      <S.Heading>{title}</S.Heading>
      <Button
        onAdd={onAdd}
        btnColor="white"
        btnBgColor={showAdd ? 'red' : 'green'}
        hoverBtnBgColor={showAdd ? 'crimson' : 'darkgreen'}
        btnText={showAdd ? 'Uždaryti' : btnText}
      />
    </S.HeadingBlock>
  );
};

export default Heading;
