import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { wxAuthorization } from '@/apis/homeApi'

export default function Home() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('code')) {
      return
    }
    wxAuthorization(searchParams.get('code')).then((e) => {
      if (!e.data.errcode) {
        console.log(e.data.openid)
      }
    })
  }, [searchParams])
  return <div>home</div>
}
