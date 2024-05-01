init:
	make start \
	&& make db \
	&& make geo \
	&& make fixture

watch:
	npm run start:dev

#build:
#	docker-compose -f docker-compose-dev.yml build

db:
	npm run typeorm schema:sync -- --dataSource ormconfig.ts

reset-db:
	docker-compose -f docker-compose-dev.yml exec db psql -U postgres -d postgres -c "DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;"

fixture:
	npm run fixtures load -- ./fixtures --dataSource ormconfig.ts

start:
	docker-compose -f docker-compose-dev.yml up -d

down:
	docker-compose -f docker-compose-dev.yml down

stop:
	docker-compose -f docker-compose-dev.yml stop

geo:
	npm run command geo:load:states && npm run command geo:load:counties && npm run command geo:load:cities
