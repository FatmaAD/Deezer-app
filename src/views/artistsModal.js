import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getGenreArtists } from "../redux/actions/genresActions";
import { dissmissModal } from "../redux/actions/modalActions";
import Modal from "../components/modal";
import SongCard from "../components/songCard";
import Pagination from "../components/pagination";

const ArtistModal = props => {
  //pagination handlers
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    // check as if a deep link
    if (!props.artists || props.artists.length <= 0) {
      let genreId = props.location.pathname.split("/");
      props.getGenreArtists(genreId[1]);
    }
  });

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = props.artists.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = numberOfPage => {
    setCurrentPage(numberOfPage);
  };
  //modal dissmiss
  const dismissModal = e => {
    // e.stopPropagation();
    props.dissmissModal();
  };

  //children is the modal content
  let children;
  if (props.isModalOpen) {
    let cards = currentPosts.map(a => (
      <SongCard
        key={a.id}
        src={a.picture}
        name={a.name}
        // clicked={}
      ></SongCard>
    ));
    children = (
      <>
        {cards};
        <Pagination
          total={props.artists.length}
          postPerPage={postPerPage}
          paginate={paginate}
        />
      </>
    );
  }
  return (
    <Modal
      visible={props.isModalOpen}
      children={children}
      dismiss={dismissModal}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dissmissModal: () => dispatch(dissmissModal()),
    getGenreArtists: id => dispatch(getGenreArtists(id))
  };
};
const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen,
    artists: state.artists
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistModal);
