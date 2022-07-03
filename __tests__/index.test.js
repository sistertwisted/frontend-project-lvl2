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

const test1 = readFile('result_plain');

test('testing getdiffs JSON', () => {
  const file1 = getFixturePath('before_flat.json');
  const file2 = getFixturePath('after_flat.json');
  expect(getDiffs(file1, file2)).toEqual(test1);
});

test('testing getdiffs YAML', () => {
  const file1 = getFixturePath('before_flat.yaml');
  const file2 = getFixturePath('after_flat.yml');
  expect(getDiffs(file1, file2)).toEqual(test1);
});
const test2 = readFile('result');

test('testing getdiffs stylish', () => {
  const file1 = getFixturePath('before.json');
  const file2 = getFixturePath('after.json');
  expect(getDiffs(file1, file2)).toEqual(test2);
});
