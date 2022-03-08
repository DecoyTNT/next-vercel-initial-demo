import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
