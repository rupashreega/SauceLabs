import {test,expect, request} from '@playwright/test'

test.skip('apitest',async({page,request}) => {

    const response = await request.get("https://www.google.com/")
    const responsecode = response.status()
    console.log(responsecode)
    expect(responsecode).toEqual(200);

});

