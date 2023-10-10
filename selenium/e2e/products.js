const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('products', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
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

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});


/// NEW CASES - Gabriel lacerda
it('product name is correctly displayed', async () => {
  // Navigate, find and assert product name
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  const productName = await driver.findElement(By.css('.product-name-class')).getText();
  assert.strictEqual(productName, 'Expected Product Name');
});

it('product image is displayed', async () => {
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  const productImage = await driver.findElement(By.css('.product-image-class'));
  assert.ok(productImage);
});

it('editing a product variant', async () => {
  // Navigate, edit variant, save and then assert the change
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  await driver.findElement(By.css('.edit-variant-button')).click();
  await driver.findElement(By.id('variant-detail-input')).clear();
  await driver.findElement(By.id('variant-detail-input')).sendKeys('New Variant Detail');
  await driver.findElement(By.css('.save-variant-button')).click();
  const variantDetail = await driver.findElement(By.id('variant-detail-text')).getText();
  assert.strictEqual(variantDetail, 'New Variant Detail');
});

it('deleting a product variant', async () => {
  // Navigate, delete a variant and assert it no longer exists
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  await driver.findElement(By.css('.delete-variant-button')).click();
  const variantExist = await driver.findElements(By.css('.specific-variant-class'));
  assert.strictEqual(variantExist.length, 0);
});

it('add a new product', async () => {
  await driver.findElement(By.css('.add-product-button')).click();
  // Add the product details here
  await driver.findElement(By.css('.save-product-button')).click();
  const productName = await driver.findElement(By.css('.newly-added-product-name')).getText();
  assert.strictEqual(productName, 'New Product Name');
});

it('check pagination functionality', async () => {
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  const paginationButton = await driver.findElement(By.css('.pagination-button'));
  assert.ok(paginationButton);
  await paginationButton.click();
  const secondPageProduct = await driver.findElement(By.css('.second-page-product'));
  assert.ok(secondPageProduct);
});

it('filter products by name', async () => {
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  await driver.findElement(By.css('.product-filter-input')).sendKeys('Filtered Product Name');
  await driver.findElement(By.css('.filter-button')).click();
  const filteredProductName = await driver.findElement(By.css('.filtered-product-name')).getText();
  assert.strictEqual(filteredProductName, 'Filtered Product Name');
});

it('check product sorting', async () => {
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  await driver.findElement(By.css('.sort-button')).click();
  // Add assertions to check if products are sorted as expected
});

it('validate product details access', async () => {
  await driver.findElement(By.css('a[href="/admin/products/"]')).click();
  await driver.findElement(By.css('.product-detail-button')).click();
  const productDetail = await driver.findElement(By.css('.product-detail-class')).getText();
  assert.ok(productDetail);
});
