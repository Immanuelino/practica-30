// StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const Header = styled.div`
  background-color: blueviolet;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  width: calc(100% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const PokemonCard = styled.li`
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-bottom: 10px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: ${props => props.primary ? '#blue' : 'green'};
  padding: 20px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonImage = styled.img`
  min-width: 200px;
  margin: 0 auto;
  display: block;
`;

export const AbilitiesList = styled.ul`
  margin-top: 5px;
  padding-left: 0;
  list-style-type: none;
`;

export const AbilityItem = styled.li`
  display: inline-block;
  margin-right: 5px;
  background-color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 5px;
`;
