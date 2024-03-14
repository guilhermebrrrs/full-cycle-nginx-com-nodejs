#! /bin/bash

if [ -d ./node_modules ];
then 
  echo "Deleting node_modules ..." \
  && rm -r ./node_modules \
  && rm -d package-lock.json \
  && echo "Directory node_modules deleted!"
else 
  echo "Directory node_modules does not exists."
fi

