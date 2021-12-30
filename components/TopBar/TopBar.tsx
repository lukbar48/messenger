import React from 'react';
import RoomsIcon from '../../assets/icons/RoomsIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { IconWrapper, Wrapper } from './TopBar.style';

const TopBar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <IconWrapper>
        <RoomsIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default TopBar;
