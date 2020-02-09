import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  display: flex;
  padding: 15px 0;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: flex-end;
`;
export const PageLink = styled.li`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #fff;
  background-color: #343434;
  border: 1px solid grey;
  :hover {
    cursor: pointer;
    z-index: 2;
    color: #343434;
    text-decoration: none;
    background-color: #fff;
    border-color: #fff;
  }
`;
