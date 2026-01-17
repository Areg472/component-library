import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { CurrencyConverter } from "@/components/CurrencyConverter";

export const metadata: Metadata = {
  title: "Areg's Component Library - Currency Converter",
  description:
    "A customizable currency converter component with the API included!",
};

export default function CurrencyconverterPage() {
  const componentSource = `"use client";

import { useState, useEffect } from "react";
import { Select } from "./Select";

export function CurrencyConverter({
  ContainerClassName,
}: {
  ContainerClassName?: string;
}) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AMD");
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);

  const currencyOptions = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SPL",
    "SRD", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR",
    "ZMW", "ZWL"
  ];

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          \`https://open.er-api.com/v6/latest/\${fromCurrency}\`
        );
        const data = await response.json();

        if (data.result === "success") {
          setRates(data.rates);
        } else {
          setError("Failed to fetch exchange rates");
        }
      } catch (err) {
        setError("Error fetching exchange rates");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      const result = amount * rates[toCurrency];
      setConvertedAmount(result);
    }
  }, [amount, rates, toCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className={ContainerClassName}>
      <input
        type="number"
        className="border-2 border-black"
        value={amount}
        onChange={handleAmountChange}
        min="0"
        step="1"
      />
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          From:{" "}
          <Select
            options={currencyOptions}
            className="ml-2"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          />
        </div>
        <div className="flex flex-row items-center">
          To:{" "}
          <Select
            options={currencyOptions}
            className="ml-2"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          />
        </div>
        {loading && <p>Loading exchange rates...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
    </div>
  );
}
`;

  const basicExample = `import { CurrencyConverter } from "@/components/CurrencyConverter";

export default function Example() {
  return (
    <>
      <CurrencyConverter ContainerClassName="text-black border-black border-2 w-64 p-4" />
      <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
    </>
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Currency Converter
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable currency converter component with the API included!
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Currency Converter Example" code={basicExample}>
        <CurrencyConverter ContainerClassName="text-black border-black border-2 w-64" />
        <a href="https://www.exchangerate-api.com" className="text-black">
          Rates By Exchange Rate API
        </a>
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Currency Converter
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                ContainerClassName?: string
              </code>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📦 Required Dependency
            </h3>
            <p className="text-gray-700 mb-2">
              This component requires the{" "}
              <span className="underline text-blue-500">
                <a href="/select">Select</a>
              </span>{" "}
              component to function properly.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ⚠️ Required Attribution
            </h3>
            <p className="text-gray-700 mb-2">
              You must include an attribution when using this component like
              this:
            </p>
            <div className="bg-white rounded p-3 border border-gray-300">
              <code className="text-sm text-gray-800">
                {
                  '<a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>'
                }
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
