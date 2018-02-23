/**
 * Created by LAKSHMIDEVI on 08-02-2018.
 */

var helpers = require('protractor-helpers');
//Go to URL,maximize the screen
// beforeEach(function() {
//
// });
//login with id and password
describe('login page',function() {


    it('login', function () {
        browser.get("https://dev.manufacton.com");
        browser.manage().window().maximize();
        element(by.model("user.email")).sendKeys("test@ads.comp");
        element(by.model("user.password")).sendKeys("12345678");
        element(by.css("[value='Login']")).click();
        browser.sleep(4000);
        // setTimeout(function () {
        //     done();
        // },10000);

    });

        it('Should open Hamburger Menu',function (done) {
            element(by.id("menu-trigger")).click();
            //browser.sleep(4000);
            done();
        });


    it('Should Go to App and Projects ',function (done) {

        browser.actions().mouseMove( element(by.xpath('(//a[contains(text()," App & Project Setup")])[2]'))).click().perform();
        //browser.sleep(2000);
        halt(done,10000);
    });



    it('Should Go to Companies Tab',function (done) {

        element(by.className("list-group-item")).click();
        halt(done,10000);
    });


    it('Should add new company',function (done) {

        $$('[ng-click="addRow($event)"]').click();
        var xp =  element(by.xpath("(//table[@class='table table-condensed']//tr/td[@class='dcell']|//div[@class='form-group p-0 m-0 display-inline-block'])[10]"));
        browser.actions().
        mouseMove(xp).sendKeys("ads").perform();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[4]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi13");
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[5]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi12@manufacton.com");
        element(by.xpath("//html//tr[35]/td[8]/button[1]")).click();
        halt(done,10000);
    });


    it('Should Search company',function (done) {

        element(by.xpath("//div[@class='pull-left']//input[@type='text']")).sendKeys("lakshmi12@manufacton.com");
        element(by.xpath("//button[@id='editrow']")).click();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input")).clear();
        element(by.xpath('//*[@id="autoscroll"]/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input')).sendKeys("updates Name");
        element(by.xpath("//i[@class='zmdi zmdi-check']")).click();
        halt(done,10000);

    });


    function halt(done,_time) {
        setTimeout(function () {
            done();
        },_time);

    }



});