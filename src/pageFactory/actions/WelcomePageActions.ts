import { Locator, Page } from "@playwright/test";
import { BasePageActions } from "./BasePageActions";
import { WelcomePage } from "../locators/welcomePage";

export class WelcomePageActions extends BasePageActions{
    readonly page:Page;
    readonly welcomePage: WelcomePage;
    constructor(page:Page){
        super(page);
        this.page = page;
        this.welcomePage = new WelcomePage(page);
    }

    async fill_firstname(input:string){
        await this.enter_input(this.welcomePage.firstname_input(),input);
    }
    async fill_Lastname(input:string){
        await this.enter_input(this.welcomePage.lastname_input(),input);
    }
    async fill_address(input:string){
        await this.enter_input(this.welcomePage.address_textarea(),input);
    }
}
    
    