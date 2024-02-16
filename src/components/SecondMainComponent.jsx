import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SecondMainComponent extends Component {
  state = {
    songs2: [],
  };

  fetchSongs2 = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=kate perry"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((arrayOfSongs2) => {
        console.log("Canzoni Subsonica", arrayOfSongs2.data);
        this.setState({
          songs2: arrayOfSongs2.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchSongs2();
  }

  render() {
    return (
      <>
        <h4 className="ms-4">Italian Rock</h4>
        <Row className="d-flex flex-row justify-content-evenly">
          {this.state.songs2.slice(0, 4).map((song2) => {
            console.log("Song2:", song2);
            return (
              <Col md={2} lg={2} key={song2.id}>
                <div>
                  <img
                    src={song2.album.cover}
                    alt="Cover"
                    width={150}
                    height={150}
                  />
                  <p className="fw-bold">
                    Track: {song2.title} Artist: {song2.artist.name}
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

export default SecondMainComponent;
