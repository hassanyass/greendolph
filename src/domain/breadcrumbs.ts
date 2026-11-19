import { services } from '../config/services.ts';
import { projects } from '../config/projects.ts';
import { breadcrumbCopy } from '../config/breadcrumb-copy.ts';
import { routes, type Locale, type PageDefinition } from './routes.ts';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbsFor(
  page: PageDefinition,
  locale: Locale,
): readonly BreadcrumbItem[] {
  const labels = breadcrumbCopy[locale];
  const home = {
    name: labels.home,
    path: routes.path('home', locale),
  };
  if (page.key.startsWith('service:')) {
    const service = services.find(({ id }) => id === page.key.slice(8));
    if (!service) throw new Error(`Unknown breadcrumb service ${page.key}.`);
    return [
      home,
      {
        name: labels.services,
        path: routes.path('services', locale),
      },
      { name: service.title[locale], path: page.paths[locale] },
    ];
  }
  if (page.key.startsWith('project:')) {
    const project = projects.find(({ id }) => id === page.key.slice(8));
    if (!project) throw new Error(`Unknown breadcrumb project ${page.key}.`);
    return [
      home,
      {
        name: labels.works,
        path: routes.path('works', locale),
      },
      {
        name: `${project.title[locale]} · ${project.location[locale]}`,
        path: page.paths[locale],
      },
    ];
  }
  return [];
}
