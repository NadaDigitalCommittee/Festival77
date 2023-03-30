import contentful from 'contentful';
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
  DEPLOY_ENV,
  // ESLintに認識してもらえない
  // eslint-disable-next-line import/no-unresolved, import/extensions
} from '$env/static/private';

const params = {
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_TOKEN,
  environment: CONTENTFUL_ENVIRONMENT,
  host: 'preview.contentful.com',
};

if (DEPLOY_ENV === 'RELEASE') {
  params.accessToken = CONTENTFUL_DELIVERY_TOKEN;
  params.host = 'cdn.contentful.com';
}

const client = contentful.createClient(params);

export default client;
