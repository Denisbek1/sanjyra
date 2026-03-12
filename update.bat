@echo off
cd /d %~dp0

echo Checking status...
git status

echo Adding files...
git add .

echo Commit...
git commit -m "site update"

echo Push to GitHub...
git push origin main

pause