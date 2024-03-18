sketchybar	    --add item focus right					\
		        --set focus							\
			        icon= 						\
			        script="$PLUGIN_DIR/focus.sh"				\
                    click_script="shortcuts run \"toggle focus\""		\
		        --add event focus_on "_NSDoNotDisturbEnabledNotification"	\
		        --add event focus_off "_NSDoNotDisturbDisabledNotification"	\
		        --subscribe focus focus_on focus_off	