---
title: Zigbee1
published: 2026-05-20
tags: [Markdown,zigbee]
category: zigbee
---

# **实验一**
## **一、实验目的及要求**
1、掌握IAR软件的安装和使用方法。  
2、掌握CC2530通用I/O端口相关寄存器的作用和配置方法。  
3、编程实现4个LED灯全亮、全灭、闪烁的流水灯效果。
## **二、实验环境**
IAR软件、CC2530开发板、Debugger数据下载线、电源线
## **三、实验内容及步骤**
1、安装IAR软件、Debugger驱动程序。  
2、根据实验要求设计电路图，配置通用I/O端口相关寄存器。  
3、在IAR中新建工程文件，用C语言编写程序，实现4个LED灯全亮、全灭、闪烁的流水灯效果。
```c
#include <iocc2530.h>
#define LED1 P1_0 
#define LED2 P1_1 
#define LED3 P0_4 
void Delay(void)
{
    unsigned int i, j;
    for(i = 500; i > 0; i--)
        for(j = 500; j > 0; j--);
}
void IO_Init(void)
{
    P1DIR |= 0x03; 
    P0DIR |= 0x10; 
}
void main(void)
{
    IO_Init();  
    while(1)
    {
      LED1=0;
      Delay();
      LED1=1;

      LED2=0;
      Delay();
      LED2=1;
 
      LED3=0;
      Delay();
      LED3=1;
    }
}
```
4、在工程中，生成HEX文件，并将其下载到CC2530开发板内，验证实验结果。
![1](zigbee_images\zigbee1\1.jpg)
![2](zigbee_images\zigbee1\2.jpg)
## **四、实验结论**
    本次流水灯实验顺利完成。实验中熟悉了IAR 软件的使用方法，掌握工程创建、程序编译与下载流程。同时理解了 CC2530 单片机 I/O 方向寄存器的配置原理，将 LED 对应端口设置为输出模式。通过编写延时函数与循环代码，成功实现三只 LED 依次点亮熄灭的流水效果。本次实验将单片机编程与硬件实操相结合，掌握了 CC2530 基础 IO 口编程方法，为后续无线传感网络实验打下基础。