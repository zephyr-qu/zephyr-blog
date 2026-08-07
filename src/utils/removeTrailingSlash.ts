export default function removeTrailingSlash(pathname: string) {
  return pathname.replace(/\/$/, "");
}
