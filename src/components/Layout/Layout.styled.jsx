import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  background-image: radial-gradient(
    circle at 50% -3.03%,
    #38c6b4 0,
    #25c6bd 7.14%,
    #05c6c6 14.29%,
    #00c5cf 21.43%,
    #00c5d8 28.57%,
    #00c4e0 35.71%,
    #00c2e7 42.86%,
    #0cc1ed 50%,
    #2cbff2 57.14%,
    #42bdf7 64.29%,
    #55bbfa 71.43%,
    #67b8fc 78.57%,
    #78b6fc 85.71%,
    #88b2fc 92.86%,
    #98affa 100%
  );
  box-shadow: 0px 2px 10px 1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 90px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  width: 1280px;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px;
  font-weight: 500;
  color: #030303;
  font-size: 24px;

  &.active {
    border-radius: 1px solid;
    background-color: #f3bc94;
    border-radius: 100px;
  }
`;

export const Main = styled.main`
  height: 100%;
  padding-bottom: 60px;
  background-size: cover;
  background-repeat: repeat;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-top: 40px;
`;