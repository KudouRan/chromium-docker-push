require('dotenv').config();

import { getCookies } from './utils';
import { paginationToJump } from './common/pagination';
import createBrowser from './createbBrowser';

(async () => {
  const browser = await createBrowser();
  const page = await browser.newPage();
  // await page.setCookie(
  //   ...getCookies(process.env.BILI_COOKIE_TEST, '.bilibili.com'),
  // );

  // Promise.all 同时执行下面的异步调用，全部完成后返回结果数组
  // const [navData, followListData] = await Promise.all([
  //   /** 使用完整的url */
  //   page.waitForResponse('https://api.bilibili.com/x/web-interface/nav'),
  //   /** 使用函数，参数t是response对象 */
  //   page.waitForResponse(t => t.url().includes('/x/relation/followings')),
  //   /** 跳转页面和获取信息必须同时进行，否则无法获取 */
  //   page.goto('https://space.bilibili.com/415244372/fans/follow'),
  // ]);

  // followListData是jsonp的数据（string），要获取json需要处理一下（js的基础）
  // console.log(await followListData.text());
  // // navData是json
  // console.log(await navData.json());

  await page.goto('https://space.bilibili.com/415244372/fans/follow');

  // // 跳转到第二页
  // await paginationToJump(page, 1);

  // //等待发生变化
  // await page.waitForSelector('.follow-content.section:not(.loading)');

  // const $listItem = await page.$$('.list-item');

  console.log('测试中。。。。。。。。。。。');

  console.log(await page.evaluate(() => window.navigator.userAgent));

  // await browser.close();
})();
