import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/Stateprovider';
import { mobile } from "../responsive"
const Container = styled.div`
    height: 60px;
    margin-bottom:30px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0px 8px 0px 0px;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "30px", paddingRight: "20px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const TextLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Logo = styled.h1`
    font-weight: bold:
    ${mobile({ fontSize: "200px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px", fontWeight: "800" })}
`;

const Navbar = () => {
    const [{ basket }] = useStateValue();
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input />
                <Search style={{ color:'gray', fontSize:16 }} />
              </SearchContainer>
            </Left>
            <Center>
                <TextLink to='/'>
                    <Logo>Asadi.</Logo>
                </TextLink>
            </Center>
            <Right>
              <TextLink to='/register'>
                <MenuItem>REGISTER</MenuItem>
              </TextLink>
              <TextLink to='/login'>
                    <MenuItem>SIGN IN</MenuItem>
              </TextLink>
              <TextLink to='/cart'>
                    <MenuItem>
                        <Badge badgeContent={basket.length} color="primary">
                            <ShoppingCartOutlined />
                        </Badge> 
                    </MenuItem>
              </TextLink>
            </Right>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar;