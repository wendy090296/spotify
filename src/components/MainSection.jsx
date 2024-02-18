import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SelectedSong from "./SelectedSong";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MainSection = (props) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = true;

  const fetchSongs = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.genre
      );
      if (response.ok) {
        const arrayOfSongs = await response.json();
        console.log(arrayOfSongs.data);
        // setto il nuovo stato del mio array
        setSongs(arrayOfSongs.data);
        setIsLoading(false);
      } else {
        throw new Error("errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <h2>{props.genre.toUpperCase()}</h2>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
          id="rockSection"
        >
          {isLoading ? (
            <Spinner
              animation="border"
              variant="danger"
              className="mx-auto "
            ></Spinner>
          ) : (
            songs.slice(0, 4).map((song) => {
              return <SelectedSong canzone={song} key={song.id}></SelectedSong>;
            })
          )}
        </div>
      </Row>
    </Container>
  );
};
export default MainSection;
