# stack
- typescript
- express
- prisma
- class-validator for validations
- nodemailer and handlebars for mail templates
- bull for background jobs


# to start server in local
- npm install
- nest start --watch
- npm run start:dev

# Console
- npm run start -- --entryFile repl

# Nest Commands
- nest generate controller controller-name
- nest generate module module-name
- nest generate service service-name

# prisma commands
- npx prisma init
- npx prisma migrate dev
- npx prisma studio => visualization
- npx prisma migrate deploy # Used to migrate all pending versions
- npx prisma db seed

# To view code structure
- 1. npx @compodoc/compodoc -p tsconfig.json -s
- 2. open http://127.0.0.1:8080/
