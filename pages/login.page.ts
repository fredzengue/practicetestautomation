import { expect, type Locator, type Page } from '@playwright/test';
import { link } from 'fs';

export default class LoginPage {
    readonly page : Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly submitButon : Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByLabel("Username");
        this.passwordInput = page.getByLabel("Password");
        this.submitButon = page.getByRole("button");
    }

    async goto(link:string){
        await this.page.goto(link)
        
    }

    async saisirPassword(password: string){
        await this.passwordInput.fill(password)
    }

    async saisirUsername(username: string){
        await this.usernameInput.fill(username)
    }

    async clickSubmitButton(){
        await this.submitButon.click()
    }
}