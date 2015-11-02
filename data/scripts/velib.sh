#!/bin/bash


while :;
  do clear;
  wget -O $(date +%H-%M-%Y-%m-%d) https://api.jcdecaux.com/vls/v1/stations\?contract\=paris\&apiKey\=da7bbdf810e8e927e25af1656506f32634cb59bd;
  sleep 600; 
done
