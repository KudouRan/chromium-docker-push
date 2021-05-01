require('dotenv').config();

import { getCookies } from './utils';
import createBrowser from './createbBrowser';

(async () => {
  const browser = await createBrowser();
  let page = await browser.newPage();
  await page.setCookie(
    ...getCookies(
      "CURRENT_FNVAL=80; _uuid=474950C2-9EC2-A4B5-BEBD-DC4D67D2A45137992infoc; blackside_state=1; fingerprint=8dfdcc7a4d3717b76fd69c9b013b3227; SESSDATA=8dbe56a3%2C1630739065%2Cdfe33%2A31; bili_jct=310a0768f441e53578f5426ab25f9908; DedeUserID=25105113; DedeUserID__ckMd5=ec5e3dafa433c207; sid=i4k1nhek; buvid3=5352B181-29D4-4101-8FB5-65D02B8F919A18549infoc; PVID=12; fingerprint3=a318682c183fc382c274fb22e5789b9f; fingerprint_s=d60abe48c7ed990c8e6f929972571787; buvid_fp=5352B181-29D4-4101-8FB5-65D02B8F919A18549infoc; buvid_fp_plain=5352B181-29D4-4101-8FB5-65D02B8F919A18549infoc; bfe_id=6f285c892d9d3c1f8f020adad8bed553",
      '.bilibili.com',
    ),
  );
  await page.goto('https://bilibili.com');

  await page.waitForTimeout(20000000000);
})();
