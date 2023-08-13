import MockAdapter from "axios-mock-adapter";

import api from "@/axios";
import { AuthService } from "@/services/auth";

describe("AuthService", () => {
  let mock: MockAdapter;
  let postMock: jest.Mock;

  beforeEach(() => {
    mock = new MockAdapter(api);
    postMock = jest.fn();
    api.post = postMock;
  });

  afterEach(() => {
    mock.reset();
  });

  describe("login", () => {
    const data = { email: "user@example.com", password: "password" };

    it("should call axios.post with the correct arguments", () => {
      AuthService.login(data);
      expect(api.post).toHaveBeenCalledWith("/auth/login", data);
    });
  });

  describe("register", () => {
    const data = {
      name: "John Doe",
      email: "user@example.com",
      password: "password",
      dob: "13/12/2001",
      gender: "Male",
      confirmPassword: "password",
    };

    it("should call axios.post with the correct arguments", () => {
      AuthService.register(data);
      expect(api.post).toHaveBeenCalledWith("/auth/register", data);
    });
  });
});
