install: #first to this command to install dependencies
	npm ci

publish:
	npm publish --dry-run

lint: #run linter
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-prgression.js

brain-prime:
	node bin/brain-prime.js
