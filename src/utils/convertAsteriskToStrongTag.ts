import { primaryTextClass } from "@/data/theme";

export default function convertAsteriskToStrongTag(str: string) {
  return str
    .replace(/\*\*(.*?)\*\*/g, `<strong class="font-normal ${primaryTextClass}">$1</strong>`)
    .replace(/\*(.*?)\*/g, `<em class="${primaryTextClass}">$1</em>`);
}
