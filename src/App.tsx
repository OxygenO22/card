import styled from 'styled-components';
import './App.css';
import CardPic from '../src/assets/images/card-pic.webp'
import { ButtonWrapper, ColoredBtn, OutlinedBtn } from './assets/components/styles/card/Buttons.styled';
import { CardPicture, CardPictureWrapper } from './assets/components/styles/card/Picture.styled';
import { CardSection, CardSectionText, CardSectionTextWrapper, CardSectionTitle, CardSectionTitleWrapper } from './assets/components/styles/card/Content.styled';
import { Card } from './assets/components/styles/card/Card.styled';

function App() {
  return (
    <div className="App">
      <Page>
        <Card>
          <CardPictureWrapper>
            <CardPicture src={CardPic} alt="Card picture" />
          </CardPictureWrapper>
          <CardSection>
            <CardSectionTitleWrapper>
              <CardSectionTitle>Headline</CardSectionTitle>
            </CardSectionTitleWrapper>
            <CardSectionTextWrapper>
              <CardSectionText>
                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                molestie ornare in venen.
              </CardSectionText>
            </CardSectionTextWrapper>
          </CardSection>
          <ButtonWrapper>
            <ColoredBtn>See more</ColoredBtn>
            <OutlinedBtn>Save</OutlinedBtn>
          </ButtonWrapper>
        </Card>
      </Page>
    </div>
  );
}

export default App;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`