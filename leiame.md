## Backend Limpo

## Ctrl + . = adiciona import na classe

bunx prisma init --datasource-provider postgresql
bunx prisma generate --schema=./src/external/prisma/schema.prisma
bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma

update 
npm i --save-dev prisma@latest
npm i @prisma/client@latest

continua aos 49:57min