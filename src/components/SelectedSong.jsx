/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  addToPlayer,
  removeFromFavourites,
} from "../redux/actions";
import { useState } from "react";
import Col from "react-bootstrap/Col";

const selectedSong = (props) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <Col className="col text-center" key={props.song.id}>
      <img
        className="img-fluid"
        src={props.song.album.cover_medium}
        alt="track"
        onClick={() => dispatch(addToPlayer(props.song))}
      />
      <p>
        Track: "{props.song.title}" Artist:{props.song.artist.name}
      </p>
      <i
        className="bi bi-heart fw-semibold"
        style={selected ? { color: "yellow" } : { color: "white" }}
        onClick={() => {
          setSelected(!selected);

          selected === false
            ? dispatch(addToFavourites(props.song))
            : dispatch(removeFromFavourites(props.song));
        }}
      ></i>
    </Col>
  );
};
export default selectedSong;
