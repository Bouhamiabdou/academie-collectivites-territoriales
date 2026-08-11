$node = "C:\Program Files\nodejs\node.exe"
$script = "$PSScriptRoot\server.mjs"
$url = "http://localhost:8766/index.html"

# Vérifier si le serveur tourne déjà
$running = $false
try {
    $null = Invoke-WebRequest -Uri "http://localhost:8766" -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop
    $running = $true
} catch {}

if (-not $running) {
    Start-Process -FilePath $node -ArgumentList $script -WindowStyle Hidden
    # Attendre que le serveur soit prêt (max 10 secondes)
    $tries = 0
    do {
        Start-Sleep -Milliseconds 500
        $tries++
        try {
            $null = Invoke-WebRequest -Uri "http://localhost:8766" -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop
            $running = $true
        } catch {}
    } while (-not $running -and $tries -lt 20)
}

if ($running) {
    Start-Process $url
} else {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show("Impossible de démarrer le serveur.", "Académie des Collectivités Territoriales")
}
