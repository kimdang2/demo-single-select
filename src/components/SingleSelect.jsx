import React, { useEffect, useState, useRef } from "react";
import options from '../data/data'

const SingleSelect = () => {
  const [showDisplay, setDisplay] = useState(false);
  const [search, setSearch] = useState("");


  // Display select value from given list of options
  const setOptions = item => {
    setSearch(item);
    setDisplay(false);
  }

  const clearMarkIcon = (<svg onClick={() => setSearch('')} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'transparent'}}><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>);

  const darkMarkIcon = (<svg onClick={() => setSearch('')} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(173, 170, 170, 1)'}}><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>);

  const arrowIcon = (<svg onClick={() => {setDisplay(!showDisplay);}} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(173, 170, 170, 1)'}}><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>);

  return (
    <div className="single-select">
      <div>
        <div className="dropdown-container">
          <input
          className="dropdown-input"
          placeholder="Select..."
          onClick={() => {setDisplay(!showDisplay);}}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
          <div className="icon-selectors">
            {search.length ? darkMarkIcon : clearMarkIcon}
            <span className="vertical-line-seperator"></span>
            {arrowIcon}
          </div>
        </div>

        {showDisplay &&
        <div className="dropdown-menu">
          {options
            .filter(value => ( (value.toLowerCase()).indexOf(search.toLowerCase()) !== -1))
            .map((item, i) => {
            return (
              <div className="dropdown-value" key={i} onClick={() => setOptions(item)}>
              <span>{item}</span>
            </div>
            );
            })
          }
        </div>}
      </div>
    </div>
  );
};


export default SingleSelect;