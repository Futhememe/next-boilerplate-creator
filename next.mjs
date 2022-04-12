#!/usr/bin/env zx

let projectName = await question("What's the project name ?: ")

let appContent = await fs.readFile('./templates/_app.tsx')
let themeContent = await fs.readFile('./templates/theme.tsx')
let documentContent = await fs.readFile('./templates/_document.tsx')

cd('..')

await $`yarn create next-app --typescript ${projectName}`

cd(projectName)

await $`mkdir src`

await $`mv pages src`
await $`mv styles src`

await $`yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`

await $`yarn add react-i18next i18next`

cd('src')
await fs.writeFile('theme.tsx', themeContent)

cd('pages')

await fs.writeFile('_document.tsx', documentContent)

await $`rm _app.tsx`

await fs.writeFile('_app.tsx', appContent)
