run:
	deno run --allow-net index.ts

watch:
	deno run --allow-net --watch=./**/*.ts index.ts

cache:
	deno cache ./deps.ts
