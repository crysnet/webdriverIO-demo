import Page from "./page.js";

class LoginPage extends Page {
  public get inputUsername() {
    return $('input[data-test="username"]');
  }

  public get inputPassword() {
    return $('input[data-test="password"]');
  }

  public get btnSubmit() {
    return $('input[type="submit"]');
  }

  public get invalidLoginMessage() {
    return $('[data-test="error"]');
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public open() {
    return super.open("/");
  }
}

export default new LoginPage();
