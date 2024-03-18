
# Filename: ~/github/dotfiles-latest/sketchybar/felixkratz/sketchybarrc

###############################################################################
#                            Community plugins
###############################################################################

# https://github.com/FelixKratz/SketchyBar/discussions/12

sketchybar -m --add item mic right \
	--set mic update_freq=3 \
	script="$PLUGIN_DIR/mic.sh" \
	click_script="$PLUGIN_DIR/mic_click.sh" \
	--subscribe mic volume_change

###############################################################################