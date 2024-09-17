import { Locator, Page } from "@playwright/test";

export class BasePage{
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    input_by_using_placeholder =(placeholder: string)=> this.page.getByPlaceholder(placeholder, { exact: true });
    textarea_input =()=>this.page.locator("//label[text()='Address']/following-sibling::div/textarea");
    gender_radio =()=> this.page.locator('input[name="radiooptions"][value="Male"]');
    hobbiles_checkbox =(hobbie:string)=>this.page.locator('[value="'+hobbie+'"]');
    skills_dropdown =()=>this.page.locator("select#Skills");
}
    
    