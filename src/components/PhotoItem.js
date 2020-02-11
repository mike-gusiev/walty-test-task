import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ProductItem = ({ photo }) => {
  return (
    <Card>
      <Card.Img variant="top" src={photo.previewURL} />
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
