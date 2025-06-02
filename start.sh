#!/bin/bash
npm install
npm run build --prefix frontend
node backend/server.js
