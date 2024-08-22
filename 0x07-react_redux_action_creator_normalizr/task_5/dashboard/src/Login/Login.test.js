import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});

describe("Login", () => {
  it("should be disabled by default", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("button").prop("disabled")).toEqual(true);
  });

  it("should be enabled when email and password are entered", () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find("#email")
      .simulate("change", { target: { name: "email", value: "aieu" } });

    wrapper
      .find("#password")
      .simulate("change", { target: { name: "password", value: "aieu" } });

    expect(wrapper.find("button").prop("disabled")).toEqual(false);
  });
});

