/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { AlignRight, FormInput, FormTextArea } from '../../../styles/sharedStyles';

const LeaveCommentArea = styled.div`
  margin-top: 48px;
  border-bottom: 0;
  ${AlignRight}
`;
const FormBorder = styled.form`
  padding: 20px 0;
  border-top: 1px solid #eeeeee;
`;
const LeaveCommentHeader = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 20px;
`;
const SubmitButton = styled.button`
  &&{
    background-color: #d6b161;
    color: #ffffff;
    font-family: 'Open Sans Hebrew', sans-serif;
    font-weight: 400;
    font-size: 10px;
    border: 1px solid #eeeeee;
    text-transform: uppercase;
    letter-spacing: 1pt;
    padding: 14px 0;
    width: 140px;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }
`;

class PostLeaveComment extends Component {
  state = {
    email: '',
    name: '',
    text: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, name, text } = this.state;
      const { parent, post, onClose } = this.props;
      await axios.post('/api/comments/addComment', {
        email,
        name,
        text,
        parent,
        post,
      });
      if (onClose) onClose(true);
      this.setState({
        email: '',
        name: '',
        text: '',
      });
    } catch (error) {
      console.log(`Error in adding comment: ${error}`);
    }
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { header } = this.props;
    const { name, email, text } = this.state;
    return (
      <LeaveCommentArea className="leave-comment-area">
        <LeaveCommentHeader>{header}</LeaveCommentHeader>
        <FormBorder onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <FormInput
                      type="email"
                      name="email"
                      value={email}
                      tabIndex={2}
                      required
                      className="form-control form-input"
                      placeholder="אימייל"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <FormInput
                      type="text"
                      name="name"
                      value={name}
                      required
                      tabIndex={1}
                      className="form-control form-input"
                      placeholder="שם"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <FormTextArea
                className="form-control textarea"
                name="text"
                value={text}
                tabIndex={3}
                required
                placeholder="התגובה שלך"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-sm-12">
              <SubmitButton
                className="btn btn-secondary btn-lg btn-block button"
                type="submit"
              >
                הגב
              </SubmitButton>
            </div>
          </div>
        </FormBorder>
      </LeaveCommentArea>
    );
  }
}

PostLeaveComment.propTypes = {
  header: PropTypes.string,
  parent: PropTypes.string,
  post: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

PostLeaveComment.defaultProps = {
  header: 'השאירו תגובה',
  parent: 'top',
  onClose: null,
};

export default PostLeaveComment;
