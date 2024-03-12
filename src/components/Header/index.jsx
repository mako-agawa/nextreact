import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  // { href: "/test", label: "Test" },
];

export const Header =() => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} legacyBehavior href={item.href}>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
      {/* <Link legacyBehavior href="/">
      <a className={classes.anchor}>Index</a>
      </Link>
      <Link legacyBehavior href="/about">
      <a className={classes.anchor}>About</a>
      </Link> */}
    </header>
  );
}
