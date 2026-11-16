export async function sendQuotation(
  endpoint: string,
  fields: FormData,
  request: typeof fetch = fetch,
): Promise<'accepted' | 'limited' | 'failed'> {
  try {
    const response = await request(endpoint, {
      method: 'POST',
      body: fields,
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      redirect: 'error',
      signal: AbortSignal.timeout(15000),
    });
    if (response.status === 429) return 'limited';
    return response.ok ? 'accepted' : 'failed';
  } catch {
    return 'failed';
  }
}
