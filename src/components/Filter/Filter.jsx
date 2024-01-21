import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelectors';

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterId = nanoid();

  const onChangeFilter = e => {

    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Label>
        <Input
          type="text"
          placeholder="Search"
          value={filter}
          name="filter"
          id={filterId}
          onChange={onChangeFilter}
        />
      </Label>
    </>
  );
};
