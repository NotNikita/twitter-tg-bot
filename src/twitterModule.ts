import { TwitterOpenApi } from 'twitter-openapi-typescript';

export class TwitterOpenApiService {
  api: TwitterOpenApi;
  client: any;
  ct0 =
    'a57f82994f7e9f1884c81f242056137d432abf050d64c672b645deaa962e298bdc1baba51d8bd82a1b2f089445299ae748a94ad0defb2eb9c7ac468bf1244f4a1d348a305f9cb0ea38749d0b7bb0515a';
  auth_token = '5e0a7d8a2e6521bf8f7c71bf2a439dd5cb9e4704';

  constructor() {
    this.api = new TwitterOpenApi();
    this.getClientFromCookies();
  }

  async getUserInfoByTag(tag = 'elonmusk') {
    const response = await this.client
      .getUserApi()
      .getUserByScreenName({ screenName: tag });
    console.log(response.data.legacy);
    return JSON.stringify(response.data.legacy);
  }

  async getClientFromCookies() {
    this.client = await this.api.getClientFromCookies({
      ct0: this.ct0,
      auth_token: this.auth_token,
    });
  }
}
