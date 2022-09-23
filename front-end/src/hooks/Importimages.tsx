const Importimages = (r: any) => {
  const cache: string[] = [];
  r.keys().forEach((key: any) => (cache[key] = r(key)));

  const images = Object.entries(cache).map(
    (module: any) => module[1].default.src
  );
  return images;
};

export default Importimages;
