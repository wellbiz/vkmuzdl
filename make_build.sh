#!/bin/sh
find . -name ".DS_Store" -exec rm {} \;
rm -r ./build
mkdir ./build
cp -r ./js ./build/.
cp *.json ./build/.
cp *.png ./build/.
java -jar compiler.jar --js ./js/vkmp3.js --js_output_file ./build/js/vkmp3.js
cd ./build/
zip -9 -r ../build_chrome.zip ./