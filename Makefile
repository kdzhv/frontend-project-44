install-deps:
	npm ci

brain-games:
	node bin/brain-games.js

calculator:
	node games/brain-calc.js

even:
	node games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint