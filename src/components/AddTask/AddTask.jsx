import React, { useState } from 'react';
import * as S from './AddTask.style';
import Button from '../Button/Button';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.InputBlock>
        <S.Label>Užduotis:</S.Label>
        <S.Input
          type="text"
          placeholder="Pridėti užduoti"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </S.InputBlock>
      <S.InputBlock>
        <S.Label>Diena ir laikas:</S.Label>
        <S.Input
          type="text"
          placeholder="Spalio 1"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </S.InputBlock>
      <S.InputBlock>
        <S.LabelCheckBox>Priminimas:</S.LabelCheckBox>
        <S.InputCheckBox
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </S.InputBlock>
      <div className="text-align-right">
        <Button
          type="submit"
          btnText="Išsaugoti"
          btnColor="white"
          btnBgColor="green"
          hoverBtnBgColor="darkgreen"
          hoverBtnColor="white"
        />
      </div>
    </S.Form>
  );
};

export default AddTask;
