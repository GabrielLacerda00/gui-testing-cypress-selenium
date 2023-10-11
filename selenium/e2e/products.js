const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('products', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    driver.manage().deleteAllCookies();
    await driver.get('http://localhost:9990/admin');
    // await driver.get('http://150.165.75.99:9990/admin');
    await driver.findElement(By.id('_username')).sendKeys('sylius');
    await driver.findElement(By.id('_password')).sendKeys('sylius');
    await driver.findElement(By.css('.primary')).click();
    // await driver.sleep(1000);
  });

  // Remove .only and implement others test cases!
  it.only('details is listing all variants', async () => {
    // Click in products in side menu
    await driver.findElement(By.css('a[href="/admin/products/"]')).click();

    // Type in value input to search for specify product
    await driver.findElement(By.id('criteria_search_value')).sendKeys('000F office grey jeans');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in details of the remain product
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[0].click();

    // Assert that details page is listing all variants
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('000F_office_grey_jeans-variant-0'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-1'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-2'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-3'));
    assert(bodyText.includes('000F_office_grey_jeans-variant-4'));
  });

 //IMPLEMENTE EXERC
 it('Teste01', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 834 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.css(".item:nth-child(1) .bulk-select-checkbox")).click()
    await driver.findElement(By.linkText("Edit")).click()
    await driver.executeScript("window.scrollTo(0,418)")
    await driver.findElement(By.css("div:nth-child(2) > .title > .dropdown")).click()
    await driver.findElement(By.css("div:nth-child(3) > .title > .dropdown")).click()
    await driver.findElement(By.css("div:nth-child(3) > .title")).click()
    await driver.findElement(By.css("div:nth-child(1) > .title > .dropdown")).click()
    await driver.findElement(By.css(".active > .dropdown")).click()
    await driver.findElement(By.css("div:nth-child(7) > .title > .dropdown")).click()
    await driver.findElement(By.css(".active > .dropdown")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('Teste02', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 834 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.css(".item:nth-child(2) form > .ui > .icon")).click()
    await driver.findElement(By.css(".cancel")).click()
    await driver.findElement(By.css(".item:nth-child(3) .ui > .ui:nth-child(2)")).click()
    await driver.executeScript("window.scrollTo(0,177)")
    await driver.findElement(By.id("sylius_product_variantSelectionMethod")).click()
    await driver.findElement(By.css(".segment > .field:nth-child(3)")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_product_channels")).click()
    await driver.findElement(By.css(".field:nth-child(1) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('Update Product03', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 834 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.css(".item:nth-child(2) .ui > .ui:nth-child(2)")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.linkText("Cancel")).click()
    await driver.findElement(By.css(".item:nth-child(3) .ui > .ui:nth-child(2)")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.css(".field:nth-child(1) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryCaps01', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Simple")).click()
    await driver.findElement(By.linkText("Edit")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryCaps02', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Simple")).click()
    await driver.findElement(By.linkText("Edit")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    await driver.executeScript("window.scrollTo(0,2123.5)")
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryCaps03', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Simple")).click()
    await driver.findElement(By.css(".item:nth-child(2) .pencil")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    await driver.executeScript("window.scrollTo(0,1881)")
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryCaps04', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Simple")).click()
    await driver.findElement(By.css(".item:nth-child(2) .pencil")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryPompoms01', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("With pompons")).click()
    await driver.findElement(By.linkText("Edit")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('TesteCategoryPompoms02', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("With pompons")).click()
    await driver.findElement(By.css(".item:nth-child(1) .pencil")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

  it('UpdateProductCategoryWomen03', async function() {
    assert.equal("Product has been successfully updated.")
  })

  it('UpdateProductCategoryWomen02', async function() {
    await driver.get("http://localhost:9990/admin/")
    await driver.manage().window().setRect({ width: 1470, height: 834 })
    await driver.findElement(By.linkText("Products")).click()
    await driver.findElement(By.linkText("Women")).click()
    await driver.findElement(By.css(".item:nth-child(2) .pencil")).click()
    await driver.findElement(By.id("sylius_product_variantSelectionMethod")).click()
    await driver.findElement(By.css(".field:nth-child(2) > .ui > label")).click()
    await driver.findElement(By.id("sylius_save_changes_button")).click()
    assert.equal("Product has been successfully updated.")
  })

});