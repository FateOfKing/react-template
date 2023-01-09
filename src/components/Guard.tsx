import React from 'react'

export default function Guard({
  children,
  meta,
}: {
  children: React.ReactNode
  meta: any
}) {
  document.title = meta?.title ?? document.title
  if (meta?.title !== '满足条件。。。。。') {
    return <>{children}</>
  }

  return <></>
}
