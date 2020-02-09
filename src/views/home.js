import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGenres, getGenreArtists } from "../redux/actions/genresActions";
import { loginStatus, login, logout } from "../redux/actions/authActions";
import SongCard from "../components/songCard";
import Loading from "../components/spinner";
import styled from "styled-components";
import { Route } from "react-router-dom";
import ArtistModal from "./artistsModal";
import Pagination from "../components/pagination";
import { AuthBtn } from "../themes/authControlles";

const Container = styled.div`
  background-color: #343434;
  padding: 15px;
`;

const Home = props => {
  //pagination handlers
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  useEffect(() => {
    initHome();
  }, []);

  //home intiation
  const initHome = async () => {
    await props.getGenres();
    props.loginStatus();
  };
  //pagination handlers
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = props.genres.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = numberOfPage => {
    setCurrentPage(numberOfPage);
  };

  //result is the music genres or loading
  let result = (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="row justify-content-center"
    >
      <Loading></Loading>
    </div>
  );
  //modal controles
  const activateModal = async id => {
    await props.getGenreArtists(id);
    props.history.push(`/${id}`);
  };

  if (props.genres && props.genres.length > 0) {
    result = currentPosts.map(g => (
      <SongCard
        key={g.id}
        src={g.picture}
        name={g.name}
        clicked={() => activateModal(g.id)}
      ></SongCard>
    ));
  }

  return (
    <Container>
      <Route path="/:id" component={ArtistModal}></Route>
      <div className="row justify-content-center">
        <div style={{padding:'2rem 5rem'}} className="row justify-content-end w-100 align-items-baseline">
          {props.isLoggedIn ? (
            <>
              <h5 style={{color:'#fff'}}>Hello {props.username}</h5>
              <AuthBtn onClick={props.logout} className="col-1">Logout </AuthBtn>
            </>
          ) : (
            <AuthBtn onClick={props.login} className="col-1">Login</AuthBtn>
          )}
        </div>
        {result}
      </div>
      <Pagination
        total={props.genres.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getGenres: () => dispatch(getGenres()),
    getGenreArtists: id => dispatch(getGenreArtists(id)),
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    loginStatus: () => dispatch(loginStatus())
  };
};
const mapStateToProps = state => {
  return {
    genres: state.genres,
    isLoggedIn: state.isLoggedIn,
    username: state.username
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
