import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import emailConfig from './email.config';
import CONFIG from '../../config';

// 开启一个 SMTP 连接池
const transport = nodemailer.createTransport(smtpTransport({
  host: CONFIG.email.host, // 主机
  secure: true, // 使用 SSL
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: CONFIG.email.user, // 账号
    pass: CONFIG.email.pass // 密码
  }
}));

/**
 * 发送邮件
 * @param to 目标邮箱
 * @param type 邮件类型
 * @param data 模板填充所需的数据
 */
export const sendEmail = (to, type, data = {}) => {
    const { subject, html } = emailConfig[type];
    // 设置邮件内容
    var mailOptions = {
        from: `${CONFIG.appName}<755836844@qq.com>`, // 发件地址
        to, // 收件列表
        subject, // 标题
        text: subject,
        html: html(data) // html 内容
    }

    return new Promise((resolve, reject) => {
        // 发送邮件
        transport.sendMail(mailOptions, function(error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    })
} 
