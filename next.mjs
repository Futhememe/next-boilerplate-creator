#!/usr/bin/env zx

let projectName = await question("What's the project name ?: ")

let appContent = await fs.readFile('./templates/_app.tsx')
let themeContent = await fs.readFile('./templates/theme.tsx')
let documentContent = await fs.readFile('./templates/_document.tsx')
let containerContent = await fs.readFile('./templates/Container.tsx')
let indexContent = await fs.readFile('./templates/index.tsx')

cd('..')

await $`yarn create next-app --typescript ${projectName}`

cd(projectName)

await $`mkdir src`

await $`mv pages src`

cd('styles')
await $`rm globals.css Home.module.css`

cd('..')
await $`rmdir styles`

await $`yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`

await $`yarn add i18next react-i18next ni18n`

cd('src')
await fs.writeFile('theme.tsx', themeContent)

await $`mkdir components`

cd('components')

await fs.writeFile('Container.tsx', containerContent)

cd('..')

cd('pages')

await fs.writeFile('_document.tsx', documentContent)

await $`rm _app.tsx`
await $`rm index.tsx`

await fs.writeFile('_app.tsx', appContent)
await fs.writeFile('index.tsx', indexContent)
