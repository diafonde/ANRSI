#!/bin/bash
ng build --configuration production --base-href "/ANRSI/" --output-path docs
cp docs/index.html docs/404.html
git add docs/
git commit -m "Déploiement automatique"
git push origin main
