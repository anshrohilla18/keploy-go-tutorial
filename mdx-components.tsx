import type { MDXComponents } from "mdx/types";
import Callout from "@/components/Callout";
import Pre from "@/components/Pre";
import HowKeployWorks from "@/components/HowKeployWorks";
import Screenshot from "@/components/Screenshot";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Pre,
    Callout,
    HowKeployWorks,
        Screenshot,
  };
}