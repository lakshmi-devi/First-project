/**
 * Created by LAKSHMIDEVI on 08-02-2018.
 */

var login_page = function() {

    this.nameTextBox =  element(by.model("user.email"));
    this.passwordTextBox =  element(by.model("user.password"));
    this.loginButton = element(by.buttonText('Login'));


    this.enterName = function(name) {
        this.nameTextBox.sendKeys(name);
    };

    this.enterName = function(password) {
        this.nameTextBox.sendKeys(password);
    };

    this.clickLogin = function() {
        this.loginButton.click();
        return require('./login.js');
    };

    *describe('manufacton login page', function() {
        it('login', function(login) {
            browser.get("https://dev.manufacton.com");
            element(by.model("user.email")).sendKeys("test@ads.comp");
            element(by.model("user.password")).sendKeys("12345678");
            element(by.css("[value='Login']")).click();
            browser.sleep(2000);
            element(by.id("menu-trigger")).click();

            // getAttribute('ng-class').then (function (ngClass) {
        })

    });*/

//var login = require("./spec.js");
/*  var el;
 el = element(by.id("prjsetup")).getAttribute('ng-class').then(function (ngClass) {
 var tag = browser.executeScript('return arguments[0].a', el)
 expect(tag).toEqual(" App & Project Setup");
 })
 browser.sleep(1000);*/

//element(by.linkText("App &amp; Project Setup")).click();
/*element(by.xpath('')).click();
 browser.sleep(2000);*/
/* it('click on app and projects', function() {
 browser.wait(EC.visibilityOf(element(by.css('[ng-click="projectSettings()"]'))), 30000);
 element(by.css("[ng-click=\"projectSettings()\"]")).click();
 });*/
// browser.executeScript('window.scrollTo(10000,0);').then(function () {
//     //page.saveButton.click();
// })
// el = element(by.xpath('(//a[contains(text()," App & Project Setup")])[2]'));
//browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement());
//   var el = browser.actions().mouseMove( element(by.xpath('(//a[contains(text()," App & Project Setup")])[2]'))).perform();
//  browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement()).click();

/*wait.until(Expectedconditions.buttoncontains(name = 'rowAdd'));
 element(by.xpath("//button[@class='btn btn-primary btn-sm pull-right waves-effect']")).click();*/

//element(by.xpath("//button[@class='btn btn-primary btn-sm pull-right waves-effect']")).click();

//element($('btn.btn-primary.btn-sm.pull-right.waves-effect')).click();
//browser.wait(condition, 5000);
//  element(button[ng-click="addRow($event)"])


// var xp = '//input[@class="form-control.ng-pristine.ng-valid.ng-touched"]';
//browser.actions().mouseMove( element(by.xpath("//input[@class='form-control.ng-pristine.ng-valid.ng-touched']"))).perform();
//browser.driver.manage().window().maximize();
//element(by.xpath("//input[@class='form-control.ng-pristine.ng-valid.ng-touched']")).sendKeys('google');
//  element(by.xpath("//div[@class='fg-line'|//input[@class='form-control.ng-pristine.ng-valid.ng-touched']")).sendKeys('google');
/*     var text = 'ads';

 //  Locator
 var input = element(by.model('row[cellVal]'));

 // Now you can use like this
 setValue(text, input);

 // Using this function
 this.setValue = function (inputText, locator) {
 browser.executeScript("arguments[0].setAttribute('value', '" + inputText +"')", locator);
 };
 */
// browser.sleep(2000);
// var  input = element(by.tagName('input'));

// browser.sleep(2000);
// var val=expect(input.getAttribute('value')).toEqual('companyName');
// input.sendKeys('google');
//browser.executeScript("");



//input.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'gmails'));
//element(by.xpath("//input[@class='form-control.ng-pristine.ng-valid.ng-touched']")).sendKeys('google');