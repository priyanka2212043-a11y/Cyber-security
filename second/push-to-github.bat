@echo off
echo Initializing Git repository for Green Truth website...
echo.

REM Navigate to project directory
cd /d "c:\Users\rajni\OneDrive\Desktop\second"

REM Configure Git (first time setup)
git config --global user.name "priyanka2212043-a11y"
git config --global user.email "your-email@example.com"

REM Initialize repository
echo [1/6] Initializing Git repository...
git init

REM Add all files
echo [2/6] Adding all files...
git add .

REM Initial commit
echo [3/6] Creating first commit...
git commit -m "Initial commit - Green Truth activist website for cybersecurity training"

REM Rename branch to main
echo [4/6] Renaming branch to main...
git branch -M main

REM Add remote origin
echo [5/6] Adding remote origin...
git remote add origin https://github.com/priyanka2212043-a11y/Cyber-security.git

REM Push to GitHub
echo [6/6] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo Git push complete!
echo Your code is now on GitHub at:
echo https://github.com/priyanka2212043-a11y/Cyber-security
echo ========================================
pause
