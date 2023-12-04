import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const SearchSection = () => {
  const { posts } = useContext(GlobalContext);

  return <div>SearchSection</div>;
};

export default SearchSection;
