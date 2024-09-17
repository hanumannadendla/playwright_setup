import {Page, test as basetest} from '@playwright/test';
import { WelcomePageActions } from '../pageFactory/actions/WelcomePageActions';

const test  = basetest.extend<{
    welcomePageActions:WelcomePageActions;
}>({
    welcomePageActions: async({page},use)=>{
        await use(new WelcomePageActions(page));
    }
});
test.beforeAll('executing befre all', ({})=>{
    console.log("executing before all condition");
});
test.afterAll('executing after all', ({})=>{
    console.log("executing after all condition");
});


export default test;

// async function createPage() {
//     return await browser.newContext().newPage();
// }
