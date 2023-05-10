---
title: "Homebrewのアップデートを自動化"
date: "2023/5/10"
tags: ['Mac', 'Homebrew']
---

# 環境

macOS Catalina


# plistファイルを作成します


~/Library/LaunchAgents/に下記ファイルを作成します。


ファイル名はlocalhost.homebrew-autoupdate.plistとしました。

このplistで前回のアップデートから8時間経過または起動時に自動的に

brew update

brew upgrade

brew cleanup

の三つのコマンドが実行されるようにしました！

```

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
 <key>Label</key>
 <string>localhost.homebrew-autoupdate</string>
 <key>ProcessType</key>
 <string>Background</string>
 <key>ProgramArguments</key>
 <array>
   <string>/bin/sh</string>
   <string>-c</string>
   <string>/usr/local/bin/brew update &amp;&amp;
     /usr/local/bin/brew upgrade &amp;&amp;
     /usr/local/bin/brew cleanup &amp;&amp;
   </string>
 </array>
 <key>RunAtLoad</key>
 <true/>
 <key>StandardErrorPath</key>
 <string>/tmp/localhost.homebrew-upgrade.stderr</string>
 <key>StandardOutPath</key>
 <string>/tmp/localhost.homebrew-upgrade.stdout</string>
 <key>StartCalendarInterval</key>
 <dict>
   <key>Hour</key>
   <integer>8</integer>
 </dict>
</dict>
</plist>
```


# 動作確認

下記コマンドを実行してOKと表示されることを確認してください！

```
plutil -lint ~/Library/LaunchAgents/localhost.homebrew-autoupdate.plist​
```
launchdに登録

```
launchctl load ~/Library/LaunchAgents/localhost.homebrew-autoupdate.plist
```

launchctl list でlaunchdに登録されているリストを表示して`localhost.homebrew-autoupdate`
があることを確認

```
launchctl list | grep home
```
