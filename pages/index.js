import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href="/test">
      <a>Go to test page</a>
    </Link>
  </div>
)

export default Index
