import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";

function SearchHistory({ lastSearches }) {
  return (
    <>
      {!lastSearches.length && <p>No search history yet</p>}
      {lastSearches.length > 0 && (
        <>
          <p>Search history:</p>
          {lastSearches.map((search, i) => (
            <Card className="mt-2" body key={i}>
              {search.map((tag, index) => (
                <Badge variant="primary" className="mr-2" key={index}>
                  {tag}
                </Badge>
              ))}
            </Card>
          ))}
        </>
      )}
    </>
  );
}

SearchHistory.propTypes = {
  lastSearches: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  lastSearches: state.photosReducer.lastSearches
});

export default connect(mapStateToProps, null)(SearchHistory);
