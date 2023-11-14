import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const tool: any = visionTool()
export default defineConfig({
  name: 'default',
  title: 'NextJs E',

  projectId: 'kj97eelg',
  dataset: 'production',

  plugins: [deskTool(), tool],

  schema: {
    types: schemaTypes,
  },
})
