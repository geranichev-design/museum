import { useEffect, useRef, useState } from "react";
import "./DonatePage.css";

type Currency = "UAH" | "USD" | "EUR";

type DonationRow = {
  label: string;
  value: string;
};

type DonationDetails = {
  title: string;
  lang: "uk" | "en";
  rows: DonationRow[];
};

const DETAILS: Record<Currency, DonationDetails> = {
  UAH: {
    lang: "uk",
    title: "Реквізити благодійного рахунку музею:",
    rows: [
      { label: "Одержувач:", value: 'Національний музей "Чорнобиль"' },
      { label: "Юридична адреса:", value: "04071, м. Київ, провулок Хорива, 1" },
      { label: "Контактний тел.:", value: "(044) 425-44-62" },
      { label: "код ЄДРПОУ:", value: "24520773" },
      { label: "р/рах.:", value: "№UA028201720313231001301007687 – благодійні внески" },
      { label: "В призначенні платежу зазначати:", value: "Нецільова благодійна допомога" },
    ],
  },
  USD: {
    lang: "en",
    title: "For donations in USD:",
    rows: [
      { label: "Beneficiary:", value: "National Museum “Chornobyl”" },
      { label: "Company address:", value: "UA 01001 Provulok Khoryva, 1, Kyiv, Ukraine" },
      { label: "IBAN:", value: "UA103052990000026308045000415" },
      { label: "Beneficiary bank:", value: "JSC CB PRIVATBANK, Kyiv, Ukraine" },
      { label: "SWIFT/BIC:", value: "PBANUA2X" },
      { label: "Correspondent bank:", value: "JPMorgan Chase Bank, New York, USA" },
      { label: "SWIFT/BIC:", value: "IRVTUS3N" },
      { label: "Correspondent account:", value: "890-0085-754" },
      { label: "Payment details:", value: "Unrestricted charitable contribution (non-earmarked charitable assistance)" },
    ],
  },
  EUR: {
    lang: "en",
    title: "For donations in EUR:",
    rows: [
      { label: "Beneficiary:", value: "National Museum “Chornobyl”" },
      { label: "Company address:", value: "UA 01001 Provulok Khoryva, 1, Kyiv, Ukraine" },
      { label: "IBAN:", value: "UA103052990000026308045000415" },
      { label: "Beneficiary bank:", value: "JSC CB PRIVATBANK, Kyiv, Ukraine" },
      { label: "SWIFT/BIC:", value: "PBANUA2X" },
      { label: "Correspondent bank:", value: "Commerzbank AG, Frankfurt am Main, Germany" },
      { label: "SWIFT/BIC:", value: "COBADEFF" },
      { label: "Correspondent account:", value: "400886700401" },
      { label: "Payment details:", value: "Unrestricted charitable contribution (non-earmarked charitable assistance)" },
    ],
  },
};

export default function DonatePage() {
  const [currency, setCurrency] = useState<Currency>("UAH");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const resetTimer = useRef<number | undefined>(undefined);
  const details = DETAILS[currency];

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyValue = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopiedIndex(null), 1600);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <main className="donate-page">
      <section className="donate-card" aria-label="Благодійні реквізити музею">
        <div className="donate-tabs" role="tablist" aria-label="Валюта рахунку">
          {(Object.keys(DETAILS) as Currency[]).map((tab) => (
            <button
              className={`donate-tab${currency === tab ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={currency === tab}
              aria-controls="donation-details"
              id={`donation-tab-${tab.toLowerCase()}`}
              key={tab}
              onClick={() => {
                setCurrency(tab);
                setCopiedIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="donate-layout">
          <div
            className="donate-content"
            id="donation-details"
            role="tabpanel"
            aria-labelledby={`donation-tab-${currency.toLowerCase()}`}
            lang={details.lang}
          >
            <h1 className="donate-title">
              <span className="donate-title-mark" aria-hidden="true" />
              {details.title}
            </h1>

            <dl className="donate-details">
              {details.rows.map((row, index) => (
                <div className="donate-row" key={`${currency}-${row.label}-${index}`}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                  <button
                    className="donate-copy"
                    type="button"
                    aria-label={`${copiedIndex === index ? "Скопійовано" : "Скопіювати"}: ${row.value}`}
                    title={copiedIndex === index ? "Скопійовано" : "Скопіювати"}
                    onClick={() => copyValue(row.value, index)}
                  >
                    <img className="donate-copy-icon" src="/icon_copy.svg" alt="" />
                  </button>
                </div>
              ))}
            </dl>
          </div>

          <div className="donate-art" aria-hidden="true">
            <img src="/donate-art.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
