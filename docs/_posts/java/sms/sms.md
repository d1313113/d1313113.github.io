---
draft: false
category: java
tags:
  - cloud
  - sms
date: 2021-03-18
title: 对接短信服务
# 固定标题
vssue-title: 对接短信服务
---
# 对接短信服务

## 开通短信服务
先开通[腾讯云短信服务](https://console.cloud.tencent.com/smsv2),开通后会赠送100条短信

![sms01](~@img/java/sms/2021-03-18-sms-01.png)

## 创建签名
1. 在左侧菜单点开「 签名管理 」-> 「 创建签名 」
![sms02](~@img/java/sms/2021-03-18-sms-02.png)

2. 根据实际情况填写资料,并提交审核,一般审核在2个小时以内
![sms03](~@img/java/sms/2021-03-18-sms-03.png)

签名的内容就是短信中显示的【】内容,例如上面填写了`Cumelmell`,后面会展示成【Cumelmell】

## 创建正文模板
正文模板是下发的短信内容

1. 点击「 正文模板管理 」-> 「 创建正文模板 」
![sms04](~@img/java/sms/2021-03-18-sms-04.png)

2. 根据实际情况填写

![sms05](~@img/java/sms/2021-03-18-sms-05.png)

****PS:**** 这里使用推荐模板的话,缩短审核时间,大部分场景都能覆盖到

![sms06](~@img/java/sms/2021-03-18-sms-06.png)

## 创建应用
1. 在左侧菜单「 应用列表 」-> 「 创建应用 」

![sms07](~@img/java/sms/2021-03-18-sms-07.png)

2. 按照实际需求填写

![sms08](~@img/java/sms/2021-03-18-sms-08.png)

3. 应用创建成功

![sms09](~@img/java/sms/2021-03-18-sms-09.png)

## 通过 SDK 发送短信
[JAVA SDK](https://cloud.tencent.com/document/product/382/43194)

1. 引入`SDK`
```xml
<dependency>
  <groupId>com.tencentcloudapi</groupId>
  <artifactId>tencentcloud-sdk-java</artifactId>
  <version>3.1.226</version><!-- 注：这里只是示例版本号，请获取并替换为 最新的版本号 -->
</dependency>
```

2. 创建短信服务工具

  - SmsUtils
```java
package ltd.cumelmell.sms.utils;

import ltd.cumelmell.sms.config.SmsProperties;
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.sms.v20190711.models.SendSmsRequest;
import com.tencentcloudapi.sms.v20190711.models.SendSmsResponse;
import com.tencentcloudapi.sms.v20190711.SmsClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@EnableConfigurationProperties(SmsProperties.class)
public class SmsUtils {

    @Autowired
    private SmsProperties smsProperties;

    public static final String domain = "sms.tencentcloudapi.com";

    /**
     * 发送短信
     * @param phone 手机号
     * @param code 验证码
     * @param appId 短信供应商应用id
     * @param sign 短信签名
     * @param templateId 短信模板id
     * @return 短信发送结果
     */
    public SendSmsResponse sendSms(String phone, String code, String appId, String sign, String templateId) {
        try {
            /* 必要步骤：
             * 实例化一个认证对象，入参需要传入腾讯云账户密钥对 secretId 和 secretKey
             * 本示例采用从环境变量读取的方式，需要预先在环境变量中设置这两个值
             * 您也可以直接在代码中写入密钥对，但需谨防泄露，不要将代码复制、上传或者分享给他人
             * CAM 密钥查询：https://console.cloud.tencent.com/cam/capi
             */
            Credential cred = new Credential(smsProperties.getSecretId(), smsProperties.getSecretKey());
            // 实例化一个 http 选项，可选，无特殊需求时可以跳过
            HttpProfile httpProfile = new HttpProfile();
            // 设置代理
            // httpProfile.setProxyHost("host");
            // httpProfile.setProxyPort(10086);
            /* SDK 默认使用 POST 方法。
             * 如需使用 GET 方法，可以在此处设置，但 GET 方法无法处理较大的请求 */
            // httpProfile.setReqMethod("POST");
            /* SDK 有默认的超时时间，非必要请不要进行调整
             * 如有需要请在代码中查阅以获取最新的默认值 */
            // httpProfile.setConnTimeout(60);
            /* SDK 会自动指定域名，通常无需指定域名，但访问金融区的服务时必须手动指定域名
             * 例如 SMS 的上海金融区域名为 sms.ap-shanghai-fsi.tencentcloudapi.com */
            // httpProfile.setEndpoint(domain);
            /* 非必要步骤:
             * 实例化一个客户端配置对象，可以指定超时时间等配置 */
            ClientProfile clientProfile = new ClientProfile();
            /* SDK 默认用 TC3-HMAC-SHA256 进行签名
             * 非必要请不要修改该字段 */
            clientProfile.setSignMethod("HmacSHA256");
            clientProfile.setHttpProfile(httpProfile);
            /* 实例化 SMS 的 client 对象
             * 第二个参数是地域信息，可以直接填写字符串 ap-guangzhou，或者引用预设的常量 */
            SmsClient client = new SmsClient(cred, "ap-guangzhou", clientProfile);
            /* 实例化一个请求对象，根据调用的接口和实际情况，可以进一步设置请求参数
             * 您可以直接查询 SDK 源码确定接口有哪些属性可以设置
             * 属性可能是基本类型，也可能引用了另一个数据结构
             * 推荐使用 IDE 进行开发，可以方便地跳转查阅各个接口和数据结构的文档说明 */
            SendSmsRequest req = new SendSmsRequest();
            /* 填充请求参数，这里 request 对象的成员变量即对应接口的入参
             * 您可以通过官网接口文档或跳转到 request 对象的定义处查看请求参数的定义
             * 基本类型的设置:
             * 帮助链接：
             * 短信控制台：https://console.cloud.tencent.com/smsv2
             * sms helper：https://cloud.tencent.com/document/product/382/3773 */
            /* 短信应用 ID: 在 [短信控制台] 添加应用后生成的实际 SDKAppID，例如1400006666 */
            req.setSmsSdkAppid(appId);
            /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名，可登录 [短信控制台] 查看签名信息 */
            req.setSign(sign);
            /* 国际/港澳台短信 senderid: 国内短信填空，默认未开通，如需开通请联系 [sms helper] */
            // String senderid = "xxx";
            // req.setSenderId(senderid);
            // req.setSenderId(null);
            /* 用户的 session 内容: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
            // String session = "xxx";
            // req.setSessionContext(session);
            /* 短信码号扩展号: 默认未开通，如需开通请联系 [sms helper] */
            /// String extendcode = "xxx";
            // req.setExtendCode(extendcode);
            /* 模板 ID: 必须填写已审核通过的模板 ID，可登录 [短信控制台] 查看模板 ID */
            req.setTemplateID(templateId);
            /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
             * 例如+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
            String[] phoneNumbers = {"+86" + phone};
            req.setPhoneNumberSet(phoneNumbers);
            /* 模板参数: 若无模板参数，则设置为空*/
            String[] templateParams = {code, smsProperties.getExpiredTime()};
            req.setTemplateParamSet(templateParams);
            /* 通过 client 对象调用 SendSms 方法发起请求。注意请求方法名与请求对象是对应的
             * 返回的 res 是一个 SendSmsResponse 类的实例，与请求对象对应 */
            SendSmsResponse res = client.SendSms(req);
            // 输出 JSON 格式的字符串回包
            System.out.println(SendSmsResponse.toJsonString(res));
            // 可以取出单个值，您可以通过官网接口文档或跳转到 response 对象的定义处查看返回字段的定义
            System.out.println(res.getRequestId());
            return res;
        } catch (TencentCloudSDKException e) {
            log.error("[短信服务] 发送短信异常,手机号:{}", phone, e);
            return null;
        }
    }
}

```

 - SmsProperties
```java
package ltd.cumelmell.sms.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "cumelmell.sms")
public class SmsProperties {
    String secretId;

    String secretKey;

    String SDKAppId;

    String templateId;

    String signName;

    String expiredTime;
}

```

监听器
 - SmsListener.java
```java
package ltd.cumelmell.sms.listener;


import ltd.cumelmell.sms.config.SmsProperties;
import ltd.cumelmell.sms.utils.SmsUtils;
import com.tencentcloudapi.sms.v20190711.models.SendSmsResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.amqp.core.ExchangeTypes;
import org.springframework.amqp.rabbit.annotation.Exchange;
import org.springframework.amqp.rabbit.annotation.Queue;
import org.springframework.amqp.rabbit.annotation.QueueBinding;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Map;

@Slf4j
@Component
@EnableConfigurationProperties(SmsProperties.class)
public class SmsListener {
    @Autowired
    private SmsUtils smsUtils;

    @Autowired
    private SmsProperties smsProperties;

    /**
     * 发送短信验证码
     * @param msg 发送短信所需参数
     */
    @RabbitListener(bindings = @QueueBinding(
            value = @Queue("sms.verify.code.queue"),
            exchange = @Exchange(
                    value = "cumelmell.sms.exchange",
                    ignoreDeclarationExceptions = "true",
                    type = ExchangeTypes.TOPIC
            ),
            key = "sms.verify.code"
    ))
    public void listenSms(Map<String, String> msg) {
        if (msg == null || msg.size() == 0) {
            return;
        }
        final String phone = msg.get("phone");
        final String code = msg.get("code");

        if (StringUtils.isBlank(phone) || StringUtils.isBlank(code)) {
            return;
        }

        final SendSmsResponse res = this.smsUtils.sendSms(phone, code, smsProperties.getSDKAppId(), smsProperties.getSignName(), smsProperties.getTemplateId());
        System.out.println(res);
        log.info("[短信服务] 发送短信验证码, 手机号:{}", phone);
    }
}

```

配置文件
  - application.yml
```yml
cumelmell:
  sms:
    secretId: # 短信id
    secretKey: # 短信key
    SDKAppId: # 创建的应用 id
    templateId: # 上面申请的模板id
    signName: # 上面申请的签名
    expiredTime: 10
```

测试代码
 - SmsTest.java
```java
package ltd.cumelmell.sms.utils;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SmsUtilsTest {
    @Autowired
    private AmqpTemplate amqpTemplate;

    @Test
    public void testSendSms() throws InterruptedException {
        final Map<String, String> msg = new HashMap<>();
        msg.put("phone", "填入手机号码");
        msg.put("code", "54321");
        amqpTemplate.convertAndSend("cumelmell.sms.exchange", "sms.verify.code", msg);

        Thread.sleep(10 * 1000L);
    }
}

```

## 测试发送短信
执行单测,成功输出提示
![sms10](~@img/java/sms/2021-03-18-sms-10.png)

手机随后收到信息
![sms11](~@img/java/sms/2021-03-18-sms-11.png)


![sms11](~@img/common/capitalist.png)
