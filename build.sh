#!/bin/sh
rm -r -f build
mkdir build

cp -r backend/dist/. build/
rm -r -f build/public/*

cp -r frontend/dist/. build/public/