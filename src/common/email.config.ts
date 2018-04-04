export default {
    'register': {
        subject: '邮箱注册激活',
        html: (data) => { return `<div class="aapl-desktop-div" style="display:block;padding:0;margin:0;height:100%;max-height:none;min-height:none;line-height:normal;overflow:visible;">
        <table class="aapl-desktop-tbl" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;border-spacing:0;width:742px;">
          <tbody><tr>
            <td class="left-gutter" style="width:40px;"></td>
            <td align="left"></td>
            <td align="right" style="font-size:32px; font-weight:300; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: rgb(153,153,153)">注册激活</td>
            <td class="right-gutter" style="width:40px;"></td>
          </tr>
          <tr height="20"><td colspan="4"></td></tr><tr>
        
          </tr><tr>
            <td colspan="4" align="center">
            <table id="content-tbl" border="0" cellpadding="0" cellspacing="0" align="left" style="font-family:'-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;border-collapse:collapse;border-spacing:0;">
                <tbody><tr>
                    <td class="left-gutter" style="width:20px;"></td>
                    <td align="left" id="content-cell" style="border-top:1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;padding-top:40px;padding-bottom:60px;">
                        ${data.name}：您好：			    
                        <p>欢迎注册</p>
                        <p>点击链接完成注册<a href="${data.url}" target="_blank" rel="noopener nofollow">${data.url}</a> </p>
                        
                    </td>
                    <td class="right-gutter" style="width:20px;"></td>
                </tr>
            </tbody></table>
              </td>
        </tr>
        <tr class="footer-spacer" style="height:50px"><td colspan="4"></td></tr>
        <tr>
          <td></td>
          <td class="" colspan="2" align="center" style="font-size:12px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; color: rgb(153,153,153)">
            <img class="large-footer-logo" width="26" height="26" border="0" src="http://r.mzstatic.com/email/images_shared/logo_apple_small_d-2x.png" style="border:none;padding:0;margin:0;-ms-interpolation-mode: bicubic;">
            <img class="small-footer-logo" width="14" height="14" border="0" src="http://r.mzstatic.com/email/images_shared/logo_apple_small_m-3x.png" style="display:none;border:none;padding:0;margin:0;-ms-interpolation-mode: bicubic;">
          </td>
          <td></td>
        </tr>
        <tr height="8"><td colspan="4"></td></tr>
        <tr>
          <td></td>
          <td colspan="2" align="center" style="font-size:12px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; color: rgb(153,153,153)">
            <a href="https://xp.apple.com/report/2/its_mail_sf?responseType=redirect&amp;emailType=sec_recentdl&amp;lang=zh_cn&amp;eventType=linkClick&amp;redirectUrl=https%3A%2F%2Fbuy.itunes.apple.com%2FWebObjects%2FMZFinance.woa%2Fwa%2FaccountSummary" style="color:#0073ff;" target="_blank">Apple ID 摘要</a>&nbsp;•&nbsp;<a href="https://xp.apple.com/report/2/its_mail_sf?responseType=redirect&amp;emailType=sec_recentdl&amp;lang=zh_cn&amp;eventType=linkClick&amp;redirectUrl=http%3A%2F%2Fwww.apple.com%2Flegal%2Fitunes%2Fappstore%2Fcn%2Fterms.html%23SALE" style="color:#0073ff;" target="_blank">销售条款</a>&nbsp;•&nbsp;<a href="https://xp.apple.com/report/2/its_mail_sf?responseType=redirect&amp;emailType=sec_recentdl&amp;lang=zh_cn&amp;eventType=linkClick&amp;redirectUrl=https%3A%2F%2Fwww.apple.com%2Fcn%2Fprivacy%2F" style="color:#0073ff;" target="_blank">隐私政策</a>
          </td>
          <td></td>
        </tr>
        <tr height="25"><td colspan="4"></td></tr>
        <tr>
          <td></td>
          <td colspan="2" align="center" style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(153,153,153)">
                        Copyright © 2018 Apple Distribution International, <br><a href="https://xp.apple.com/report/2/its_mail_sf?responseType=redirect&amp;emailType=sec_recentdl&amp;lang=zh_cn&amp;eventType=linkClick&amp;redirectUrl=https%3A%2F%2Fwww.apple.com%2Fcn%2Flegal%2F" style="color:#1187FF" target="_blank">保留所有权利。</a>
                  </td>
          <td></td>
        </tr>
        <tr height="25"><td colspan="4" height="30"></td></tr>
        </tbody></table>
        </div>`}
    },
    "verificationCode": {
        subject: "验证码",
        html: (data) => {
            return `你的验证码是：${data.code}`;
        }
    }
}