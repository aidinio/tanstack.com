import { createFileRoute, redirect } from '@tanstack/react-router'
import { getLibrary } from '~/libraries'

export const Route = createFileRoute('/$libraryId/$version/docs/')({
  loader: (ctx) => {
    const { libraryId } = ctx.params
    const library = getLibrary(libraryId)

    throw redirect({
      to: `/$libraryId/$version/docs/${library.defaultDocs || 'overview'}`,
    })
  },
})
