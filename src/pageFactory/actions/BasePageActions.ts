import { Locator, Page } from "@playwright/test";

export class BasePageActions {
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async enter_input(locator:Locator,input:string){
        await locator.fill(input);
    }
    async click(locator:Locator){
        await locator.click();
    }
    async selectdropdown(locator:Locator,option:string){
        await locator.selectOption(option);
    }
    async check(locator:Locator){
        await locator.check();
    }
}
    
    