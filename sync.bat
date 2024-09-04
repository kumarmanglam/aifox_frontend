@echo off

:: Navigate to your local repository

:: Fetch the latest changes from the parent repository
git fetch upstream

:: List all branches
for /f "tokens=*" %%b in ('git branch -r ^| findstr /v "origin/" ^| findstr /r /v "^  upstream/HEAD"') do (
    setlocal enabledelayedexpansion
    set branch=%%b
    set branch=!branch:upstream/=!

    :: Checkout the branch locally
    git checkout !branch!

    :: Merge changes from upstream branch
    git merge upstream/!branch!

    :: Push the updates to your fork on GitHub
    git push origin !branch!

    endlocal
)

echo All branches have been updated with the latest changes from the parent repository.
pause
