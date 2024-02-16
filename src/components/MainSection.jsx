import { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import SecondMainComponent from "./SecondMainComponent";
import ThirdComponent from "./ThirdComponent";

class MainSection extends Component {
  state = {
    songs: [],
  };

  fetchSongs = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((arrayOfSongs) => {
        console.log("Songs", arrayOfSongs.data);
        this.setState({
          songs: arrayOfSongs.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    return (
      <Container fluid className="text-white">
        <Row className="bg-dark bg-gradient">
          <Sidebar />
          <Col>
            <div className="d-flex flex-row justify-content-evenly text-secondary">
              <p>TRENDING</p>
              <p>PODCAST</p>
              <p>MOOD AND GENRES</p>
              <p>NEW RELEASES</p>
              <p>DISCOVER</p>
            </div>
            <h4 className="ms-5">Rock Classics</h4>
            <Row className="d-flex flex-row justify-content-evenly">
              {this.state.songs.slice(0, 4).map((song) => {
                console.log("Song2:", song);
                return (
                  <Col md={2} lg={2} key={song.id} className="mt-4">
                    <div>
                      <img
                        src={song.album.cover}
                        alt="Cover"
                        width={150}
                        height={150}
                      />
                      <p className="fw-bold">
                        Track: {song.title} Artist: {song.artist.name}{" "}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <SecondMainComponent />
            <ThirdComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MainSection;
