import { useRouter } from 'next/router'

const Error = ({ statusCode }) => {
  const router = useRouter()

  return (
    <div>
      <h1>{`Error ${statusCode}`}</h1>
      <p>Something went wrong :(</p>
      <span onClick={() => router.back()}><a>Go back</a></span><br/>
      <img src={`https://http.cat/${statusCode}.jpg`} />
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
