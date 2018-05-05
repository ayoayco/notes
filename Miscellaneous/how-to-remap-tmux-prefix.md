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
