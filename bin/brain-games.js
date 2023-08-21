#!/usr/bin/env node
import greetingsUser from '../src/cli.js';

function greetings() {
  console.log('Welcome to the Brain Games!');
  greetingsUser();
}

greetings();
