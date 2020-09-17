import React, { useState } from "react";
import {connect} from "react-redux";
import {chouseFilter} from "../../actions"

import "./sort.css"

const Sort = ({filterBy,chouseFilter}) => {

  
  function transformSort(sortName){
    let title = "";

      if (sortName === "rate"){
        title = "популярности"
      }
      if (sortName === "name"){
        title = "алфавиту"
      }
      if (sortName === "price"){
        title = "цене"
      }
    return title
  }

  const [activeChoose,setChoose] = useState(false);

  const statusIcon = () => {
    if (activeChoose){
      return(
        <svg
        className="rotate"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
        // <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        //  <path d="M-0.000366211 0.625C-0.000366211 0.455729 0.0614824 0.309245 0.185181 0.185547C0.308879 0.0618491 0.455363 0 0.624634 0L9.37463 0C9.5439 0 9.69039 0.0618491 9.81409 0.185547C9.93778 0.309245 9.99963 0.455729 9.99963 0.625C9.99963 0.794271 9.93778 0.940755 9.81409 1.06445L5.43909 5.43945C5.31539 5.56315 5.1689 5.625 4.99963 5.625C4.83036 5.625 4.68388 5.56315 4.56018 5.43945L0.185181 1.06445C0.0614824 0.940755 -0.000366211 0.794271 -0.000366211 0.625Z" fill="#2C2C2C"/>
        // </svg>
      )
    }

    return (
      <svg
      className="no-rotate"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
        fill="#2C2C2C"
      />
    </svg>
    )
  }

  const sortPopup = () => {
    const sortType = ["rate","name","price"];

    if (activeChoose){
      return (
        <div className="sort__popup">
                <ul>
                  {sortType.map(sortName => {
                    return <li onClick={() => {
                      chouseFilter(sortName)
                      setChoose(false)
                    }} key={sortName}>{transformSort(sortName)}</li>
                  })}
                </ul>
              </div>
      )
    }

    
  }
    return (
        <div className="sort">
              <div className="sort__label" style={{cursor:"pointer"}} onClick={() => setChoose(!activeChoose)}>
                {statusIcon()}
                <b>Сортировка по:</b>
                <span>{transformSort(filterBy)}</span>
              </div>
              {sortPopup()}
            </div>
    )
}

const mapStateToProps = (state) => {
  return {
    filterBy : state.sortedBy
  }
}

const mapDispathToProps = {
  chouseFilter,
}

export default connect(mapStateToProps,mapDispathToProps)(Sort)