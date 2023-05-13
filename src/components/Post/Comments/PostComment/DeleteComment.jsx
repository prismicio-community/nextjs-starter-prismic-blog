import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteLink = styled.a`
  margin-right: 20px;
  cursor: pointer;
`;

class DeleteComment extends Component {
  state = {
    showModal: false,
  };

  handleClose = () => this.setState({ showModal: false });

  onDeleteClick = () => this.setState({ showModal: true });

  deleteComment = async () => {
    const { id } = this.props;
    try {
      await axios.delete(`/api/comments/${id}`);
    } catch (e) {
      console.log(`something went wrong with comment delete (${id}): ${e}`);
    }
    this.handleClose();
  };

  render() {
    const { isAdmin } = this.props;
    const { showModal } = this.state;
    return (
      isAdmin && (
        <>
          <DeleteLink onClick={this.onDeleteClick}>
            <i className="fa fa-trash-alt" aria-hidden="true" />
          </DeleteLink>
          <Modal id="delete-comment-modal" show={showModal} onHide={this.handleClose}>
            <Modal.Body>
              <p>Are You sure??</p>
              <button type="button" className="btn btn-secondary" onClick={this.handleClose}>No</button>
              <button type="button" className="btn btn-primary" onClick={this.deleteComment}>Yes</button>
            </Modal.Body>
          </Modal>
        </>
      )
    );
  }
}

export default DeleteComment;

DeleteComment.propTypes = {
  id: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

DeleteComment.defaultProps = {
  isAdmin: false,
};
