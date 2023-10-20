/**
 * 국가 언어 코드
 * @see https://www.science.co.il/language/Locale-codes.php
 */
export const Locale = {
  KO: 'ko', // 한국
  EN: 'en-us', // 미국
  JA: 'ja', // 일본
  ZH: 'zh-cn', // 중국
} as const;

/**
 * 통화 코드
 * @see https://www.techonthenet.com/js/currency_codes.php
 */
export const Currency = {
  KRW: 'KRW',
  USD: 'USD',
  JPY: 'JPY',
  CNY: 'CNY',
} as const;

/**
 * 통화: 언어코드
 */
export const CurrencyMappingLocale = {
  KRW: Locale.KO,
  USD: Locale.EN,
  JPY: Locale.JA,
  CNY: Locale.ZH,
} as const;

/**
 * 통화 코드별 number 표시
 * @param {number} value 입력 되는 숫자 값
 * @param {keyof typeof Currency} currency - 통화 코드
 * @returns {string} 천단위 콤마 찍힌 값
 */
function numberFormatWithCurrency(
  value: number | bigint | undefined,
  currency?: keyof typeof Currency,
): string {
  if (value === undefined) return '-';

  const locale = currency ? CurrencyMappingLocale[currency] : Locale.KO;
  const options = currency ? { style: 'currency', currency } : {};
  // locale: ko-KR로 세팅, 소수점 4자리까지 표현
  return new Intl.NumberFormat(locale, { ...options }).format(value);
}

export default numberFormatWithCurrency;
