import { test, expect } from "@playwright/test"


test.describe.serial("API TESTING", ()=>{
test("Testing Api get by id test",async ({request})=>{
    let result = await request.get("https://reqres.in/api/users/1")
    let data = await result.json()
    expect(result.ok()).toBeTruthy()
    expect(data).toEqual({
        data: {
            id: 1,
            email: 'george.bluth@reqres.in',
            first_name: 'George',
            last_name: 'Bluth',
            avatar: expect.any(String)
        },
        support: {
            text: "To keep ReqRes free, contributions towards server costs are appreciated!",
            url: "https://reqres.in/#support-heading"
        }
    })

    
    console.log(data)
})

test("Testing Api method put",async ({request})=>{
    let result = await request.put("https://reqres.in/api/users/3", {
        data:{first_name:"Ivan"}
    })
    let data = await result.json()
    console.log(data)

    expect(result.ok()).toBeTruthy()
   
})


test("Testing Api method delete",async ({request})=>{
    let deleteResult = await request.delete("https://reqres.in/api/users/1")
    expect(deleteResult.ok()).toBeTruthy();


    let getResult = await request.get("https://reqres.in/api/users")
    let data = await getResult.json()
    expect(getResult.ok()).toBeTruthy()
    expect(deleteResult.ok()).toBeTruthy()
    expect(data.data[0]).toEqual(expect.objectContaining(
        {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": expect.any(String)
            },
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }
    ))

    
        })

        
    })