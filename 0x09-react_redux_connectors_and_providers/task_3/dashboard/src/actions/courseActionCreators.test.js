import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("courseActionCreators", function() {
  it("should return correct action for selectCourse", function() {
    const result = selectCourse(1);
    expect(result).toEqual({ type: "SELECT_COURSE", index: 1 });
  });

  it("should return correct action for unSelectCourse", function() {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: "UNSELECT_COURSE", index: 1 });
  });
})
