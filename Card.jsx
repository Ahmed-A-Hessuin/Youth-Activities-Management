import { useNavigate } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
const Card = (Activity) => {
    const navigate = useNavigate()
  return (
    <>
      <Row>
        {Activity.map((response) => (
          <Col xs={12} md={6} lg={4}>
            <div className="Cards__wrapper">
              <div className="Card__wrapper">
                <img
                  className="productCard__img"
                  src={response.images[1].url}
                  alt="kimo"
                />
                <div className="textdiv">
                  <div className="textdivinner">
                    {response.description_en}

                    <button className="kimo">Read More</button>
                  </div>
                </div>

                <button
                  className="ProductCard__button"
                  onClick={() => {
                    navigate({
                      pathname: `/detailsActivityEn`,
                      search: `?_id=${response._id}`,
                    });
                  }}
                >
                  go Home
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Card