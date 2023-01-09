import { useLocalStorageState } from 'ahooks'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Auth() {
  const [searchParams] = useSearchParams()

  const redirectClick = () => {
    // 重定向链接
    const redirect_uri = `http://${
      window.location.host
    }/home?to=${searchParams.get('to')}`
    // 打开微信授权链接
    window.location.replace(
      `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3129072fb9362c47&redirect_uri=${encodeURI(
        redirect_uri,
      )}&response_type=code&scope=snsapi_base#wechat_redirect`,
    )
  }
  const navigate = useNavigate()
  const [openid] = useLocalStorageState('openid')

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center" onClick={redirectClick}>
        <div>微信授权</div>
      </div>
    </div>
  )
}
