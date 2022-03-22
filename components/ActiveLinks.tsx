import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
  
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLinks: FC<Props> = ( { text, href } ) => {
  
  const { asPath } = useRouter();

  // console.log(router);
  return (
      <Link href={ href }>
        <a style= { asPath === href ? style: null }> { text } </a>
      </Link>
  )
};