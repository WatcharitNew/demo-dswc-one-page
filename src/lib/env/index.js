const envObj = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',
}

export default envObj
