import Page from "./page.js";

class LoginPage extends Page {
  constructor() {
    super();
  }

  public get inputUsername() {
    return this.locate.elementByDataTest("username");
  }

  public get inputPassword() {
    return this.locate.elementByDataTest("password");
  }

  public get btnSubmit() {
    return this.locate.elementByType("submit");
  }

  public get invalidLoginMessage() {
    return this.locate.elementByDataTest("error");
  }

  public async login(username: string, password: string) {
    await this.command.setValue(this.inputUsername, username);
    await this.command.setValue(this.inputPassword, password);
    await this.command.click(this.btnSubmit);
  }

  public navigateTo() {
    return this.open("/");
  }
}

export default new LoginPage();
