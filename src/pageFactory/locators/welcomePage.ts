import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class WelcomePage extends BasePage{
    readonly page:Page;
    constructor(page:Page){
        super(page);
        this.page = page;
    }
    firstname_input =()=> this.input_by_using_placeholder('First Name');
    lastname_input = ()=> this.input_by_using_placeholder('Last Name');
    address_textarea =()=>this.page.locator("//label[text()='Address']/following-sibling::div/textarea");
    gender_radio =()=> this.page.locator('input[name="radiooptions"][value="Male"]');
    hobbiles_checkbox =(hobbie:string)=>this.page.locator('[value="'+hobbie+'"]');
    skills_dropdown =()=>this.page.locator("select#Skills");
}
    
    