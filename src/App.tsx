import styled from 'styled-components';
import './App.css';
import CardPic from '../src/assets/images/card-pic.webp'

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  min-height: 350px;
  padding: 10px 10px 0 10px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;

const CardPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin-bottom: 20px;
`;

const CardPicture = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px 0 10px;
`;

const CardSectionTitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const CardSectionTitle = styled.h1`
  text-align: start;
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  color: #000;
`;

const CardSectionTextWrapper = styled.div`
  width: 100%;
`;

const CardSectionText = styled.p`
  text-align: start;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 20px;
  word-spacing: 1px;
  color: #abb3ba;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px 0 10px;
  gap: 12px;
`;

const ColoredBtn = styled.button`
  border: none;
  border-radius: 5px;
  background: #4e71fe;
  padding: 6px 20px;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 20px;
  transition: 0.3s;
  &:hover {
    background: #fff;
    outline: 2px solid #4e71fe;
    color: #4e71fe;
  }
`;

const OutlinedBtn = styled(ColoredBtn)`
  background: #fff;
  outline: 2px solid #4e71fe;
  padding: 4px 20px;
  color: #4e71fe;
`;
