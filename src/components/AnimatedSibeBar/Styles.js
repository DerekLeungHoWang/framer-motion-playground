import styled from "styled-components";
import { motion } from "framer-motion";
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 0;
  font-family: sans-serif;
`;

export const Sidebar = styled(motion.div)`
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-right: solid 1px #3c4245;
  background-color: #98d788;
  justify-content: space-between;
  align-items: center;
 padding: 10px;
 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
 // padding: 10px;
  background-color: #88afd7;
`;
export const CollapseBtn = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-bottom:50px;
  
`;
export const StyledImage = styled(motion.img)`
   
   height:100px;
   width:100px;
  
  
`;
export const List = styled(motion.ul)`
   
 list-style-type:none;
  display: flex;
  flex-direction:row;
  
`;

export const ListItem = styled(motion.li)`
 
`;

