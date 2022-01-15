$LOCAL_SETTINGS = Get-Content -Path local.settings.json | ConvertFrom-Json
$PACKAGE_JSON = Get-Content -Path package.json | ConvertFrom-Json

$APP_NAME = $PACKAGE_JSON.displayName
$VERSION = $PACKAGE_JSON.version
$PORT = $LOCAL_SETTINGS.port
$API_PREFIX = $LOCAL_SETTINGS.apiPrefix

docker run -p ${PORT}:$PORT -d `
    -e APP_NAME=$APP_NAME `
    -e VERSION=$VERSION `
    -e PORT=$PORT `
    -e API_PREFIX=$API_PREFIX `
    --name mailtotext jisodl0/mailtotext:latest 
    docker logs mailtotext --follow
