import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import queryString from 'query-string';
import Index from './PostComment';
import PostLeaveComment from './PostLeaveComment';

const CommentsArea = styled.div`
  margin-top: 48px;
  border-bottom: 0;
`;

const CommentsHeader = styled.h2`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 20px;
`;

class PostComments extends Component {
  state = {
    comments: [],
    showModal: false,
    header: null,
    parent: '',
  };

  async componentDidMount() {
    await this.loadData();
  }

  handleShow = (header, parent) => {
    this.setState({
      showModal: true,
      header,
      parent,
    });
  };

  handleClose = async () => {
    this.setState({ showModal: false });
    await this.loadData();
  };

  async loadData() {
    const { postId } = this.props;
    const query = queryString.parse(window.location.search);
    const commentsReq = await axios.get(`/api/comments/${postId}`, {
      params: query,
    });
    this.setState({
      comments: commentsReq.data,
    });
  }

  render() {
    const {
      comments, showModal, header, parent,
    } = this.state;
    const { postId, isAdmin } = this.props;
    return (
      <>
        { comments.length > 0
        && (
        <CommentsArea
          className="post-comments"
        >
          <CommentsHeader>תגובות</CommentsHeader>
          <ul className="media-list">
            {comments.map(({
              depth, comment: {
                _id, date, text, name,
              },
            }, i) => (
              <Index
                key={i}
                id={_id}
                depth={depth}
                date={date}
                text={text}
                name={name}
                onClick={this.handleShow}
                isAdmin={isAdmin}
              />
            ))}
          </ul>
          <PostLeaveComment
            header="השאירו תגובה"
            parent="top"
            post={postId}
            onClose={this.handleClose}
          />
          <Modal id="comments-modal" show={showModal} onHide={this.handleClose}>
            <Modal.Body>
              <PostLeaveComment
                header={header}
                parent={parent}
                post={postId}
                onClose={this.handleClose}
              />
            </Modal.Body>
          </Modal>
        </CommentsArea>
        )
        }
      </>
    );
  }
}

PostComments.propTypes = {
  postId: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default PostComments;
