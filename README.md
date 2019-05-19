# Consul Frontend sample

## Info

In deze POC wordt een angular frontend gestart op basis van config values uit kv store van Consul.
Als er config values veranderen in Consul, dan herstart nginx.

## Commands

Start een consul agent (lokaal)

	.\consul.exe agent -dev -bind='127.0.0.1'

Steek waarden in de key value store

	.\consul.exe kv put dev/Sirus.Poc.Consul.Frontend.Angular/title HiFromConsul

Build image

    ng build --prod
    docker build -t consulfrontend .
    docker run -p 3276:80 consulfrontend

## Test

- De titel wordt door angular geladen on startup (http://localhost:3276).
- Bij wijziging van de kv, dan wordt nginx herladen
- Indien de agent crashed na het starten van het process, dan blijft het process draaien.
