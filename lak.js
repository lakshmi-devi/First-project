describe('manufacton login page', function() {
    // var webdriver = require('selenium-webdriver');
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



    it('Should open Members tab', function (done) {


        browser.actions().mouseMove(element(by.xpath('//a[@ng-click="projectSettings()"]'))).click().perform();
        element(by.xpath('//html//div[2]/a[1]')).click();
        halt(done,10000);
    })


    it('Should add new Member', function (done) {
        // Add new Member
        element(by.xpath('//button[@class=\'btn btn-primary btn-sm pull-right waves-effect\']')).click();
        var xp = element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[2]/edit-format/div/div[2]/input"));
        browser.actions().mouseMove(xp).sendKeys("New Email1").perform();
        element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[3]/edit-format/div/div[3]/div/div/input")).sendKeys("new12@ads.cpmp");
        element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[4]/edit-format/div/div[1]/div/label/input")).click();
        element(by.xpath("  //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[5]/edit-format/div/div[2]/input")).sendKeys("9898764646");
        element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[8]/button[1]")).click();
        browser.actions().mouseMove(element(by.xpath(" //a[@class='chosen-single']//span"))).click().perform();
        element(by.xpath(" //button[@class='confirm']")).click();
        halt(done,10000);
    });


    it('Should search and Edit Member', function (done) {
        //Edit Member
        element(by.xpath("//div[@class='pull-left']//input[@type='text']")).sendKeys("new12@ads.cpmp");
        browser.sleep(2000);
        element(by.xpath("//button[@id='editrow']")).click();
        element(by.xpath("//div[@ng-switch-when='name']//input[@ng-model='row[cellVal]']")).clear();
        element(by.xpath("//div[@ng-switch-when='name']//input[@ng-model='row[cellVal]']")).sendKeys("updates Name1");
        element(by.xpath("//div[@ng-switch-when='admin']//label//input[@ng-model='row[cellVal]']")).click();
        element(by.xpath("//html//tr[@ng-show='(isEditing(row) || !row._id) && allowEdit']//button[1]")).click();
        halt(done,10000);
    });

    function halt(done,_time) {
        setTimeout(function () {
            done();
        },_time);

    }
});

