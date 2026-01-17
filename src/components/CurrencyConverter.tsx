"use client";

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
    "AED", // United Arab Emirates Dirham
    "AFN", // Afghan Afghani
    "ALL", // Albanian Lek
    "AMD", // Armenian Dram
    "ANG", // Netherlands Antillean Guilder
    "AOA", // Angolan Kwanza
    "ARS", // Argentine Peso
    "AUD", // Australian Dollar
    "AWG", // Aruban Florin
    "AZN", // Azerbaijani Manat
    "BAM", // Bosnia-Herzegovina Convertible Mark
    "BBD", // Barbadian Dollar
    "BDT", // Bangladeshi Taka
    "BGN", // Bulgarian Lev
    "BHD", // Bahraini Dinar
    "BIF", // Burundian Franc
    "BMD", // Bermudan Dollar
    "BND", // Brunei Dollar
    "BOB", // Bolivian Boliviano
    "BRL", // Brazilian Real
    "BSD", // Bahamian Dollar
    "BTN", // Bhutanese Ngultrum
    "BWP", // Botswanan Pula
    "BYN", // Belarusian Ruble
    "BZD", // Belize Dollar
    "CAD", // Canadian Dollar
    "CDF", // Congolese Franc
    "CHF", // Swiss Franc
    "CLP", // Chilean Peso
    "CNY", // Chinese Yuan
    "COP", // Colombian Peso
    "CRC", // Costa Rican Colón
    "CUP", // Cuban Peso
    "CVE", // Cape Verdean Escudo
    "CZK", // Czech Republic Koruna
    "DJF", // Djiboutian Franc
    "DKK", // Danish Krone
    "DOP", // Dominican Peso
    "DZD", // Algerian Dinar
    "EGP", // Egyptian Pound
    "ERN", // Eritrean Nakfa
    "ETB", // Ethiopian Birr
    "EUR", // Euro
    "FJD", // Fijian Dollar
    "FKP", // Falkland Islands Pound
    "FOK", // Faroese Króna
    "GBP", // British Pound Sterling
    "GEL", // Georgian Lari
    "GGP", // Guernsey Pound
    "GHS", // Ghanaian Cedi
    "GIP", // Gibraltar Pound
    "GMD", // Gambian Dalasi
    "GNF", // Guinean Franc
    "GTQ", // Guatemalan Quetzal
    "GYD", // Guyanaese Dollar
    "HKD", // Hong Kong Dollar
    "HNL", // Honduran Lempira
    "HRK", // Croatian Kuna
    "HTG", // Haitian Gourde
    "HUF", // Hungarian Forint
    "IDR", // Indonesian Rupiah
    "ILS", // Israeli New Sheqel
    "IMP", // Manx Pound
    "INR", // Indian Rupee
    "IQD", // Iraqi Dinar
    "IRR", // Iranian Rial
    "ISK", // Icelandic Króna
    "JEP", // Jersey Pound
    "JMD", // Jamaican Dollar
    "JOD", // Jordanian Dinar
    "JPY", // Japanese Yen
    "KES", // Kenyan Shilling
    "KGS", // Kyrgystani Som
    "KHR", // Cambodian Riel
    "KID", // Kiribati Dollar
    "KMF", // Comorian Franc
    "KRW", // South Korean Won
    "KWD", // Kuwaiti Dinar
    "KYD", // Cayman Islands Dollar
    "KZT", // Kazakhstani Tenge
    "LAK", // Laotian Kip
    "LBP", // Lebanese Pound
    "LKR", // Sri Lankan Rupee
    "LRD", // Liberian Dollar
    "LSL", // Lesotho Loti
    "LYD", // Libyan Dinar
    "MAD", // Moroccan Dirham
    "MDL", // Moldovan Leu
    "MGA", // Malagasy Ariary
    "MKD", // Macedonian Denar
    "MMK", // Myanma Kyat
    "MNT", // Mongolian Tugrik
    "MOP", // Macanese Pataca
    "MRU", // Mauritanian Ouguiya
    "MUR", // Mauritian Rupee
    "MVR", // Maldivian Rufiyaa
    "MWK", // Malawian Kwacha
    "MXN", // Mexican Peso
    "MYR", // Malaysian Ringgit
    "MZN", // Mozambican Metical
    "NAD", // Namibian Dollar
    "NGN", // Nigerian Naira
    "NIO", // Nicaraguan Córdoba
    "NOK", // Norwegian Krone
    "NPR", // Nepalese Rupee
    "NZD", // New Zealand Dollar
    "OMR", // Omani Rial
    "PAB", // Panamanian Balboa
    "PEN", // Peruvian Nuevo Sol
    "PGK", // Papua New Guinean Kina
    "PHP", // Philippine Peso
    "PKR", // Pakistani Rupee
    "PLN", // Polish Zloty
    "PYG", // Paraguayan Guarani
    "QAR", // Qatari Rial
    "RON", // Romanian Leu
    "RSD", // Serbian Dinar
    "RUB", // Russian Ruble
    "RWF", // Rwandan Franc
    "SAR", // Saudi Riyal
    "SBD", // Solomon Islands Dollar
    "SCR", // Seychellois Rupee
    "SDG", // Sudanese Pound
    "SEK", // Swedish Krona
    "SGD", // Singapore Dollar
    "SHP", // Saint Helena Pound
    "SLE", // Sierra Leonean Leone
    "SLL", // Sierra Leonean Leone (old)
    "SOS", // Somali Shilling
    "SPL", // Seborgan Luigino
    "SRD", // Surinamese Dollar
    "STN", // São Tomé and Príncipe Dobra
    "SYP", // Syrian Pound
    "SZL", // Swazi Lilangeni
    "THB", // Thai Baht
    "TJS", // Tajikistani Somoni
    "TMT", // Turkmenistani Manat
    "TND", // Tunisian Dinar
    "TOP", // Tongan Paʻanga
    "TRY", // Turkish Lira
    "TTD", // Trinidad and Tobago Dollar
    "TVD", // Tuvaluan Dollar
    "TWD", // New Taiwan Dollar
    "TZS", // Tanzanian Shilling
    "UAH", // Ukrainian Hryvnia
    "UGX", // Ugandan Shilling
    "USD", // United States Dollar
    "UYU", // Uruguayan Peso
    "UZS", // Uzbekistan Som
    "VES", // Venezuelan Bolívar
    "VND", // Vietnamese Dong
    "VUV", // Vanuatu Vatu
    "WST", // Samoan Tala
    "XAF", // CFA Franc BEAC
    "XCD", // East Caribbean Dollar
    "XDR", // Special Drawing Rights
    "XOF", // CFA Franc BCEAO
    "XPF", // CFP Franc
    "YER", // Yemeni Rial
    "ZAR", // South African Rand
    "ZMW", // Zambian Kwacha
    "ZWL", // Zimbabwean Dollar
  ];

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`,
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
    e: React.ChangeEvent<HTMLSelectElement>,
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
          From:{"  "}
          <Select
            options={currencyOptions}
            className="ml-2"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          ></Select>
        </div>
        <div className="flex flex-row items-center">
          To:{"  "}
          <Select
            options={currencyOptions}
            className="ml-2"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          ></Select>
        </div>
        {loading && <p>Loading exchange rates...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
    </div>
  );
  // attribution is required to use this component <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
}
