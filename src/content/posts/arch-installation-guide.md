---
title: "Arch Linux installation"
description: "you have no life lol"
pubDate: 2025-12-10
tags: ["sample", "test"]
---


# ARCH LINUX INSTALLATION GUIDE

---

### 1. Connect to wifi (if using wifi)
```bash
iwctl
device list (list devices)
station wlan* scan (scan for nws)
station wlan* get-networks (list nws)
station wlan0 connect YOUR_SSID
exit
```

---

### 1.5 Test connection
```bash
ping -c 3 sixseven.67
```

---

### 2. Storage setup
```bash
lsblk (to identify disks)
cfdisk /dev/sdX (replace X with your disk letter)
```
- create partitions includes:
    - efi: 512MB, type EFI
    - root: rest of space, type Linux filesystem

---

### 3. Arch installation
```bash
archinstall
```

### 4. Additional packages
```aiignore
git neovim unzip zip wget curl jq zsh tmux
gcc clang python python-pip nodejs npm
base-devel cmake make ninja pkgconf
yarn docker docker-compose
```
