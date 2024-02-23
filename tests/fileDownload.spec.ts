import { test, expect } from '@playwright/test'
import Papa from 'papaparse'
import fs from 'fs'
import { deleteFile } from '../helpers/helpers'

test('file testing', async ({ page }) => {
  await page.goto('https://www.datablist.com/learn/csv/download-sample-csv-files')
  const downloadPromise = page.waitForEvent('download')
  await page.locator("//a[@href='https://drive.google.com/uc?id=1zO8ekHWx9U7mrbx_0Hoxxu6od7uxJqWw&export=download']").click()
  const download = await downloadPromise
  const path = `./downloads/${download.suggestedFilename()}`
  await download.saveAs(path)

  if (fs.statSync(path).size === 0) {
    console.error('File is empty')
    deleteFile(path)
    return
  }

  const fileContent = fs.readFileSync(path, 'utf8')
  console.log('File Content:', fileContent)

  let res = Papa.parse(fileContent, {
    header: true, 
    dynamicTyping: true, 
  })

  console.log('Column Headers:', res.meta.fields)
  console.log('Data:', res.data)

  expect(res.data.length).toBeGreaterThanOrEqual(100)
  const expectedID = '2354a0E336A91A1'
  const objectWithIDExists = res.data.some(obj => obj['Customer Id'] === expectedID)
  expect(objectWithIDExists).toBe(true)

  deleteFile(path)
})