import React from "react";

import { IInputProps } from "types";
import classes from "./SearchBox.module.scss";
import { ReactComponent as SearchIcon } from "assets/icons/search-gray.svg";

const SearchBox = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    return (
      <header className={classes.SearchWrapper}>
        <SearchIcon />
        <input ref={ref} type="text" {...props} />
      </header>
    );
  }
);

export default SearchBox;
