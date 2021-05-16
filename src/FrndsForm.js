import React from "react";
import "./App.css";

const FrndsForm = ({
  searchList,
  setSearchList,
  addFrnd,
  value,
  setValue,
  frndList,
  highlight,
  handleSuggClick,
  setCurrentPage
}) => {
//   console.log(value.length && "ss");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    let x = false;
    highlight(value);
    frndList.map((frnd, ind) => {
      if (frnd.name == value) {
        x = true;
      }
    });
    if (!x) {
    addFrnd(value);
    setValue("");
    let lastIndex = Math.ceil(frndList.length / 4);
      let currentIndex = frndList.length % 4;
      if (currentIndex < 4 && currentIndex != 0) {
        setCurrentPage(lastIndex);
      } else {
        setCurrentPage(lastIndex + 1);
      }
    }
    setSearchList([]);
  };

  const handleChange = event => {
    setValue(event.target.value);
    if (event.target.value) {
      let x = frndList.filter(frnd =>
        frnd.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchList(x);
      if (!x.length) {
        setSearchList(["no name found"]);
      }
    } else {
      setSearchList([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => handleChange(event)}
        placeholder=" Enter your friend's name"
        style={{ width: "100%", height: "50px" }}
        pattern="^[a-zA-Z0-9]+$"
        required
      />
      {value?.length > 0
        ? searchList.length
          ? searchList.map(frnd =>
              frnd.name ? (
                <p class="suggestions" onClick={() => handleSuggClick(frnd)}>
                  {frnd.name}
                </p>
              ) : (
                <p>{frnd}</p>
              )
            )
          : ""
        : ""}
    </form>
  );
};
export default FrndsForm;
