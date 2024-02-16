import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ThirdComponent extends Component {
  state = {
    songs3: [],
  };

  fetchSongs3 = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((arrayOfSongs3) => {
        console.log("Eminem", arrayOfSongs3.data);
        this.setState({
          songs3: arrayOfSongs3.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchSongs3();
  }

  render() {
    return (
      <>
        <h4 className="ms-5">Hip Hop</h4>
        <Row className="d-flex flex-row justify-content-evenly">
          {this.state.songs3.slice(0, 4).map((song3) => {
            console.log("Song3:", song3);
            return (
              <Col md={2} lg={2} key={song3.id}>
                <div>
                  <img
                    src={song3.album.cover}
                    alt="Cover"
                    width={150}
                    height={150}
                  />
                  <p className="fw-bold">
                    Track: {song3.title} Artist: {song3.artist.name}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default ThirdComponent;
