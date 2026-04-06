# auto-deploy-simple.ps1
# Simple auto-deploy script for GitHub Portfolio

param(
    [string]$CommitMessage = ""
)

Clear-Host
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "   PORTFOLIO AUTO-DEPLOY SCRIPT   " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Magenta

# Check if git repository
Write-Host "`n[1/5] Checking git repository..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    Write-Host "ERROR: Not a git repository!" -ForegroundColor Red
    exit 1
}
Write-Host "OK: Git repository found" -ForegroundColor Green

# Check for changes
Write-Host "`n[2/5] Checking for changes..." -ForegroundColor Cyan
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes detected. Exiting." -ForegroundColor Yellow
    exit 0
}

# Show changes
Write-Host "`nChanges detected:" -ForegroundColor Yellow
git status --short

# Stage changes
Write-Host "`n[3/5] Staging changes..." -ForegroundColor Cyan
git add .
Write-Host "OK: Changes staged" -ForegroundColor Green

# Commit changes
Write-Host "`n[4/5] Committing changes..." -ForegroundColor Cyan
if ($CommitMessage) {
    $message = $CommitMessage
} else {
    $defaultMessage = "Auto-deploy: Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    $message = Read-Host "Enter commit message (or press Enter for default)"
    if (-not $message) {
        $message = $defaultMessage
    }
}

git commit -m "$message"
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Commit failed!" -ForegroundColor Red
    exit 1
}
Write-Host "OK: Committed with message: $message" -ForegroundColor Green

# Push to GitHub
Write-Host "`n[5/5] Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "SUCCESS: Deployed to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Repository: https://github.com/yamanjr10/Protfolio" -ForegroundColor Cyan
    Write-Host "`nYour site will auto-update on Netlify/Vercel in 1-2 minutes." -ForegroundColor Yellow
} else {
    Write-Host "`nERROR: Push failed!" -ForegroundColor Red
    Write-Host "Try running: git pull origin main --rebase" -ForegroundColor Yellow
    exit 1
}

Write-Host ""