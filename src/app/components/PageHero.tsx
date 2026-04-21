import { Link } from "react-router";

interface PageHeroProps {
  title: string;
  imageSrc: string;
  /** Optional yellow label above the main title */
  titleTop?: string;
  buttonText?: string;
  /** Navigate to internal route */
  buttonTo?: string;
  /** Navigate to external URL */
  buttonHref?: string;
  /** Callback (e.g. scroll to section) */
  onButtonClick?: () => void;
}

export function PageHero({
  title,
  titleTop,
  imageSrc,
  buttonText,
  buttonTo,
  buttonHref,
  onButtonClick,
}: PageHeroProps) {
  const btn = buttonText && (
    <ButtonEl to={buttonTo} href={buttonHref} onClick={onButtonClick}>
      {buttonText}
    </ButtonEl>
  );

  return (
    <div className="relative w-full min-h-[280px] md:min-h-[340px] overflow-hidden flex items-center">
      {/* Background */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full mx-auto max-w-[1200px] px-[16px] md:px-[55px] py-[48px] md:py-[64px] flex flex-col gap-[8px] items-start">
        {titleTop && (
          <p
            className="uppercase"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: "26px",
              color: "#DFBE22",
            }}
          >
            {titleTop}
          </p>
        )}
        <h1
          className="uppercase"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            fontSize: titleTop ? 36 : 34,
            lineHeight: titleTop ? "33px" : "43px",
            color: "#F5F3E9",
          }}
        >
          {title}
        </h1>
        {btn}
      </div>
    </div>
  );
}

function ButtonEl({
  to,
  href,
  onClick,
  children,
}: {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const cls =
    "bg-[#DFBE22] px-[16px] py-[8px] text-black w-fit" +
    " font-['Oswald',sans-serif] font-medium text-[20px] leading-[24px] uppercase" +
    " hover:bg-[#C9AB1F] transition-colors cursor-pointer";

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}
