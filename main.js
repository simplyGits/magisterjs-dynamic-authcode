#!/usr/bin/env node
const getAuthcode = require("./getAuthcode.js");

getAuthcode(true)
	.then(r => console.log(r))
	.catch(err => console.error(err));
