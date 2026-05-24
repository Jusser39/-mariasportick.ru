@echo off
setlocal

set "PROJECT_DIR=D:\bot\premium-trainer-site"
set "NODE_DIR=C:\Program Files\nodejs"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do set "PORT_PID=%%P"

if not defined PORT_PID (
  start "Maria Fitness Local Server" cmd /k "cd /d %PROJECT_DIR% && set PATH=%NODE_DIR%;%%PATH%% && npm.cmd run dev -- -p 3000"
  timeout /t 8 /nobreak >nul
)

start "" "http://localhost:3000"
echo [OK] Сайт открыт: http://localhost:3000

endlocal