import Link from 'next/link'

const Test = () => (
  <div>
    <h1>Test page</h1>
    <Link href="/">
      <a>Go to home page</a>
    </Link>
    <br/>
    <Link href="/badRequestTest">
      <a>Bad Request test</a>
    </Link>
    <br/>
    <Link href="/tesst">
      <a>Not Found test</a>
    </Link>
  </div>
)

export default Test
