#!/bin/bash

#=======================================

#Define Space Icons + Colors (Array)
SPACE_ICONS=(󰎤 󰎧 󰎪 󰎭 󰎱 󰎳 󰎶)
SPACE_COLORS=($YELLOW $CYAN $MAGENTA $WHITE $BLUE $RED $GREEN)
LENGTH=${#SPACE_ICONS[@]}
number_of_spaces=$(yabai -m query --spaces | jq length)

# Destroy space on right click, focus space on left click.
# New space by left clicking separator (>)

sid=0
spaces=()

for i in "${!SPACE_ICONS[@]}"
do
  sid=$(($i+1))
  PAD_LEFT=2
  PAD_RIGHT=2
  if [[ $i == 0 ]]; then
    PAD_LEFT=6
  elif [[ $i == $((number_of_spaces - 1)) ]]; then
    PAD_RIGHT=6
  fi
  
    space=(
    space=$sid            
    associated_space=$sid
    padding_left=4
    padding_right=4
    #padding_left=$PAD_LEFT
    #padding_right=$PAD_RIGHT
    icon=${ICONS_SPACE[i]}
    icon.color=${SPACE_COLORS[i]}
    icon.highlight_color=$BG0
    #icon.padding_left=6
    #icon.padding_right=0
    label="_"
    label.font="sketchybar-app-font:Regular:12.0"
    label.y_offset=-1
    label.color=${SPACE_COLORS[i]}
    label.highlight_color=$BG0
    label.padding_left=-4
    label.padding_right=10
    background.color="${SPACE_COLORS[i]}"
    background.border_color="${SPACE_COLORS[i]}"
    background.border_width=0
    background.corner_radius=6
    background.height=16
    script="$PLUGIN_DIR/space.sh"
  )
  
  sketchybar --add space space.$sid left    \
             --set space.$sid "${space[@]}" \
             --subscribe space.$sid mouse.clicked \
             --subscribe space.$sid front_app_switched window_change  

done

space_creator=(
  icon=􀆊
  icon.font="$FONT:Bold:16.0"
  padding_left=10
  padding_right=8
  label.drawing=off
  display=active
  click_script='yabai -m space --create'
  script="$PLUGIN_DIR/space_windows.sh"
  icon.color=$WHITE
)

sketchybar --add item space_creator left               \
           --set space_creator "${space_creator[@]}"   \
           --subscribe space_creator space_windows_change
