import { Configuration } from '@apttus/core';
export const environment: Configuration = {
  production: false,
  organizationId: '00DP0000003pQPR',
  defaultImageSrc: './assets/images/default.png',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  enableErrorLogging: true,
  enableErrorReporting: true,
  enableMultiCurrency: false,
  enableQueryLogs: true,
  enablePerformanceLogs: true,
  defaultCurrency: 'USD',
  bufferTime: 10,
  maxBufferSize: 5,
  disableBuffer: false,
  subqueryLimit: 10,
  disableCache: false,
  encryptResponse: false,
  cartRetryLimit: 3,
  productIdentifier: 'Id',
  type: 'Salesforce',
  debounceTime: 1000,
  endpoint: 'https://dcwu19test-cpqqacommunity1.cs4.force.com/pcom',
  proxy: 'https://apttus-proxy.herokuapp.com',
  sentryDsn: 'https://6ad10246235742dc89f89b4c3f53f4aa@sentry.io/1230495',
  useIndexedDB: true,
  storefront: 'P-Commerce',
  expandDepth: 7,
  hashRouting: false
};
