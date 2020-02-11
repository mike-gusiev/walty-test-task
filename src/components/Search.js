import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import TagsInput from "react-tagsinput";
import { Button, Row } from "react-bootstrap";

import { fetchPhotosRequest } from "../store/photos/actions";

import "react-tagsinput/react-tagsinput.css";

function Search(props) {
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const handleChange = tags => {
    setTags(tags);
  };

  const handleSearch = () => {
    if (tags.length) {
      props.searchPhotos(tags);
      history.push("/photos");
    }
    return;
  };

  return (
    <div>
      <p>Hit enter to add tags, then search:</p>
      <TagsInput value={tags} onChange={handleChange} />
      <Row className="justify-content-md-center">
        <Button className="mt-2" size="lg" onClick={handleSearch}>
          Search
        </Button>
      </Row>
    </div>
  );
}

Search.propTypes = {
  searchPhotos: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  searchPhotos: tags => {
    dispatch(fetchPhotosRequest(tags));
  }
});

export default connect(null, mapDispatchToProps)(Search);
