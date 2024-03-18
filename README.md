# Showcase

![Desktop](./assets/Desktop.png)

# Macos Settings

## Permanently Hide Dock

```bash
defaults write com.apple.dock autohide-delay -float 9999; killall Dock
```

# Packages/Applications

## brew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Fonts

```bash
brew tap homebrew/cask-fonts
brew install font-jetbrains-mono-nerd-font
```

## Music

```bash
brew install spotify
```

## sketchybar

```bash
stow sketchybar
```

## SKHD

The following are a synposis of all hotkeys defined by SKHD

### Workspaces
|Shortcut|Workspace|
|--------|---------|
|`Alt + B`|Browser|
|`Alt + M`|Spotify|
|`Alt + Return`|Terminal|

### Keybindings
|Shortcut|Description|
|--------|-----------|
|`Alt + 1/2/3/4/5/6/7`|Focus space|
|`Alt + I/J/K/L`|Focus window|
|`Alt + Shift + I/J/K/L`|Swap window|
|`Alt + E`|Toggile split|
|`Alt + Shift + R`|Rotate layout|
|`Alt + Shift + Z/X`|Mirror space vertically/horizontally|
|`Alt + Shift + Q/E`|Zoom window pane/full screen|
|`Alt + Shift + W/A/S/D`|Resize window|
|`Alt + Shift + Return`|Balance window sizes|
|`Alt + Z`|Toggle window PIP|
|`Alt + Shift + F`|Toggle window float|
|`Alt + Shift + 1/2/3/4/5/6/7`|Move window to space & switch focus|

## yabai

### Installation

```bash
brew install koekeishiya/formulae/yabai
brew services start yabai
brew install koekeishiya/formulae/skhd
brew services start skhd
```

(Copied from [yabai GitHub](<https://github.com/koekeishiya/yabai/wiki/Installing-yabai-(latest-release)>) and [skhd GitHub](https://github.com/koekeishiya/skhd))