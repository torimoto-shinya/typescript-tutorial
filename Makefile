CURRENT_DIR:= ${CURDIR}

build:
	docker build ../docker -t typescript

run: create start

create:
	docker create -it -v $(CURRENT_DIR)/src:/home/my-app -p 3000:3000 --name typescript typescript

start:
	docker start typescript
	docker attach typescript

rm:
	docker stop typescript
	docker rm typescript

rmi: rm
	docker rmi typescript
