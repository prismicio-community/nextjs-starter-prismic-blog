import React, { Component } from "react";
import styled from "styled-components";
import { SidebarItem } from "./sidebarSharedStyles";
import { AlignRight } from "../../../styles/sharedStyles";
import { useRouter } from "next/router";

const FormControl = styled.input`
  border-radius: 0;
  border: 1px solid #e0e0e0;
  box-shadow: none;
  height: 45px;
  ${AlignRight};

  &:focus,
  &:hover {
    border: 1px solid #eeeeee;
    box-shadow: none;
  }
`;

const InputButton = styled.button`
  background-color: #d6b161;
  border: 1px solid #d6b161;
  color: #ffffff;
  height: 45px;
  width: 45px;
  box-shadow: none;
  border-radius: 0;
  &:hover {
    background-color: #d6b161;
    border: 1px solid #d6b161;
  }
`;

const SideBarSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { push } = useRouter();

  const onClick = () => {
    console.log("clicked");
  };

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <SidebarItem>
      <div className="input-group">
        <span className="input-group-btn">
          <InputButton
            className="btn btn-primary"
            type="button"
            onClick={onClick}
          >
            <span className="glyphicon glyphicon-search" />
          </InputButton>
        </span>
        <FormControl
          className="form-control"
          type="text"
          placeholder="חיפוש"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </SidebarItem>
  );
};

export default SideBarSearch;
