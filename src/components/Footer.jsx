import {  Facebook, Instagram, LinkedIn, MailOutlined, Phone, Room, Twitter, YouTube } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 25px;
    ${mobile({flexDirection: "column"})}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}

`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Title = styled.h2`
    margin-bottom: 30px
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CORNER SHOP.</Logo>
            <Desc>Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s clothing or electronics, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what Corner Shop Nigeria offers and that’s what makes it one of the best online shopping websites in Nigeria.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <LinkedIn />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <YouTube />
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Wears</ListItem>
                <ListItem>Female Wears</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Categories</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/> N0. 4 Ougadougou Street, Wuse Zone 2, Abuja
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight: "10px"}}/>+234 915-589-2256
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight: "10px"}} />support@cornershop.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer