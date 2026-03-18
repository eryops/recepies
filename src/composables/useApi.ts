export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error fetching ${url}: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data as T
}

export async function apiPut<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Error putting to ${url}: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data as T
}

export async function apiPost<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Error posting to ${url}: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data as T
}
