import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { menuItem } from './menuItem'
import { order } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, menuItem, order],
}
