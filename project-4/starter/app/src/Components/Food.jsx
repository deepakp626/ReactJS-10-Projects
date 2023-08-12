import styled from "styled-components";

const Food = ({ food }) => {
  return (
    <Div>
      {food.map((obj, i) => {
        return (
          <Itemdiv key={i}>
            <div>
              <img src={`http://localhost:9000${obj.image}`} alt="image" />
            </div>
            <div>
              <div className="detail">
                <h2>{obj.name}</h2>
                <p>{obj.text}</p>
              </div>
              <div className="price">
                <p>$ {obj.price.toFixed(2)}</p>
              </div>
            </div>
          </Itemdiv>
        );
      })}
    </Div>
  );
};

export default Food;

const Itemdiv = styled.div`
display: flex;
padding:8px;
max-width: 340px;
height: 167px;
flex-shrink: 0;

 border:1px solid #98F9FF;

border-radius: 20px;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

  .detail {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 8px;
  }
  .detail h2 {
    font-size: 16px;
    font-weight: 600px;
  }
  p {
    font-size: 12px;
    font-weight: 400px;
  }
  .price {
    display: flex;
    justify-content: flex-end;
  }
  .price p {
    border-radius: 5px;
    background: #ff4343;
    padding: 4px 6px;
    width: 57px;
    margin-top: 26px;
  }
`;
const Div = styled.div`
 min-height:100vh;
  padding: 64px 0px;
  display: flex;
  row-gap: 22px;
  column-gap:20px;
  /* align-items: center; */
  flex-wrap: wrap;
  justify-content:center;
`;
