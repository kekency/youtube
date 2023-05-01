import { PaystackButton } from 'react-paystack'
import { useState } from 'react';
import styled from 'styled-components'



const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const Item = styled.div`
  margin: 16px;
  position: relative;
`;

const OverlayEffect = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;
  width: 100%;
`;

const ItemImage = styled.img`
  height: 250px;
  width: 250px;
`;

const ItemDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const ItemTitle = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
`;

const ItemAmount = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

const Checkout = styled.div`
  margin: 16px;
  width: 250px;
`;

const CheckoutForm = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
`;

const CheckoutField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  input {
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px;
  }
`;

const PaystackButtons = styled.button`
  background-color: #009688;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
  padding: 8px;
  width: 100%;
`;
const PaystackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckoutLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CheckoutInput = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Label= styled.label`
`;
const Input= styled.input`
`;



const Pay = () => {
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
    const amount = 1000000;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
    const resetForm = () => {
      setEmail('');
      setName('');
      setPhone('');
    };
  
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: 'Buy Now',
      onSuccess: ({ reference }) => {
        alert(
          `Your purchase was successful! Transaction reference: ${reference}`
        );
        resetForm();
      },
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    };
  
    return (
        <AppContainer>
          <Container>
            <Item>
              <OverlayEffect />
              <ItemImage
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="product"
              />
              <ItemDetails>
                <ItemTitle>Coconut Oil</ItemTitle>
                <ItemAmount>NGN {amount / 100}</ItemAmount>
              </ItemDetails>
            </Item>
            <Checkout>
              <CheckoutForm>
                <CheckoutField>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </CheckoutField>
                <CheckoutField>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CheckoutField>
                <CheckoutField>
            <CheckoutLabel>Phone</CheckoutLabel>
            <CheckoutInput
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </CheckoutField>
        </CheckoutForm>
        <PaystackButtonWrapper>
          <PaystackButtons className="paystack-button" {...componentProps} />
        </PaystackButtonWrapper>
    </Checkout>
    </Container>
    </AppContainer>
    )
}
    
export default Pay