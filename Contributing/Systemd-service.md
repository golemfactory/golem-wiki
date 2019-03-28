A template for advanced users, who'd like to have Golem as a systemd service. You'll probably want to tweak it to your needs.

```bash
[Unit]
Description=Golem
After=network.target

[Service]
ExecStart=/usr/local/bin/golemapp --nogui 
Restart=on-failure
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu

[Install]
WantedBy=multi-user.target
```