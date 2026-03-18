export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error fetching ${url}: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data as T
}
