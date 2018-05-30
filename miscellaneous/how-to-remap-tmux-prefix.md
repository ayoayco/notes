# How to change TMUX prefix

The default prefix fot tmux (Ctrl+b) require the use of both my hands. Hence, I want to remap it to use Ctrl+a instead. Here's how I did it.

If you don't have the tmux dotfile yet, create it.

```
touch ~/.tmux.conf
```

then edit the file

```
vim ~/.tmux.comf
```

add these lines:

```
set prefix C-a
unbind-key C-b
bind-key C-a send-prefix
```
Once saved, it will be recognized by tmux the next time you run it.

If you are already inside tmux and you want it to be loaded without restarting, summon the prompt by doing ``<prefix> :`` then the following command:

```
source-file ~/.tmux.conf
```


