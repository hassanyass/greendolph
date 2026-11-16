const photoDirectory = '/images/home';

export const homeServicePhotos: Readonly<Record<string, string | undefined>> = {
  electromechanical: `${photoDirectory}/electromechanical`,
  'ceilings-and-partitions': `${photoDirectory}/ceilings-and-partitions`,
  'air-conditioning': `${photoDirectory}/air-conditioning`,
  'carpentry-and-wood-flooring': `${photoDirectory}/carpentry-and-wood-flooring`,
  'building-cleaning': `${photoDirectory}/building-cleaning`,
  'plumbing-and-sanitary': `${photoDirectory}/plumbing-and-sanitary`,
  'engraving-and-ornamentation': `${photoDirectory}/engraving-and-ornamentation`,
  painting: `${photoDirectory}/painting`,
  plaster: `${photoDirectory}/plaster`,
  'floor-and-wall-tiling': `${photoDirectory}/floor-and-wall-tiling`,
};

export const homeProcessPhoto = `${photoDirectory}/process`;
