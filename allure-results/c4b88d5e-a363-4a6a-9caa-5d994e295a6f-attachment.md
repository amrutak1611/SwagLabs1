# Test info

- Name: Verify locked out user
- Location: C:\Users\Amruta\Desktop\SauceLabs\tests\WebCartApp.spec.js:49:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 169

- Array []
+ Array [
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
+     "help": "Page should contain a level-one heading",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/page-has-heading-one?application=playwright",
+     "id": "page-has-heading-one",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-heading-one",
+             "impact": "moderate",
+             "message": "Page must have a level-one heading",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Page must have a level-one heading",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"login_logo\">Swag Labs</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".login_logo",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"form_group\"><input class=\"input_error form_input\" placeholder=\"Username\" type=\"text\" data-test=\"username\" id=\"user-name\" name=\"user-name\" autocorrect=\"off\" autocapitalize=\"none\" value=\"\" style=\"\"></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".form_group:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"form_group\"><input class=\"input_error form_input\" placeholder=\"Password\" type=\"password\" data-test=\"password\" id=\"password\" name=\"password\" autocorrect=\"off\" autocapitalize=\"none\" value=\"\" style=\"\"></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".form_group:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"login_credentials_wrap\" data-test=\"login-credentials-container\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".login_credentials_wrap",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+     ],
+   },
+ ]
    at LoginPage.gotoLoginPage (C:\Users\Amruta\Desktop\SauceLabs\pages\login.js:20:39)
    at C:\Users\Amruta\Desktop\SauceLabs\tests\WebCartApp.spec.js:60:5
```

# Page snapshot

```yaml
- text: Swag Labs
- textbox "Username"
- textbox "Password"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 | import AxeBuilder from '@axe-core/playwright';
   3 | exports.LoginPage = class LoginPage {
   4 |
   5 |     constructor(page) {
   6 |         this.page = page;
   7 |         this.usernameField = page.getByPlaceholder('Username');
   8 |         this.passwordField = page.getByPlaceholder('Password');
   9 |         this.loginButton = page.getByRole('button', { name : 'Login' });
  10 |         this.title = page.locator('.login_logo');
  11 |     }
  12 |
  13 |     // This function hits sauce demo URL
  14 |     async gotoLoginPage() {
  15 |         await this.page.goto('https://www.saucedemo.com/');
  16 |         await this.title.waitFor();
  17 |         expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('LoginPage.png');
  18 |         const page = this.page;
  19 |         const axeBuilder = await new AxeBuilder({page}).analyze();
> 20 |         expect(axeBuilder.violations).toEqual([]);
     |                                       ^ Error: expect(received).toEqual(expected) // deep equality
  21 |     }
  22 |
  23 |     // This function enters login credentials and logs into App
  24 |     async loginToApp(username, password) {
  25 |         await this.usernameField.fill(username);
  26 |         await this.passwordField.fill(password);
  27 |         await this.loginButton.click();
  28 |     }
  29 |
  30 | }
```