#!/bin/sh

status=$(cat ~/Library/DoNotDisturb/DB/Assertions.json | jq .data[0].storeAssertionRecords)

if [ "$status" = "null" ]; then
    sketchybar -m --set focus icon.color=0xFF999999
else
    sketchybar -m --set focus icon.color=0xFFFFFFFF
fi
