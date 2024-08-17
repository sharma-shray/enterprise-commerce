import { expect, test } from "@playwright/test"

test('should check the existence of breadcrumb elements', async ({ page }) => {
    await page.goto('http://localhost:3000/category/beauty');
  
    const breadcrumbNav = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumbNav).toBeVisible();
  
    // Locate the ordered list within the breadcrumb
    const breadcrumbList = breadcrumbNav.locator('ol.no-scrollbar.flex.items-center.gap-1\\.5.overflow-x-scroll.whitespace-nowrap.text-xs.md\\:text-base\\/\\[18px\\]');
    await expect(breadcrumbList).toBeVisible();
  
    //  "Home" 
    const homeLink = breadcrumbList.locator('li a[href="/"]');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveText('Home');
  
    // separator SVG exists and is visible
    const separatorSVG = breadcrumbList.locator('li svg.-rotate-90');
    await expect(separatorSVG).toBeVisible();
  
    // "Beauty" 
    const beautyLink = breadcrumbList.locator('li a[href="/category/beauty"].font-medium.underline');
    await expect(beautyLink).toBeVisible();
    await expect(beautyLink).toHaveText('Beauty');

    const locator = page.locator('h1.mt-4.text-3xl.font-extrabold.tracking-tight.text-gray-900.sm\\:text-4xl');
    await expect(locator).toHaveText('Beauty');
  });
  

  test('Check existence of div element with class and text', async ({ page }) => {
    await page.goto('http://localhost:3000/category/beauty');
  
    // Check if the div element with the specified class and text is present
    const locator = page.locator('div.mt-2.text-lg.text-gray-500.transition-all');
    await expect(locator).toHaveText(
      'The beauty category in our store is an expansive and carefully selected collection that caters to your every beauty need, embracing all aspects of skincare, makeup, haircare, and fragrance. This selection is crafted to inspire and empower, featuring the latest innovations and timeless essentials from leading brands and niche labels alike. Dive into our skincare range to find solutions for every sk...'
    );
  });


test('Check elements in header section', async ({ page }) => {
  await page.goto('http://localhost:3000/category/beauty');

  //  '24 results found' text
  const resultsText = page.locator('div.flex.items-center.justify-between.pb-8 > div:nth-child(2) > span');
  await expect(resultsText).toBeVisible();
  await expect(resultsText).toHaveText(/24 results found/);

  //  'Sort by: Relevancy' dropdown
  const sortByDropdown = page.locator('div.flex.items-center.justify-between.pb-8 > div.hidden.lg\\:block div.cursor-pointer');
  await expect(sortByDropdown).toBeVisible();
  await expect(sortByDropdown).toHaveText(/Sort by: Relevancy/);

  // dropdown icon is present
  const dropdownIcon = page.locator('div.flex.items-center.justify-between.pb-8 > div.hidden.lg\\:block svg');
  await expect(dropdownIcon).toBeVisible();
});


test('check elements exist by text', async ({ page }) => {
  await page.goto('http://localhost:3000/category/beauty');

  // Check for "Sort by: Relevancy"
  const sortByRelevancy = page.getByText('Sort by: Relevancy').first();
  await expect(sortByRelevancy).toBeVisible();

  // Check for "No categories found"
  const noCategoriesFound = page.locator('text=No categories found');
  await expect(noCategoriesFound).toBeVisible();

  // Check for "Vendors"
  const vendors = page.locator('text=Vendors');
  await expect(vendors).toBeVisible();

  // Check for "Colors"
  const colors = page.locator('text=Colors');
  await expect(colors).toBeVisible();

  // Check for "Rating"
  const rating = page.locator('text=Rating');
  await expect(rating).toBeVisible();

  // Check for "Price Range"
  const priceRange = page.locator('text=Price Range');
  await expect(priceRange).toBeVisible();

  const searchInput = page.getByRole('searchbox', { name: 'Search...' });
  await expect(searchInput).toBeVisible();
});

test('check container visibility', async ({ page }) => {
await page.goto('http://localhost:3000/category/beauty');

  // Locate the container element
  const container = page.locator('.flex > div:nth-child(2) > .grid > div').first();

  await expect(container).toBeVisible();
});
