/**
 * Created by LAKSHMIDEVI on 21-02-2018.
 */

var helpers = require('protractor-helpers');
beforeEachfunc(function() {

	
	
	
	
	
    browser.get("https://dev.manufacton.com");
    browser.manage().window().maximize();
});
describe('login page',function() {
    it('login', function (login) {





        element(by.model("user.email")). sendKeys("test@ads.comp");
        element(by.model("user.password")).sendKeys("12345678");
        element(by.css("[value='Login']")).click();
        browser.sleep(10000);
        element(by.id("menu-trigger")).click();
        browser.sleep(4000);
        browser.actions().mouseMove( element(by.xpath('(//a[contains(text()," App & Project Setup")])[2]'))).click().perform();
        browser.sleep(2000);
        element(by.className("list-group-item")).click();
        $$('[ng-click="addRow($event)"]').click();
        browser.sleep(200);
        var xp =  element(by.xpath("(//table[@class='table table-condensed']//tr/td[@class='dcell']|//div[@class='form-group p-0 m-0 display-inline-block'])[10]"));
        browser.actions().
        mouseMove(xp).sendKeys("ads").perform();
        var xp1 = element(by.xpath("(//table[@class='table table-condensed']//tr/td[@class='dcell']|//div[@class='form-group p-0 m-0 display-inline-block'])[11]"));
        browser.actions().
        mouseMove(xp1).sendKeys("lakshmi").perform();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[4]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi7");
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[5]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi7@manufacton.com")
        element(by.css("button[@class='btn btn-success btn-sm waves-effect']")).click();
        element(by.xpath(" //*[@id='autoscroll']/table/tbody/tr[35]/td[8]/button[1]")).click();
        browser.sleep(3000);

        element(by.xpath("//div[@class='pull-left']//input[@type='text']")).sendKeys("lakshmi@manufacton.com");
        browser.sleep(2000);
        element(by.xpath("//button[@id='editrow']")).click();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input")).clear();
        element(by.xpath('//*[@id="autoscroll"]/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input')).sendKeys("updates Name");
        browser.sleep(2000);
        element(by.xpath("//i[@class='zmdi zmdi-check']")).click();
        browser.close();



    });
});
