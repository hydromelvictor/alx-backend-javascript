export default function loadBalancer(chinaDownload, USDownload) {
  const china = chinaDownload();
  const us = USDownload();
  return Promise.race([china, us]).then((result) => result);
}
