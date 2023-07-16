import { test, expect } from "@playwright/test";

test('по адресу /about открывается страница "о проекте"', async ({ page }) => {
    await page.goto("/about");

    await expect(page.getByTestId("page-title")).toHaveText("About");
});

test("если добавить элемент, он появляется в списке", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("input-add").type("Сделать домашку");
});
