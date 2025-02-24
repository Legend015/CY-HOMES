import "./Searchbr.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Searchbr = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("All prices");

  const data = [
    { title: "Item 1", category: "Category 1" },
    { title: "Item 2", category: "max 1.5k" },
    { title: "Item 3", category: "max 2k" },
    { title: "Item 4", category: "max 3k" },
    { title: "Item 5", category: "max 4k" },
    { title: "Item 6", category: "max 5k" },
    { title: "Item 7", category: "above 5k" },
  ];

  const handleSearch = () => {
    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (filter === "All" || item.category === filter)
    );
    console.log("Filtered Results:", filteredData);
  };

  return (
    <div className="home-container">
      {/* Wrapper for Search Bar with Background Video */}
      <div className="search-wrapper">
        {/* Video Background (Only for Search Section) */}
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/videos/background.webm" type="video/webm" />
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Search Bar */}
        <div className="search-container">
          <InputGroup className="mb-3">
            <Button
              variant="secondary"
              onClick={handleSearch}
              className="rounded-start"
            >
              <img src="./src/assets/211885_search_icon.png" height="30px"alt="searchbtn" />
            </Button>
            <FormControl
              placeholder="Search by city..."
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <DropdownButton
              variant="outline-secondary"
              title={filter}
              id="filter-dropdown"
              align="end"
              onSelect={(eventKey) => setFilter(eventKey)}
            >
              <Dropdown.Item eventKey="All">All prices</Dropdown.Item>
              <Dropdown.Item eventKey="max 1.5k">max 1.5k</Dropdown.Item>
              <Dropdown.Item eventKey="max 2k">max 2k</Dropdown.Item>
              <Dropdown.Item eventKey="max 3k">max 3k</Dropdown.Item>
              <Dropdown.Item eventKey="max 4k">max 4k</Dropdown.Item>
              <Dropdown.Item eventKey="max 5k">max 5k</Dropdown.Item>
              <Dropdown.Item eventKey="above 5k">above 5k</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Searchbr;
