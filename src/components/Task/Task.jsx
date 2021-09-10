import React from 'react';
import * as S from './Task.style';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <S.TaskBlock
      className={`${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <S.H3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </S.H3>
      <S.P>{task.day}</S.P>
    </S.TaskBlock>
  );
};

export default Task;
