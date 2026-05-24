$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$packageJson = Get-Content -Raw -Path (Join-Path $repoRoot 'package.json')
if ($packageJson -notmatch '"name"\s*:\s*"premium-trainer-site"') {
    throw 'Guardrail failed: wrong project. Expected package name premium-trainer-site.'
}

$heroPath = Join-Path $repoRoot 'src\components\sections\Hero.tsx'
if (-not (Test-Path $heroPath)) {
    throw 'Guardrail failed: Hero.tsx not found.'
}

$heroContent = Get-Content -Raw -Path $heroPath
if ($heroContent -notmatch 'Изящные\s+формы') {
    throw 'Guardrail failed: baseline blue hero marker not found (expected "Изящные формы").'
}

Write-Host 'Guardrail OK: premium-trainer-site with blue baseline is active.'
