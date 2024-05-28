import * as csv from '@fast-csv/parse';
const fs = require('fs'); // For file system access
const { test, expect } = require('@playwright/test');
const { parse } = require('fast-csv');

interface TestData {
    username: string;
    password: string;
    shoppingList: string;
    firstname: string;
    lastname: string;
    postalcode: string;
    removeitemfromcart: string;
    removeitemfromcheckout: string;
  }

export async function loadTestData(filePath) {
 
    const data: TestData[] = [];
    const stream = fs.createReadStream(filePath);
    const csvData = parse(stream);
  
    for await (const row of csvData) {
        const typedRow = row as TestData;
        data.push(typedRow);
    }
  
    return data;
  }