# create-svelte

Generate Typscript definitions from the TrackTik's Rest Open API Schema:
```bash
### Optional if you dont want to download 2Megs every time you generated the files with openapi
### curl https://trial.local/rest/schema/v1/schema.json > tt-rest-schema.json

### https://github.com/ferdikoomen/openapi-typescript-codegen
npm install -g openapi-typescript-codegen
openapi -i https://trial.local/rest/schema/v1/schema.json -o tt-rest --exportSchemas true --exportCore false --exportServices false
```
