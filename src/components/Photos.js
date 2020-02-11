import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardColumns } from "react-bootstrap";

import PhotoItem from "./PhotoItem";
import Spinner from "./Spinner";

function Photos(props) {
  const { photos, loading } = props;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {photos.length ? (
        <CardColumns className="mb-3">
          {photos.map(photo => {
            return <PhotoItem key={photo.id} photo={photo} />;
          })}
        </CardColumns>
      ) : (
        <span>No photos for your search request</span>
      )}
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    photos: state.photosReducer.photos,
    loading: state.photosReducer.loading
  };
};

export default connect(mapStateToProps, null)(Photos);
