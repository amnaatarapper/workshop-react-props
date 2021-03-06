import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";

export default function Header({ title, players }) {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  title: "scorboard",
};
