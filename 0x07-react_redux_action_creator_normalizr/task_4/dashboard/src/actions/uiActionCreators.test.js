import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer
} from "./uiActionCreators";


describe("uiActionCreators", () => {
  it("should return correct action for login", () => {
    const result = login("Sne", "password");
    expect(result).toEqual({ type: "LOGIN", user: { email: "Sne", password: "password" } });
  })

  it("should return correct action for logout", () => {
    const result = logout();
    expect(result).toEqual({ type: "LOGOUT" });
  })

  it("should return correct action for displayNotificationDrawer", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: "DISPLAY_NOTIFICATION_DRAWER" });
  })

  it("should return correct action for hideNotificationDrawer", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: "HIDE_NOTIFICATION_DRAWER" });
  })
})
