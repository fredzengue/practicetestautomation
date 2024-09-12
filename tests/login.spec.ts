import test, { expect } from "@playwright/test";

test.describe("login",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://practicetestautomation.com/practice-test-login/")
    })
    test.afterEach(()=>{
       console.info("### FIN DU SCENARIO ###")
    })
    
    test("login with username correct and password correct", {tag: "@regression"} , async ({ page }) => {
        await page.getByLabel("Username").fill("student")
        await page.getByLabel("Password").fill("Password123")
        await page.getByRole("button").click()
        await expect(page.getByRole("heading")).toContainText("Logged In Successfully")
    })
    test("login with username Icorrect and password correct", {tag: "@smoke"}, async ({ page }) => {
        await page.getByLabel("Username").fill("studentI")
        await page.getByLabel("Password").fill("Password123")
        await page.getByRole("button").click()
        await expect(page.locator("#error")).toContainText("Your username is invalid!")
    })

} )
