//Ho tentato di fare il progetto con componenti a funzione ma per qualche motivo
// non mi riusciva facendo in questo modo.

// import { Component } from 'react';
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// // import SidebarComponent from "./SidebarComponent";
// import { useState, useEffect } from "react";

// const CentralSection = () => {
//   // state = {
//   //     songs: [],
//   // }

//   const [songs, setSongs] = useState([]);

//   const arrayOfSongs = [];

//   const fetch = async () => {
//     try {
//       const response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
//       );
//       if (response.ok) {
//         const arrayOfSongs = await response.json();
//         console.log(arrayOfSongs.data);
//         // setto il nuovo stato del mio array
//         setSongs(arrayOfSongs.data);
//       } else {
//         throw new Error("errore nel recupero dei dati");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   componentDidMount() {

//   //     this.fetchSongs()
//   //   }

//   useEffect(() => {
//     fetch();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Container fluid>
//       <Row>
//         {/* <SidebarComponent /> */}
//         <Col className="d-flex flex-row justify-content-evenly linear-gradient(180deg, rgba($blue), rgba($gray-600));">
//           {arrayOfSongs.data.slice(0, 4).map((song) => {
//             console.log("Song2:", song);
//             return (
//               <Col md={2} lg={2} key={song.id}>
//                 <div>
//                   <img
//                     src={song.album.cover}
//                     alt="Cover"
//                     width={150}
//                     height={150}
//                   />
//                   <p>Titolo Album: {song.album.title}</p>
//                   <p>Titolo Canzone: {song.title} </p>
//                 </div>
//               </Col>
//             );
//           })}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CentralSection;
