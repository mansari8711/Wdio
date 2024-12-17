import { Given,When,Then, Before } from "@wdio/cucumber-framework";

Before(async function()
{
  await browser.url(`/`)
  
})







Given(/^Amzon.in Page is Open$/,async function () {
  
    await browser.url("https://www.amazon.in")
    await browser.maximizeWindow()
    
})

Given(/^Open Test Automation Practice page should Open$/,async function(){

  //await browser.url(`/`)
  await browser.maximizeWindow()

  
})

When(/^Mouse Move to Element of AccountList$/,async function(){

  let Accountlist = await $("//span[text()='Account & Lists']")

  await Accountlist.moveTo() //it will hover on that particular element

  await browser.pause(3000)


  

})

Then(/^we have to click on account option$/,async function(){

await $("//span[text()='Your Account']").click()

await browser.pause(2000)

})

Then(/^Click on Copy Text Button$/,async function(){

  let copytetxbutton = await $("//button[@ondblclick='myFunction()'']")

  await copytetxbutton.doubleClick()
  
  await browser.pause(2000)
  
  })


  Then (/^click on Male radio Button$/,async function(){

    await $("//label[text()='Male']").click();
    await browser.pause(4000)
  })

  Then (/^Box move to the Target Position$/,async function(){

    // let StartingPoint  = await $("#draggable")
    // let TargetPoint = await $("#droppable")

    // await StartingPoint.dragAndDrop(TargetPoint)

    let rightclickelement = await $("//span[text()='right click me']");

    await rightclickelement.click({button:"right"})
    await browser.pause(4000)
  })

  Then (/^Select Country from the dropdown$/,async function(){

    let CountryDropdown = await $("#country");

    await CountryDropdown.selectByAttribute('value','australia')

    await browser.pause(1000)

    await CountryDropdown.selectByVisibleText('India')

    await browser.pause(1000)

    await CountryDropdown.selectByIndex(2)

    let listOption = await $$("#country option")
    console.log("Count of Dropdwon "+listOption.length)

/**
 * inilatization  
 * 
 * i<=10 -- condition if condition is true loop will continue else it will break
 * i++ -- increment the value == i=i+1
 */
    // for(let i = 1; i<=10 ; i++) // 11 11<=10  11
    // {
    //   console.log(i)
    // }


    for(let i = 0 ; i<listOption.length ;i++)
    {
      const countryname = listOption[i];
      console.log(countryname.getText())
    }

f
  })


  Then (/^Select Country with (.*)$/,async function(CountryName){

    let CountryDropdown = await $("#country");

    
    await browser.pause(1000)

    await CountryDropdown.selectByVisibleText(CountryName)

    await browser.pause(1000)
    


  })


  Then (/^click on Alert Box$/,async function(){

   
  

    //await browser.pause(3000)
    


  })

  Then(/^handling the alert$/,async function(){

    await $(`button=Click for JS Prompt`).click();

    //await browser.pause(3000)

   const isopen = await browser.isAlertOpen()

    if(isopen)
    {
      await browser.sendAlertText('BrowserStack')
      await browser.acceptAlert()//accept

     

    }

    await $(`button=Click for JS Prompt`).click();

    if(isopen)
    {

    await browser.sendAlertText('BrowserStack')
    await browser.dismissAlert()
  }
    await browser.pause(7000)
    
  })


  
  Then (/^Upload file from FileUpload Folder$/,async function(){


    await $("#singleFileInput").addValue(`${process.cwd()}/data/fileupload/demodata.txt`)

    await $("//button[text()='Upload Single File']").click()

    await browser.pause(4000)




  })

  
  Then(/^Validate Start Button is displayed$/, async function(){

    console.log(`calling locator for startbutton : ${process.env.StartButton}`)

    let ActualResult = await $(process.env.StartButton).isDisplayed() //true false

    expect(ActualResult).toEqual(true)

   let ActualText =  await $("(//h2[@class='title'])[1]").getText()

   expect(ActualText).toEqual("Upload Files")

   let ActualResults = await $(process.env.StartButton)

   expect(ActualResults).toBeDisplayed()

  })
