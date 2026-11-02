import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { routes } from '../domain/routes';
import { SitemapGenerator } from '../domain/seo';

export const GET: APIRoute = () =>
  new Response(new SitemapGenerator(site, routes.pages).render(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
