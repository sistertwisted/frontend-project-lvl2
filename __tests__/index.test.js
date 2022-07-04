/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import getDiffs from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const test1 = readFile('result');
const test2 = readFile('resultPlain');
const file1 = getFixturePath('before.json');
const file2 = getFixturePath('after.json');

test('testing getdiffs stylish', () => {
  expect(getDiffs(file1, file2, 'stylish')).toEqual(test1);
});

test('testing getdiffs plain', () => {
  expect(getDiffs(file1, file2, 'plain')).toEqual(test2);
});
