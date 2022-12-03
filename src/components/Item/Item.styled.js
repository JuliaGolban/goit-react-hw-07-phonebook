import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  align-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Name = styled.span`
  margin-right: auto;
`;

const Number = styled.span``;

export { Item, Name, Number };
